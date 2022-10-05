import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaginationFooterComponent, PaginationFooterDefaultValues } from './PaginationFooter';

export default {
  title: 'Component/Functional/PaginationFooter',
  component: PaginationFooterComponent,
} as ComponentMeta<typeof PaginationFooterComponent>;

const Template: ComponentStory<typeof PaginationFooterComponent> = (args) => <PaginationFooterComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...PaginationFooterDefaultValues,
  pageSize: 10,
};
