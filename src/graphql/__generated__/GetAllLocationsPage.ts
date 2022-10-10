/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllLocationsPage
// ====================================================

export interface GetAllLocationsPage_locations_results {
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
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
}

export interface GetAllLocationsPage_locations {
  __typename: "Locations";
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
}
