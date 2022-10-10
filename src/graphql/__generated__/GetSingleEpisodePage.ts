/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSingleEpisodePage
// ====================================================

export interface GetSingleEpisodePage_episode_characters {
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
}

export interface GetSingleEpisodePage_episode {
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
   * The air date of the episode.
   */
  air_date: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
  /**
   * List of characters who have been seen in the episode.
   */
  characters: (GetSingleEpisodePage_episode_characters | null)[];
}

export interface GetSingleEpisodePage {
  /**
   * Get a specific episode by ID
   */
  episode: GetSingleEpisodePage_episode | null;
}

export interface GetSingleEpisodePageVariables {
  id: string;
}
