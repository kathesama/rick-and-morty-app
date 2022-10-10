/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterCharacter } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetCharactersPage
// ====================================================

export interface GetCharactersPage_characters_info {
  __typename: 'Info';
  /**
   * The amount of pages.
   */
  pages: number | null;
  /**
   * The length of the response.
   */
  count: number | null;
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
  /**
   * Number of the previous page (if it exists)
   */
  prev: number | null;
}

export interface GetCharactersPage_characters_results {
  __typename: 'Character';
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
}

export interface GetCharactersPage_characters {
  __typename: 'Characters';
  info: GetCharactersPage_characters_info | null;
  results: (GetCharactersPage_characters_results | null)[] | null;
}

export interface GetCharactersPage {
  /**
   * Get the list of all characters
   */
  characters: GetCharactersPage_characters | null;
}

export interface GetCharactersPageVariables {
  page?: number | null;
  filter?: FilterCharacter | null;
}
