import { gql } from '@apollo/client';

const GET_ALL_CHARACTERS = gql`
  query GetCharactersPage($page: Int, $filter: FilterCharacter) {
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

const GET_SINGLE_CHARACTER = gql`
  query GetSingleCharacterPage($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      gender
      created
      origin {
        id
        name
      }
      location {
        id
        name
        type
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

const GET_ALL_EPISODES = gql`
  query GetAllEpisodesPage($page: Int!, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
        }
      }
    }
  }
`;

const GET_SINGLE_EPISODE = gql`
  query GetSingleEpisodePage($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;

const GET_ALL_LOCATIONS = gql`
  query GetAllLocationsPage($page: Int!, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
    }
  }
`;

export { GET_ALL_CHARACTERS, GET_SINGLE_CHARACTER, GET_ALL_EPISODES, GET_SINGLE_EPISODE, GET_ALL_LOCATIONS };
