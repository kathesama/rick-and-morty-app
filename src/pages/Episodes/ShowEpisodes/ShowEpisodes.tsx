/*
Created by: Katherine Aguirre
On: 10/10/2022 : 10/10/2022
Project: rick-and-morty-app
*/
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { Column } from 'react-table';
import { Badge, CardContent, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line camelcase
import { GetAllEpisodesPage_episodes_results } from '../../../graphql/__generated__/GetAllEpisodesPage';
import { GET_ALL_EPISODES } from '../../../graphql/queries';
import { getEpisodesState, setPageFilter, setPageIndex } from '../../../redux/episodes/episodes.slice';

import { FilterEpisode } from '../../../../__generated__/globalTypes';
import { DynamicFilterComponent, IFilterSchema } from '../../../components/DynamicFilter/DynamicFilter';
import { IEpisodes } from '../../../redux/types/types';
import CustomTableComponent from '../../../components/CustomTable/CustomTable';
import { ContentWrapperComponent } from '../../../components/UI/ContentWrapper/ContentWrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowEpisodesPage {}

const ShowEpisodesPage: FC<PropsShowEpisodesPage> = (): any => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pageIndex = 0, filterValue } = useSelector(getEpisodesState);

  // eslint-disable-next-line camelcase
  const [episodesData, setEpisodesData] = useState<GetAllEpisodesPage_episodes_results[]>([]);

  const [totalCount, setTotalCount] = useState(1);

  const [fetchEpisodesData, { data, loading, error, refetch }] = useLazyQuery(GET_ALL_EPISODES, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  const columns: Column<any>[] = useMemo(
    () => [
      {
        Header: 'ID',
        id: 'id',
        accessor: 'id',
        sortType: 'string',
        disableGlobalFilter: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: ({ cell }: any) => (
          <div>
            <Badge badgeContent={cell.row.original.id} max={9999} />
          </div>
        ),
      },
      {
        Header: 'Name',
        id: 'name',
        accessor: 'name',
        sortType: 'string',
        customAttribute: 'inputField',
      },
      {
        Header: 'Episode',
        id: 'episode',
        accessor: 'episode',
        sortType: 'string',
        customAttribute: 'inputField',
      },
    ],
    []
  );

  // alt={cell.row.original.episode}
  const fetchUpdateFilter = useCallback(
    async (filter: FilterEpisode) => {
      await dispatch(setPageFilter(filter));
    },
    [dispatch]
  );

  const filterHeader = useMemo(() => {
    const createFilterSchema: IFilterSchema = {
      callbackFunction: fetchUpdateFilter,
      actualFilterData: filterValue,
      fields: columns
        ?.filter((item) => !item.disableGlobalFilter)
        .map((column: any) => ({
          accessor: column?.id,
          filterType: column?.customAttribute,
        })),
    };

    return <DynamicFilterComponent variant="outlined" label="Filter(s) by" data={createFilterSchema} extraData={{}} />;
  }, [columns, fetchUpdateFilter, filterValue]);

  useEffect(() => {
    fetchEpisodesData({
      variables: {
        page: 1,
        filter: { ...filterValue },
      },
    });
  }, [fetchEpisodesData, filterValue]);

  const onRowClick = useCallback(
    ({ id }: any) => {
      navigate(`/episodes/${id}`);
    },
    [navigate]
  );

  const handleFetchDataFromTable = useCallback(
    async ({ pageIndex: pageValue }: IEpisodes) => {
      await dispatch(setPageIndex(pageValue));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!loading && data) {
      setEpisodesData(data?.episodes?.results || []);
      setTotalCount(data?.episodes?.info?.pages || 0);
    }
  }, [data, loading]);

  useEffect(() => {
    refetch({
      page: pageIndex,
    });
  }, [pageIndex, refetch]);

  // TODO: add custom css for error message or create an error message component
  if (error) return <div data-testid="ShowCharactersPage">Error</div>;

  return (
    <CardContent data-testid="ShowEpisodesPage">
      {filterHeader}
      <ContentWrapperComponent>
        <CustomTableComponent disableFilters onRowClick={onRowClick} onFetchData={handleFetchDataFromTable} columns={columns} data={episodesData} loading={loading} count={totalCount} queryPageSize={1} />
      </ContentWrapperComponent>
    </CardContent>
  );
};

export { ShowEpisodesPage, PropsShowEpisodesPage };
