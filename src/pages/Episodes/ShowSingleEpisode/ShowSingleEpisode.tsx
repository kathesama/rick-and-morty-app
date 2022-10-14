/*
Created by: Katherine Aguirre
On: 14/10/2022 : 14/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_SINGLE_EPISODE } from '../../../graphql/queries';

import { LoadingCircleComponent } from '../../../components/UI/LoadingCircle/LoadingCircle';
import { ContentWrapperComponent } from '../../../components/UI/ContentWrapper/ContentWrapper';
import { DetailsCartWrapperComponent } from '../../../components/DetailsCartWrapper/DetailsCartWrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowSingleEpisodePage {}

const ShowSingleEpisodePage: FC<PropsShowSingleEpisodePage> = (): any => {
  const { id = '' } = useParams();

  const { data, loading } = useQuery(GET_SINGLE_EPISODE, { variables: { id } });

  if (loading) {
    return <LoadingCircleComponent />;
  }

  const dataArgs = {
    componentIdName: 'show-single-episode',
    name: data.episode.name,
    elements: {
      icon: 'people-roof',
      iconColor: 'RoyalBlue',
      type: 'Characters(s)',
      data: data.episode.characters,
    },
    descriptionFields: [
      {
        icon: 'calendar-days',
        iconColor: 'Crimson',
        data: data.episode.air_date,
        type: 'Type',
      },
      {
        icon: 'film',
        iconColor: 'Indigo',
        data: data.episode.episode,
        type: 'Episode',
      },
    ],
    urlToNavigate: '/characters/',
  };

  return (
    <ContentWrapperComponent>
      <DetailsCartWrapperComponent {...dataArgs} />
    </ContentWrapperComponent>
  );
};

export { ShowSingleEpisodePage, PropsShowSingleEpisodePage };
