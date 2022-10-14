import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowLocationsPage } from './ShowLocations';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/Pages/ShowLocationsPage',
  component: ShowLocationsPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/locations`]}>
            <Routes>
              <Route path="/locations" element={<Story />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ShowLocationsPage>;

const Template: ComponentStory<typeof ShowLocationsPage> = (args) => <ShowLocationsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowLocationsPage',
};
