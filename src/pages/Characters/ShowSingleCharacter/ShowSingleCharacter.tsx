/*
Created by: Katherine Aguirre
On: 11/10/2022 : 11/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_SINGLE_CHARACTER } from '../../../graphql/queries';
import { LoadingCircleComponent } from '../../../components/UI/LoadingCircle/LoadingCircle';
import { CharacterCardComponent } from '../../../components/CharacterCard/CharacterCard';
import { ContentWrapperComponent } from '../../../components/UI/ContentWrapper/ContentWrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowSingleCharacterPage {}

const ShowSingleCharacterPage: FC<any> = (): any => {
  const { id = '' } = useParams();

  const { data, loading } = useQuery(GET_SINGLE_CHARACTER, { variables: { id } });

  if (loading) {
    return <LoadingCircleComponent />;
  }

  return (
    <ContentWrapperComponent>
      <CharacterCardComponent id={id} {...data.character} />
    </ContentWrapperComponent>
  );
};

export { ShowSingleCharacterPage, PropsShowSingleCharacterPage };
