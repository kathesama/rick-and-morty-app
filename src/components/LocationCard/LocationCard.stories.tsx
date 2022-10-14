import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LocationCardComponent } from './LocationCard';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/Functional/LocationCard',
  component: LocationCardComponent,
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
} as ComponentMeta<typeof LocationCardComponent>;

const defaultProps = {
  id: '1',
  name: 'Earth (C-137)',
  type: 'Planet',
  dimension: 'Dimension C-137',
  residents: [
    {
      id: '38',
      name: 'Beth Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
    },
  ],
};

const Template: ComponentStory<typeof LocationCardComponent> = (args) => <LocationCardComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'LocationCardComponent',
  ...defaultProps,
};
