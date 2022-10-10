import { CharactersActions, CharactersInitialState, ICharacters } from './types/types';

const CharactersReducer = (state: ICharacters, action: CharactersActions): ICharacters => {
  switch (action.type) {
    case 'UPDATE_PAGE_INDEX':
      return {
        ...state,
        pageIndex: action.payload,
      };
    default:
      // eslint-disable-next-line consistent-return
      return state;
  }
};

export default CharactersReducer;
