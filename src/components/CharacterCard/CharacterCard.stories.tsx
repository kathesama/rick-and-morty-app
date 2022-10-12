import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CharacterCardComponent } from './CharacterCard';

export default {
  title: 'Component/Functional/CharacterCard',
  component: CharacterCardComponent,
} as ComponentMeta<typeof CharacterCardComponent>;

const Template: ComponentStory<typeof CharacterCardComponent> = (args) => <CharacterCardComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'CharacterCardComponent',
  id: 1,
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};
