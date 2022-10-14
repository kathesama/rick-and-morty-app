import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CharacterCardComponent } from './CharacterCard';

const defaultProps = {
  id: 1,
  image: 'https://rickandmortyapi.com/api/character/avatar/266.jpeg',
  name: 'Piece of Toast',
  gender: 'Genderless',
  status: 'Alive',
  location: 'unknown',
  species: 'unknown',
  type: 'Bread',
  origin: 'unknown',
  episode: [
    {
      id: 8,
      name: 'Rixty Minutes',
      episode: 'S01E08',
    },
  ],
};

export default {
  title: 'Component/Functional/CharacterCard',
  component: CharacterCardComponent,
} as ComponentMeta<typeof CharacterCardComponent>;

const Template: ComponentStory<typeof CharacterCardComponent> = (args) => <CharacterCardComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'CharacterCardComponent',

  ...defaultProps,
};
