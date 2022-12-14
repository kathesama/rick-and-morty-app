import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowEpisodesPage } from './ShowEpisodes';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/Pages/ShowEpisodes',
  component: ShowEpisodesPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/episodes/1`]}>
            <Routes>
              <Route path="/episodes/:id" element={<Story />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ShowEpisodesPage>;

const Template: ComponentStory<typeof ShowEpisodesPage> = (args) => <ShowEpisodesPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowEpisodesPage',
};
