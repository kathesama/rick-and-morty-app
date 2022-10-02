import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuNavBarComponent } from '../../components/UI/MenuNavBar/MenuNavBar';

export default {
  title: 'Component/UI/MenuNavBar',
  component: MenuNavBarComponent,
} as ComponentMeta<typeof MenuNavBarComponent>;

const Template: ComponentStory<typeof MenuNavBarComponent> = (args) => <MenuNavBarComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'MenuNavBarComponent',
};
