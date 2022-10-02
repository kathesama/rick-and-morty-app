import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { AboutComponent } from './About';

export default {
  title: 'Component/UI/AboutMe',
  component: AboutComponent,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ]
} as ComponentMeta<typeof AboutComponent>;

const Template: ComponentStory<typeof AboutComponent> = (args) => <AboutComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'AboutComponent',
  settings: ['one', 'two', 'three'],
};
