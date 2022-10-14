import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowSingleCharacterPage } from './ShowSingleCharacter';

export default {
  title: 'Component/Pages/ShowSingleCharacter',
  component: ShowSingleCharacterPage,
} as ComponentMeta<typeof ShowSingleCharacterPage>;

const Template: ComponentStory<typeof ShowSingleCharacterPage> = (args) => <ShowSingleCharacterPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowSingleCharacterPage',
};
