import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderPage } from '../../pages/Header/HeaderPage';

export default {
  title: 'Component/Pages/Header',
  component: HeaderPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HeaderPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof HeaderPage> = (args) => <HeaderPage {...args} />;

export const Default = Template.bind({});
