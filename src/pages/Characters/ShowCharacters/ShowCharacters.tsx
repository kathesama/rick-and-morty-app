/*
Created by: Katherine Aguirre
On: 02/10/2022 : 02/10/2022
Project: rick-and-morty-app
*/
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, CardContent } from '@mui/material';
import { Column } from 'react-table';
import { useLazyQuery } from '@apollo/react-hooks';

import { GET_ALL_CHARACTERS } from '../../../graphql/queries';
// eslint-disable-next-line camelcase
import { GetCharactersPage_characters_results } from '../../../graphql/__generated__/GetCharactersPage';
import { getCharactersState, setPageFilter, setPageIndex } from '../../../redux/characters/characters.slice';
import { ICharacters } from '../../../context/types/types';
import CustomTableComponent from '../../../components/CustomTable/CustomTable';
import { FilterCharacter } from '../../../../__generated__/globalTypes';
import { DynamicFilterComponent, IFilterSchema } from '../../../components/DynamicFilter/DynamicFilter';

import cssStyle from './ShowCharacters.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowCharactersPage {}

const ShowCharactersPage: FC<PropsShowCharactersPage> = () => {
  const dispatch = useDispatch();
  const {
    pageIndex = 0,
    filterValue,
    filterFillersData: { gender: genderSelector, status: statusSelector },
  } = useSelector(getCharactersState);

  // eslint-disable-next-line camelcase
  const [charactersData, setCharactersData] = useState<GetCharactersPage_characters_results[]>([]);

  const [totalCount, setTotalCount] = useState(1);

  const [fetchCharactersData, { data, loading, error, refetch }] = useLazyQuery(GET_ALL_CHARACTERS, {
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
      },
      {
        Header: 'Avatar',
        id: 'image',
        accessor: 'image',
        disableGlobalFilter: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: ({ cell }: any) => (
          <div>
            <Avatar alt={cell.row.original.name} src={cell.row.original.image} />
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
        Header: 'Status',
        id: 'status',
        accessor: 'status',
        sortType: 'string',
        customAttribute: 'dropdown',
      },
      {
        Header: 'Gender',
        id: 'gender',
        accessor: 'gender',
        sortType: 'string',
        customAttribute: 'dropdown',
      },
    ],
    []
  );

  const fetchUpdateFilter = useCallback(
    async (filter: FilterCharacter) => {
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

    return (
      <DynamicFilterComponent
        variant="outlined"
        label="Filter(s) by"
        data={createFilterSchema}
        extraData={{
          gender: genderSelector,
          status: statusSelector,
        }}
      />
    );
  }, [columns, fetchUpdateFilter, filterValue, genderSelector, statusSelector]);

  useEffect(() => {
    fetchCharactersData({
      variables: {
        page: 1,
        filter: { ...filterValue },
      },
    });
  }, [fetchCharactersData, filterValue]);

  /* TODO: actualizar el componente tabla con lo que se hizo en newTable
     TODO: quitar componente pagination */
  const onRowClick = useCallback((id: any) => {
    console.log('onRowClick clicked with ID:', id);
  }, []);

  const handleFetchDataFromTable = useCallback(
    async ({ pageIndex: pageValue }: ICharacters) => {
      await dispatch(setPageIndex(pageValue));
    },
    [dispatch]
  );

  useEffect(() => {
    refetch({
      page: pageIndex + 1,
    });
  }, [pageIndex, refetch]);

  useEffect(() => {
    if (!loading && data) {
      setCharactersData(data?.characters?.results || []);
      setTotalCount(data?.characters?.info?.pages || 0);
    }
  }, [data, loading]);

  // TODO: add custom css for error message or create an error message component
  if (error)
    return (
      <div className={cssStyle.example} data-testid="ShowCharactersPage">
        Error
      </div>
    );

  return (
    <CardContent>
      {filterHeader}
      <CustomTableComponent disableFilters onRowClick={onRowClick} onFetchData={handleFetchDataFromTable} columns={columns} data={charactersData} loading={loading} count={totalCount} queryPageSize={1} />
    </CardContent>
  );
};

export { ShowCharactersPage, PropsShowCharactersPage };
