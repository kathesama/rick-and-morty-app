import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuItemCustomComponent } from './MenuItemCustom';

export default {
  title: 'Component/MenuItemCustomComponent',
  component: MenuItemCustomComponent,
} as ComponentMeta<typeof MenuItemCustomComponent>;

const Template: ComponentStory<typeof MenuItemCustomComponent> = (args) => <MenuItemCustomComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'MenuItemCustomComponent',
};
