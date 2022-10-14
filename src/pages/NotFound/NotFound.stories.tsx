import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotFoundPage } from './NotFound';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/Pages/NotFound',
  component: NotFoundPage,
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
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'NotFoundPage',
};
