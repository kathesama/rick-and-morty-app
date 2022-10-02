import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';

export default {
  title: 'Component/UI/Logo',
  component: Logo,
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
