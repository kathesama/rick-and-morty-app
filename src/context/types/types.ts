import { FilterCharacter } from '../../../__generated__/globalTypes';

interface ICharacters {
    filterValue?: FilterCharacter | undefined;
    pageIndex: number;
}

const CharactersInitialState: ICharacters = {
    pageIndex: 0,
    filterValue: {},
};

type CharactersActions =
    | { type: 'UPDATE_PAGE_INDEX', payload: number };

export {
    ICharacters,
    CharactersInitialState,
    CharactersActions
};

