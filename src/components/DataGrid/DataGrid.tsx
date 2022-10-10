/*
Created by: Katherine Aguirre
On: 02/10/2022 : 21:04
Project: rick-and-morty-app
*/
import React, { useState, FC } from 'react';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';

import cssStyle from './DataGrid.module.scss';
import { Character } from '../../models/Character';
import { CharactersInitialState } from '../../_mocks_/constants';

interface PropsDataGridComponent {
  data: Character[];
  columns: GridColDef[];
}

const DataGridComponent: FC<any> = ({ data = [], columns = []}: PropsDataGridComponent): any => {
  const [state, setState] = useState('');

  return (
    <div className={cssStyle.example} data-testid='DataGridComponent'>
      <Box sx={{ height: 400, width: '100%' }} data-testid='box-data-gird-id'>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          data-testid='datagrid-data-grid-id'
          components={{
            Toolbar: GridToolbar,
          }}
          initialState={CharactersInitialState}
        />
      </Box>
    </div>
  );
};

export {
  DataGridComponent,
  PropsDataGridComponent,
};
