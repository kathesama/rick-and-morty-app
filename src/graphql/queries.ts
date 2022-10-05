import {gql} from '@apollo/client';

const GET_ALL_CHARACTERS = gql`
    query GetCharactersPage ($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                pages
                count
                next
                prev
            }
            results {
                id
                name
                image
                status
                gender
            }
        }
    }
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  GET_ALL_CHARACTERS,
};
