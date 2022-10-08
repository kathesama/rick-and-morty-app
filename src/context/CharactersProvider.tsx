import React, { useMemo, useReducer } from 'react';
import CharactersContext, { CharactersContextProps, INITIAL_STATE } from './CharactersContext';
import CharactersReducer from './CharactersReducer';

interface Props {
  children: JSX.Element | JSX.Element[]
}
const CharactersProviderComponent = (props: Props) => {
  const [charactersState, dispatchCharacterAction] = useReducer(CharactersReducer, INITIAL_STATE);

  const updatePage = (page: number) =>
    dispatchCharacterAction({
      type: 'UPDATE_PAGE_INDEX',
      payload: page,
    });

  const charactersContext: CharactersContextProps = useMemo(() => ({
    charactersState: {
      pageIndex: charactersState?.pageIndex,
      filterValue: charactersState?.filterValue,
    },
    updatePage,
  }),[charactersState?.filterValue, charactersState?.pageIndex]);

  return (
    <CharactersContext.Provider value = { charactersContext } >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      { props?.children }
    </CharactersContext.Provider>
  );
};

export default CharactersProviderComponent;
