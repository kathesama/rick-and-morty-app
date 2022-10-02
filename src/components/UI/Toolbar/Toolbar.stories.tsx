import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolbarBoxComponent } from './Toolbar';

export default {
  title: 'Component/UI/Toolbar',
  component: ToolbarBoxComponent,
} as ComponentMeta<typeof ToolbarBoxComponent>;

const Template: ComponentStory<typeof ToolbarBoxComponent> = (args) => <ToolbarBoxComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ResponsiveBoxComponent',
  pages: ['one', 'two', 'three'],
};
