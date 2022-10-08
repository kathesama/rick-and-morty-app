/*
Created by: Katherine Aguirre
On: 02/10/2022 : 02/10/2022
Project: rick-and-morty-app
*/
import React, { FC, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, CardContent, Table } from '@mui/material';
import { Column } from 'react-table';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';

import cssStyle from './ShowCharacters.module.scss';
import fetchAsyncCharactersListing from '../../../redux/characters/characters.actions';
import { DataGridComponent } from '../../../components/DataGrid/DataGrid';
import { CharacterColumnsConfig, dataRow } from '../../../_mocks_/constants';
import { DefaultColumnFilter } from '../../../utilities/gridFilters';
import { CustomTableComponent } from '../../../components/CustomTable/CustomTable';
import { GET_ALL_CHARACTERS } from '../../../graphql/queries';
import { CharacterSchemaInterface } from '../../../graphql/InterfaceTypes';
import { LoadingCircleComponent } from '../../../components/UI/LoadingCircle/LoadingCircle';
import { PaginationFooterComponent } from '../../../components/PaginationFooter/PaginationFooter';
// eslint-disable-next-line camelcase
import { GetCharactersPage_characters_results } from '../../../graphql/__generated__/GetCharactersPage';
import CharactersContext from '../../../context/CharactersContext';
import useCharacters from '../../../hooks/useChacacters/useCharacters';
import { getCharactersState, setPageIndex } from '../../../redux/characters/characters.slice';
import { ICharacters } from '../../../context/types/types';
import NewTable from '../../../components/CustomTable/NewTable';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowCharactersPage {
}

interface IPaginationInfo {
  pages?: number | null,
  count?: number | null,
  next?: number | null,
  prev?: number | null
}

const PaginationInfoDefault: IPaginationInfo = {
  pages: 0,
  count: 0,
  next: 0,
  prev: 0,
};


const ShowCharactersPage: FC<any> = (props: PropsShowCharactersPage): any => {
  const dispatch = useDispatch();
  const { pageIndex = 0, filterValue } = useSelector(getCharactersState);

  // eslint-disable-next-line camelcase
  const [charactersData, setCharactersData] = useState<GetCharactersPage_characters_results[]>([]);
  const [totalCount, setTotalCount] = useState(1);
  // const [queryVariables, setQueryVariables] = useState({ page: 1, filter: {} });

  // const { data, loading, error, fetchMore } = useQuery(GET_ALL_CHARACTERS, { variables: { page: pageToGo, filter: {} } });

  const [fetchCharactersData, { data, loading, error, refetch }] = useLazyQuery(GET_ALL_CHARACTERS, {
       notifyOnNetworkStatusChange: true
     });

  const columns: Column<any>[] = useMemo(
    () => [
      {
        Header: 'ID',
        id: 'id',
        accessor: 'id',
        sortType: 'string',
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
      },
      {
        Header: 'Status',
        id: 'status',
        accessor: 'status',
        sortType: 'string',
      },
      {
        Header: 'Gender',
        id: 'gender',
        accessor: 'gender',
        sortType: 'string',
      },
    ],[]);


  useEffect( () => {
    console.log('useEffect show--------------------------------- ');
    fetchCharactersData({
      variables: {
        page: 1,
        // filter: {...filterValue}
      }
    });
  },[fetchCharactersData]);

  const onRowClick = useCallback((id: any) => {
    console.log('onRowClick clicked with ID:', id);
  }, []);

  const handleFetchDataFromTable = useCallback(async ({pageIndex: pageValue, filterValue: filter} : ICharacters) => {
    console.log('handleFetchDataFromTable show --------------------------------- ');
    console.log('pageValue: ', pageValue);
    await dispatch(setPageIndex(pageValue));
  }, [dispatch]);

  useEffect(() => {
    refetch({
      page: pageIndex + 1 || 1
    });
   }, [pageIndex, refetch]);

  useEffect(() => {
    if (!loading && data) {
      setCharactersData(data?.characters?.results || []);
      setTotalCount(data?.characters?.info?.pages || 0);
    }
  }, [data, loading]);

  if (error)
    return (
      <div className={cssStyle.example} data-testid='ShowCharactersPage'>
        Error
      </div>
    );

  return (
    <CardContent>
      <NewTable
        disableFilters
        // onRowClick={onRowClick}
        onFetchData={handleFetchDataFromTable}
        columns={columns}
        data={charactersData}
        loading={loading}
        count={totalCount}
        queryPageSize={1}
      />
    </CardContent>
  );
};

export {
  ShowCharactersPage,
  PropsShowCharactersPage,
};
