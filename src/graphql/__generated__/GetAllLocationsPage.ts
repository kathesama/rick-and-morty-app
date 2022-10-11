/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterLocation } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetAllLocationsPage
// ====================================================

export interface GetAllLocationsPage_locations_info {
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

export interface GetAllLocationsPage_locations_results_residents {
  __typename: 'Character';
  /**
   * The id of the character.
   */
  id: string | null;
}

export interface GetAllLocationsPage_locations_results {
  __typename: 'Location';
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
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
  /**
   * List of characters who have been last seen in the location.
   */
  residents: (GetAllLocationsPage_locations_results_residents | null)[];
}

export interface GetAllLocationsPage_locations {
  __typename: 'Locations';
  info: GetAllLocationsPage_locations_info | null;
  results: (GetAllLocationsPage_locations_results | null)[] | null;
}

export interface GetAllLocationsPage {
  /**
   * Get the list of all locations
   */
  locations: GetAllLocationsPage_locations | null;
}

export interface GetAllLocationsPageVariables {
  page: number;
  filter?: FilterLocation | null;
}
