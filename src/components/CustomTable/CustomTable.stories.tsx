import React, { memo, useMemo } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomTableComponent } from './CustomTable';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { DefaultColumnFilter } from '../../utilities/gridFilters';
import { Avatar } from '@mui/material';

export default {
  title: 'Component/Functional/CustomTable',
  component: CustomTableComponent,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CustomTableComponent>;

interface IColumns {
  id: string;
  avatar?: string;
  name?: string;
  gender?: string;
  status?: string;
}

const dataTable = {
  data: {
    characters: {
      info: {
        pages: 42,
        count: 826,
        next: 2,
        prev: null,
      },
      results: [
        {
          id: '1',
          name: 'Rick Sanchez',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          status: 'Alive',
          gender: 'Male',
        },
        {
          id: '2',
          name: 'Morty Smith',
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          status: 'Alive',
          gender: 'Male',
        },
        {
          id: '3',
          name: 'Summer Smith',
          image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
          status: 'Alive',
          gender: 'Female',
        },
        {
          id: '4',
          name: 'Beth Smith',
          image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
          status: 'Alive',
          gender: 'Female',
        },
        {
          id: '5',
          name: 'Jerry Smith',
          image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
          status: 'Alive',
          gender: 'Male',
        },
        {
          id: '6',
          name: 'Abadango Cluster Princess',
          image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
          status: 'Alive',
          gender: 'Female',
        },
      ],
    },
  },
};

const customCols = [
  {
    Header: 'ID',
    id: 'id',
    accessor: 'id',
    sortType: 'string',
    Filter: DefaultColumnFilter,
  },
  {
    Header: 'Avatar',
    id: 'image',
    accessor: 'image',
    Cell: ({ cell }: any) => (
      <div>
        <Avatar alt="Remy Sharp" src={cell.row.original.image} />
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
];

const Template: ComponentStory<typeof CustomTableComponent> = (args) => <CustomTableComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: dataTable?.data?.characters?.results,
  columns: customCols,
  fetchData: () => {},
};
