import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomChipComponent } from './CustomChip';

export default {
  title: 'Component/UI/CustomChip',
  component: CustomChipComponent,
} as ComponentMeta<typeof CustomChipComponent>;

const Template: ComponentStory<typeof CustomChipComponent> = (args) => <CustomChipComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'CustomChipComponent',
};
