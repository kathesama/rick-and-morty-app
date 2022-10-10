import { FilterCharacter } from '../../__generated__/globalTypes';

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

export interface ICharacters {
  filterValue?: FilterCharacter;
  pageIndex: number;
}
