import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeaderPage } from './HeaderPage';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../graphql';

export default {
  title: 'Component/Pages/Header',
  component: HeaderPage,
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
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HeaderPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof HeaderPage> = (args) => <HeaderPage {...args} />;

export const Default = Template.bind({});
