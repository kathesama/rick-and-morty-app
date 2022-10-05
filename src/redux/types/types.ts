import { GetCharactersPage } from '../../graphql/__generated__/GetCharactersPage';

interface ICharactersEmptyState {
    data: GetCharactersPage[];
    error: any;
    loading: boolean;
}

export default ICharactersEmptyState;

