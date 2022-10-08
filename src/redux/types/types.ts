import { GetCharactersPage } from '../../graphql/__generated__/GetCharactersPage';
import { FilterCharacter } from '../../../__generated__/globalTypes';

interface ICharactersEmptyState {
    pageIndex: number;
    filterValue?: FilterCharacter | undefined;
}

export default ICharactersEmptyState;

