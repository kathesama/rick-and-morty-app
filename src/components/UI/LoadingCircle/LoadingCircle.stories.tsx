import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingCircleComponent } from './LoadingCircle';

export default {
  title: 'Component/UI/LoadingCircle',
  component: LoadingCircleComponent,
} as ComponentMeta<typeof LoadingCircleComponent>;

const Template: ComponentStory<typeof LoadingCircleComponent> = (args) => <LoadingCircleComponent {...args} />;

export const Default = Template.bind({});
