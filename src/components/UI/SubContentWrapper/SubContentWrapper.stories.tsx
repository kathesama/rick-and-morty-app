import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SubContentWrapperComponent } from './SubContentWrapper';

export default {
  title: 'Component/SubContentWrapperComponent',
  component: SubContentWrapperComponent,
} as ComponentMeta<typeof SubContentWrapperComponent>;

const Template: ComponentStory<typeof SubContentWrapperComponent> = (args) => <SubContentWrapperComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'SubContentWrapperComponent',
};
