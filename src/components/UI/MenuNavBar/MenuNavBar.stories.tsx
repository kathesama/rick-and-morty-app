import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { MenuNavBarComponent } from './MenuNavBar';

export default {
  title: 'Component/UI/MenuNavBar',
  component: MenuNavBarComponent,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof MenuNavBarComponent>;

const Template: ComponentStory<typeof MenuNavBarComponent> = (args) => <MenuNavBarComponent {...args} />;

export const Default = Template.bind({});
