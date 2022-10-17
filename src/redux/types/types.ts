import { FilterCharacter, IFilterEpisodes, IFilterLocations } from '../../graphql/InterfaceTypes';

// -------------- CHARACTERS
interface ICharactersEmptyState {
  pageIndex: number;
  filterValue: FilterCharacter | undefined;
  filterFillersData: {
    gender: string[];
    status: string[];
  };
}

export default ICharactersEmptyState;

export interface ICharacters {
  filterValue?: FilterCharacter | undefined;
  pageIndex: number;
}

// -------------- EPISODES

export interface IEpisodes {
  filterValue?: IFilterEpisodes | undefined;
  pageIndex: number;
}

// -------------- LOCATIONS
export interface ILocations {
  filterValue?: IFilterLocations | undefined;
  pageIndex: number;
}

// -------------- SETTINGS

export interface ISettings {
  language?: string | undefined;
}

export interface ISettingsEmptyState extends ISettings {
  filterFillersData: {
    languages: string[];
  };
}
