import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ShowCharactersPage} from './ShowCharacters';

export default {
  title: 'Component/Pages/ShowCharactersPage',
  component: ShowCharactersPage,
} as ComponentMeta<typeof ShowCharactersPage>;

const Template: ComponentStory<typeof ShowCharactersPage> = (args) => <ShowCharactersPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowCharactersPage',
};
