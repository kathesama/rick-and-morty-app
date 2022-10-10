/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSingleCharacterPage
// ====================================================

export interface GetSingleCharacterPage_character_origin {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
}

export interface GetSingleCharacterPage_character_location {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The type of the location.
   */
  type: string | null;
}

export interface GetSingleCharacterPage_character_episode {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
}

export interface GetSingleCharacterPage_character {
  __typename: "Character";
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
   * The species of the character.
   */
  species: string | null;
  /**
   * The type or subspecies of the character.
   */
  type: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * Time at which the character was created in the database.
   */
  created: string | null;
  /**
   * The character's origin location
   */
  origin: GetSingleCharacterPage_character_origin | null;
  /**
   * The character's last known location
   */
  location: GetSingleCharacterPage_character_location | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (GetSingleCharacterPage_character_episode | null)[];
}

export interface GetSingleCharacterPage {
  /**
   * Get a specific character by ID
   */
  character: GetSingleCharacterPage_character | null;
}

export interface GetSingleCharacterPageVariables {
  id: string;
}
