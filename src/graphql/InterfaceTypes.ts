// -------------- CHARACTERS
import { DocumentNode } from '@apollo/react-hooks';

export interface FilterCharacter {
  name?: string | null;
  status?: string | null;
  species?: string | null;
  type?: string | null;
  gender?: string | null;
}

export interface CharacterSchemaInterface {
  id: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: object;
  location?: object;
  image?: string;
  episode?: Array<string>;
  url?: string;
  created?: string;
}

// -------------- EPISODES

export interface IFilterEpisodes {
  name?: string | null;
  episode?: string | null;
}

export interface EpisodeSchemaInterface {
  id: number;
  name: string;
  episode: string;
  air_date?: string;
  characters?: string[];
  url?: string;
  created?: string;
}

// -------------- LOCATIONS

export interface IFilterLocations {
  name?: string | null;
  type?: string | null;
  dimension?: string | null;
}

export interface LocationSchemaInterface {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}


// -------------- MOCKING DATA TYPE
export type MockType<TData, TVariables> = {
  request: {
    query: DocumentNode
    variables: TVariables
  },
  result: {
    data: TData
  }
};
