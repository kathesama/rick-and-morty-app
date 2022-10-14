import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SubContentTitleComponent } from './SubContentTitle';

export default {
  title: 'Component/SubContentTitleComponent',
  component: SubContentTitleComponent,
} as ComponentMeta<typeof SubContentTitleComponent>;

const Template: ComponentStory<typeof SubContentTitleComponent> = (args) => <SubContentTitleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'SubContentTitleComponent',
};
