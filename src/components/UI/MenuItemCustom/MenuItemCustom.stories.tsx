import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link, MemoryRouter } from 'react-router-dom';

import { MenuItemCustomComponent } from './MenuItemCustom';

export default {
  title: 'Component/UI/MenuItemCustomComponent',
  component: MenuItemCustomComponent,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof MenuItemCustomComponent>;

const Template: ComponentStory<typeof MenuItemCustomComponent> = (args) => <MenuItemCustomComponent {...args} />;

export const Default = Template.bind({});

export const MenuItemWithAHref = Template.bind({});
MenuItemWithAHref.args = {
  keyId: uuidv4(),
  children: 'hello world',
  component: 'a',
  to: '',
  href: '/url/to/go',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {}
};

export const MenuItemWithALink = Template.bind({});
MenuItemWithALink.args = {
  keyId: uuidv4(),
  children: 'hello world',
  component: Link,
  to: '/url/to/go',
  href: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {}
};
