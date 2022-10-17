/*
Created by: Katherine Aguirre
On: 13/10/2022 : 13/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import { GET_SINGLE_LOCATION } from '../../../graphql/queries';

import { LoadingCircleComponent } from '../../../components/UI/LoadingCircle/LoadingCircle';
import { ContentWrapperComponent } from '../../../components/UI/ContentWrapper/ContentWrapper';
import { DetailsCartWrapperComponent } from '../../../components/DetailsCartWrapper/DetailsCartWrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowSingleLocationPage {}

const ShowSingleLocationPage: FC<any> = (): any => {
  const { id = '' } = useParams();
  const { t } = useTranslation();

  const { data, loading } = useQuery(GET_SINGLE_LOCATION, { variables: { id } });

  if (loading) {
    return <LoadingCircleComponent />;
  }

  const dataArgs = {
    componentIdName: 'show-single-location',
    name: data.location.name,
    elements: {
      icon: 'people-roof',
      iconColor: 'RoyalBlue',
      type: t('Resident(s)'),
      data: data.location.residents,
    },
    descriptionFields: [
      {
        icon: 'dna',
        iconColor: 'Crimson',
        data: data.location.type,
        type: t('Type'),
      },
      {
        icon: 'microscope',
        iconColor: 'Indigo',
        data: data.location.dimension,
        type: t('Dimension'),
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

export { ShowSingleLocationPage, PropsShowSingleLocationPage };
