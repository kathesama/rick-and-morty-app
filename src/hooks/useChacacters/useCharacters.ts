import CharactersContext from 'context/CharactersContext';
import { useContext } from 'react';

const useCharacters = () => {
  const { charactersState, updatePage } = useContext(CharactersContext);

  return {
    ...charactersState,
    updatePage,
  };
};

export default useCharacters;
