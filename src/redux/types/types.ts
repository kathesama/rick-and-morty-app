import { FilterCharacter } from '../../../__generated__/globalTypes';

interface ICharactersEmptyState {
  pageIndex: number;
  filterFillersData: {
    gender: string[];
    status: string[];
  };
  filterValue: FilterCharacter | undefined;
}

export default ICharactersEmptyState;