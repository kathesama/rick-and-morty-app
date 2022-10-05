/*
Created by: Katherine Aguirre
On: 02/10/2022 : 02/10/2022
Project: rick-and-morty-app
*/
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { Column } from 'react-table';

import cssStyle from './ShowCharacters.module.scss';
import {
  getCharacterPageData,
  getCharacterPageStates,
} from '../../../redux/characters/characters.slice';
import fetchAsyncCharactersListing from '../../../redux/characters/characters.actions';
import { DataGridComponent } from '../../../components/DataGrid/DataGrid';
import { CharacterColumnsConfig, dataRow } from '../../../_mocks_/constants';
import { DefaultColumnFilter } from '../../../utilities/gridFilters';
import { CustomTableComponent } from '../../../components/CustomTable/CustomTable';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowCharactersPage {
}

const ShowCharactersPage: FC<any> = (props: PropsShowCharactersPage): any => {
  const dispatch = useDispatch();
  const { loading = false, error = null } = useSelector(getCharacterPageStates);
  const { data } = useSelector(getCharacterPageData);
  const [dataFilter, setDataFilter] = useState(undefined);

  console.log('LOADING: ', loading);
  console.log('ERROR: ', error);
  console.log('DATA: ', data);

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

  useEffect(() => {
    if (!loading && !error)
      dispatch(fetchAsyncCharactersListing({
        filter: dataFilter,
      }));
  }, [dataFilter, dispatch, error, loading]);

  if (loading)
    return (
      <div className={cssStyle.example} data-testid='ShowCharactersPage'>
        Loading...
      </div>
    );

  if (error)
    return (
      <div className={cssStyle.example} data-testid='ShowCharactersPage'>
        Error
      </div>
    );

  return (
    <div className={cssStyle.example} data-testid='ShowCharactersPage'>
      {!loading && <CustomTableComponent data={data?.results} columns={columns} loading={loading} />}
      {/* ShowCharactersPage */}
    </div>
  );
};

export {
  ShowCharactersPage,
  PropsShowCharactersPage,
};
