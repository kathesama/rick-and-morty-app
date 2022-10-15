import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/UI/Logo',
  component: Logo,
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
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoText: 'Rick and Morty',
};

export const WithoutTestAsParam = Template.bind({});
WithoutTestAsParam.args = {};
