import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowSingleEpisodePage } from './ShowSingleEpisode';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/Pages/ShowSingleEpisode',
  component: ShowSingleEpisodePage,
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
} as ComponentMeta<typeof ShowSingleEpisodePage>;

const Template: ComponentStory<typeof ShowSingleEpisodePage> = (args) => <ShowSingleEpisodePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowSingleEpisodePage',
};
