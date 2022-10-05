import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ShowCharactersPage} from './ShowCharacters';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

export default {
  title: 'Component/Pages/ShowCharacters',
  component: ShowCharactersPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
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
