import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolbarBoxComponent } from './Toolbar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Component/UI/Toolbar',
  component: ToolbarBoxComponent,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ToolbarBoxComponent>;

const Template: ComponentStory<typeof ToolbarBoxComponent> = (args) => <ToolbarBoxComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ResponsiveBoxComponent',
  pages: ['one', 'two', 'three'],
};
