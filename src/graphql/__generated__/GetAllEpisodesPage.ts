/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllEpisodesPage
// ====================================================

export interface GetAllEpisodesPage_episodes_results_characters {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
}

export interface GetAllEpisodesPage_episodes_results {
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
  characters: (GetAllEpisodesPage_episodes_results_characters | null)[];
}

export interface GetAllEpisodesPage_episodes {
  __typename: "Episodes";
  results: (GetAllEpisodesPage_episodes_results | null)[] | null;
}

export interface GetAllEpisodesPage {
  /**
   * Get the list of all episodes
   */
  episodes: GetAllEpisodesPage_episodes | null;
}

export interface GetAllEpisodesPageVariables {
  page: number;
}
