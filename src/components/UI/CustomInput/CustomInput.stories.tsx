import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomInputComponent } from './CustomInput';

export default {
  title: 'Component/UI/CustomInput',
  component: CustomInputComponent,
  primary: true,
} as ComponentMeta<typeof CustomInputComponent>;

const Template: ComponentStory<typeof CustomInputComponent> = (args) => <CustomInputComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  widthValue: '250px',
  label: 'Custom Input Component',
};

export const WithDefaultComponentValues = Template.bind({});

