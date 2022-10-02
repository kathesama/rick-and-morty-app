import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AboutComponent } from './About';

export default {
  title: 'Component/UI/AboutMe',
  component: AboutComponent,
} as ComponentMeta<typeof AboutComponent>;

const Template: ComponentStory<typeof AboutComponent> = (args) => <AboutComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'AboutComponent',
  settings: ['one', 'two', 'three'],
};
