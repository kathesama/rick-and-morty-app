import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { MenuNavBarComponent } from './MenuNavBar';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';

export default {
  title: 'Component/UI/MenuNavBar',
  component: MenuNavBarComponent,
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
} as ComponentMeta<typeof MenuNavBarComponent>;

const Template: ComponentStory<typeof MenuNavBarComponent> = (args) => <MenuNavBarComponent {...args} />;

export const Default = Template.bind({});
