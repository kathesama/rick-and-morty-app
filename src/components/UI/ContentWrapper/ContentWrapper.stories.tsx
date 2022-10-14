import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentWrapperComponent } from './ContentWrapper';

export default {
  title: 'Component/ContentWrapperComponent',
  component: ContentWrapperComponent,
} as ComponentMeta<typeof ContentWrapperComponent>;

const Template: ComponentStory<typeof ContentWrapperComponent> = (args) => <ContentWrapperComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ContentWrapperComponent',
};
