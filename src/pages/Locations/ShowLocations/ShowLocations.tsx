/*
Created by: Katherine Aguirre
On: 10/10/2022 : 10/10/2022
Project: rick-and-morty-app
*/
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { Column } from 'react-table';
import { Badge, CardContent } from '@mui/material';

import { getLocationState, setPageFilter, setPageIndex } from '../../../redux/locations/locations.slice';

// eslint-disable-next-line camelcase
import { GetAllLocationsPage_locations_results } from '../../../graphql/__generated__/GetAllLocationsPage';
import { GET_ALL_LOCATIONS } from '../../../graphql/queries';

import { DynamicFilterComponent, IFilterSchema } from '../../../components/DynamicFilter/DynamicFilter';
import { FilterLocation } from '../../../../__generated__/globalTypes';
import { ILocations } from '../../../redux/types/types';
import CustomTableComponent from '../../../components/CustomTable/CustomTable';
import { ContentWrapperComponent } from '../../../components/UI/ContentWrapper/ContentWrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowLocationsPage {}

const ShowLocationsPage: FC<PropsShowLocationsPage> = (): any => {
  const dispatch = useDispatch();
  const { pageIndex = 0, filterValue } = useSelector(getLocationState);

  // eslint-disable-next-line camelcase
  const [locationsData, setLocationsData] = useState<GetAllLocationsPage_locations_results[]>([]);

  const [totalCount, setTotalCount] = useState(1);

  const [fetchLocationsData, { data, loading, error, refetch }] = useLazyQuery(GET_ALL_LOCATIONS, {
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
        Header: 'Dimension',
        id: 'dimension',
        accessor: 'dimension',
        sortType: 'string',
        customAttribute: 'inputField',
      },
      {
        Header: 'Type',
        id: 'type',
        accessor: 'type',
        sortType: 'string',
        customAttribute: 'inputField',

        /* // eslint-disable-next-line react/no-unstable-nested-components
           Cell: ({ cell }: any) => (
             <Chip
               variant="soft"
               size="md"
               sx={{
                 fontSize: '12px',
               }}
               startDecorator={
                 <FontAwesomeIcon icon="map-location-dot" color="OrangeRed" size="lg" title={cell.row.original.status} />
               }>
               {cell.row.original.type}
             </Chip>
           ), */
      },
    ],
    []
  );

  const fetchUpdateFilter = useCallback(
    async (filter: FilterLocation) => {
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
    fetchLocationsData({
      variables: {
        page: 1,
        filter: { ...filterValue },
      },
    });
  }, [fetchLocationsData, filterValue]);

  // const onRowClick = useCallback((id: any) => {
  const onRowClick = useCallback(() => {
    // console.log('onRowClick clicked with ID:', id);
  }, []);

  const handleFetchDataFromTable = useCallback(
    async ({ pageIndex: pageValue }: ILocations) => {
      await dispatch(setPageIndex(pageValue));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!loading && data) {
      setLocationsData(data?.locations?.results || []);
      setTotalCount(data?.locations?.info?.pages || 0);
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
    <CardContent data-testid="ShowLocationsPage">
      {filterHeader}
      <ContentWrapperComponent>
        <CustomTableComponent disableFilters onRowClick={onRowClick} onFetchData={handleFetchDataFromTable} columns={columns} data={locationsData} loading={loading} count={totalCount} queryPageSize={1} />
      </ContentWrapperComponent>
    </CardContent>
  );
};

export { ShowLocationsPage, PropsShowLocationsPage };
