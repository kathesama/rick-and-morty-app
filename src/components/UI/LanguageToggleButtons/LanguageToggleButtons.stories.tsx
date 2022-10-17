import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LanguageToggleButtonsComponent } from './LanguageToggleButtons';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Component/UI/LanguageToggleButtons',
  component: LanguageToggleButtonsComponent,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Story />
        </ApolloProvider>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof LanguageToggleButtonsComponent>;

const Template: ComponentStory<typeof LanguageToggleButtonsComponent> = (args) => <LanguageToggleButtonsComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'LanguageToggleButtonsComponent',
};
