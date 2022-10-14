import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DetailsCartWrapperComponent } from './DetailsCartWrapper';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/Functional/DetailsCartWrapper',
  component: DetailsCartWrapperComponent,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/characters`]}>
            <Routes>
              <Route path="/characters" element={<Story />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof DetailsCartWrapperComponent>;

const Template: ComponentStory<typeof DetailsCartWrapperComponent> = (args) => <DetailsCartWrapperComponent {...args} />;

const dataArgs = {
  componentIdName: 'show-single-location',
  name: 'Dimension C-137',
  elements: {
    icon: 'people-roof',
    iconColor: 'RoyalBlue',
    type: 'Resident(s)',
    data: [
      {
        id: '38',
        name: 'Beth Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
      },
      {
        id: '45',
        name: 'Bill',
        image: 'https://rickandmortyapi.com/api/character/avatar/45.jpeg',
      },
    ],
  },
  descriptionFields: [
    {
      icon: 'dna',
      iconColor: 'Crimson',
      data: 'Planet',
      type: 'Type',
    },
    {
      icon: 'microscope',
      iconColor: 'Indigo',
      data: 'Dimension C-137',
      type: 'Dimension',
    },
  ],
  urlToNavigate: '/characters/',
};

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'DetailsCartWrapperComponent',
  ...dataArgs,
};
