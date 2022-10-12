/*
Created by: Katherine Aguirre
On: 11/10/2022 : 11/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box, Card } from '@mui/material';

import cssStyle from './ShowSingleCharacter.module.scss';
import { GET_SINGLE_CHARACTER } from '../../../graphql/queries';
import { LoadingCircleComponent } from '../../../components/UI/LoadingCircle/LoadingCircle';
import { CharacterCardComponent } from '../../../components/CharacterCard/CharacterCard';
import bgImage from '../../../assets/img/profile-bg.jpg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowSingleCharacterPage {

}

const ShowSingleCharacterPage: FC<any> = (props: PropsShowSingleCharacterPage): any => {
  const { id = '' } = useParams();

  const { data, loading } = useQuery(GET_SINGLE_CHARACTER, { variables: { id }});

  if (loading) {
    return <LoadingCircleComponent />;
  }

  console.log(data);
  return (
    <Box data-testid="ShowSingleCharactersPage" id="ShowSingleCharactersPage">
        <Box
          minHeight="19rem"
          width="100%"
          sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'grid',
            placeItems: 'center',
          }}
          data-testid="container-box-single-char-id"
          id="container-box-single-char-id"
        />
        <Card
          className={cssStyle.backgroundCss}
          sx={{
            p: 2,
            mx: { xs: 2, lg: 6 },
            mt: -25,
            mb: 4,
            // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: 'saturate(200%) blur(40px)',
            // boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
          data-testid="container-card-single-char-id"
          id="container-card-single-char-id"
        >
          <CharacterCardComponent
            id={id}
            {...data.character}
          />
        </Card>
      </Box>
  );
};

export {
  ShowSingleCharacterPage,
  PropsShowSingleCharacterPage,
};
