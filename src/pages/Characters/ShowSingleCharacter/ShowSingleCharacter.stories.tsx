import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowSingleCharacterPage } from './ShowSingleCharacter';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/Pages/ShowSingleCharacter',
  component: ShowSingleCharacterPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/characters/1`]}>
            <Routes>
              <Route path="/characters/:id" element={<Story />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ShowSingleCharacterPage>;

const Template: ComponentStory<typeof ShowSingleCharacterPage> = (args) => <ShowSingleCharacterPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowSingleCharacterPage',
};
