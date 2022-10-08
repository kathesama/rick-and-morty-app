import { createContext } from 'react';
import { CharactersInitialState, ICharacters } from './types/types';
import { FilterCharacter } from '../../__generated__/globalTypes';

type CharactersContextProps = {
  charactersState: ICharacters;
  updatePage: (page: number) => void,
};

const INITIAL_STATE: ICharacters = {
  pageIndex: 0,
  filterValue: {}
};

const CharactersContext = createContext<CharactersContextProps>({} as CharactersContextProps);

export default CharactersContext;

export {
  INITIAL_STATE,
  CharactersContextProps
};
