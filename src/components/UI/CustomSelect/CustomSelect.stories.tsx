import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomSelectComponent } from './CustomSelect';

const VariantTypeEnum: any = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};

export default {
  title: 'Component/UI/CustomSelect',
  component: CustomSelectComponent,
  primary: true,
  argTypes: {
    variant: {
      options: VariantTypeEnum,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof CustomSelectComponent>;

const Template: ComponentStory<typeof CustomSelectComponent> = (args) => <CustomSelectComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select',
  options: ['one', 'two', 'three'],
  handlerOnChange: () => {},
};
