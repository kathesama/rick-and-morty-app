import apolloClient from '../../graphql';
import {FilterCharacter} from '../../../__generated__/globalTypes';
import { GET_ALL_CHARACTERS } from '../../graphql/queries';
import { GetCharactersPage } from '../../graphql/__generated__/GetCharactersPage';


class SerieService {
    // eslint-disable-next-line class-methods-use-this
    async getCharactersPage(page?: number, filter?: FilterCharacter): Promise<GetCharactersPage['characters'] | undefined> {
        try{
            const response = await apolloClient.query({
                query: GET_ALL_CHARACTERS,
                variables: {
                    page,
                    filter
                }
            });

            if (!response || !response.data)
                throw new Error('Cannot get character list');

            return response.data;
        }catch (err){
            console.log('error', err);
            throw err;
        }
    }
}

export  default new SerieService();
