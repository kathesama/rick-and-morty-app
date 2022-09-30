import React from 'react';
import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react';
import { ListingCharacters, Props } from '../../components/ListingCharacters/ListingCharacters';

const meta: ComponentMeta<typeof ListingCharacters> = {
  title: 'Component/Functional/ListingCharacters',
  component: ListingCharacters,
};

export default meta;

const Template: ComponentStory<typeof ListingCharacters> = (args) => <ListingCharacters {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Hi, how are you?',
  variant: 'info',
};
