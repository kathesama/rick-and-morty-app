import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowSingleLocationPage } from './ShowSingleLocation';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/Pages/ShowSingleLocation',
  component: ShowSingleLocationPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/locations/1`]}>
            <Routes>
              <Route path="/locations/:id" element={<Story />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ShowSingleLocationPage>;

const Template: ComponentStory<typeof ShowSingleLocationPage> = (args) => <ShowSingleLocationPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowSingleLocationPage',
};
