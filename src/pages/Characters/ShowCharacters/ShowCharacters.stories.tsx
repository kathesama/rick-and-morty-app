import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ApolloProvider } from '@apollo/client';

import { ShowCharactersPage } from './ShowCharacters';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import apolloClient from '../../../graphql';

export default {
  title: 'Component/Pages/ShowCharacters',
  component: ShowCharactersPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Story />
        </ApolloProvider>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ShowCharactersPage>;

const Template: ComponentStory<typeof ShowCharactersPage> = (args) => <ShowCharactersPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowCharactersPage',
};
