/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSingleLocationPage
// ====================================================

export interface GetSingleLocationPage_location_residents {
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
}

export interface GetSingleLocationPage_location {
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
  residents: (GetSingleLocationPage_location_residents | null)[];
}

export interface GetSingleLocationPage {
  /**
   * Get a specific locations by ID
   */
  location: GetSingleLocationPage_location | null;
}

export interface GetSingleLocationPageVariables {
  id: string;
}
