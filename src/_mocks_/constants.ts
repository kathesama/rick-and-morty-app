import { GridColDef } from '@mui/x-data-grid';

const dataRow = [
  { id: 1, name: 'Snow', image: 'Jon', status: 35 },
  { id: 2, name: 'Lannister', image: 'Cersei', status: 42 },
  { id: 3, name: 'Lannister', image: 'Jaime', status: 45 },
  { id: 4, name: 'Stark', image: 'Arya', status: 16 },
  { id: 5, name: 'Targaryen', image: 'Daenerys', status: null },
  { id: 6, name: 'Melisandre', image: null, status: 150 },
  { id: 7, name: 'Clifford', image: 'Ferrara', status: 44 },
  { id: 8, name: 'Frances', image: 'Rossini', status: 36 },
  { id: 9, name: 'Roxie', image: 'Harvey', status: 65 },
];

const columnsConfig: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    hideable: false
  },
  {
    field: 'image',
    headerName: 'Avatar',
    width: 150,
    hideable: false
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    hideable: false,
  },
  {
    field: 'status',
    headerName: 'status',
    type: 'String',
    width: 110,
  },
];

export {
  dataRow,
  columnsConfig as CharacterColumnsConfig
};
