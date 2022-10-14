/*
Created by: Katherine Aguirre
On: 13/10/2022 : 13/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_SINGLE_LOCATION } from '../../../graphql/queries';

import { LoadingCircleComponent } from '../../../components/UI/LoadingCircle/LoadingCircle';
import { ContentWrapperComponent } from '../../../components/UI/ContentWrapper/ContentWrapper';
import { LocationCardComponent } from '../../../components/LocationCard/LocationCard';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowSingleLocationPage {}

const ShowSingleLocationPage: FC<any> = (): any => {
  const { id = '' } = useParams();

  const { data, loading } = useQuery(GET_SINGLE_LOCATION, { variables: { id } });

  if (loading) {
    return <LoadingCircleComponent />;
  }

  return (
    <ContentWrapperComponent>
      <LocationCardComponent {...data.location} />
    </ContentWrapperComponent>
  );
};

export { ShowSingleLocationPage, PropsShowSingleLocationPage };
