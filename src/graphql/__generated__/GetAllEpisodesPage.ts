/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterEpisode } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetAllEpisodesPage
// ====================================================

export interface GetAllEpisodesPage_episodes_info {
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

export interface GetAllEpisodesPage_episodes_results_characters {
  __typename: 'Character';
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
  __typename: 'Episode';
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
  __typename: 'Episodes';
  info: GetAllEpisodesPage_episodes_info | null;
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
  filter?: FilterEpisode | null;
}
