import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CharacterCardComponent } from './CharacterCard';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

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
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/characters`]}>
            <Routes>
              <Route path="/characters" element={<Story />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CharacterCardComponent>;

const Template: ComponentStory<typeof CharacterCardComponent> = (args) => <CharacterCardComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'CharacterCardComponent',

  ...defaultProps,
};
