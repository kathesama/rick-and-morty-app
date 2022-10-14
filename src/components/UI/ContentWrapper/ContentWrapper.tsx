/*
Created by: Katherine Aguirre
On: 12/10/2022 : 12/10/2022
Project: rick-and-morty-app
*/
import React, { FC, ReactElement } from 'react';
import { Box, Card } from '@mui/material';
import cssStyle from './ContentWrapper.module.scss';
import { getRandomBanner } from '../../../utilities/uiFunctions';

interface PropsContentWrapperComponent {
  children: ReactElement | ReactElement[];
  bgImage?: any;
}

const imgRandomPath = `${process.env.PUBLIC_URL}/${getRandomBanner()}`;

const ContentWrapperComponent: FC<PropsContentWrapperComponent> = ({ children, bgImage = imgRandomPath }: PropsContentWrapperComponent): any => (
  <Box data-testid="ContentWrapperComponent" id="ContentWrapperComponent">
    <Box
      minHeight="19rem"
      width="100%"
      sx={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'grid',
        placeItems: 'center',
      }}
      data-testid="container-box-content-wrapper-id"
      id="container-box-content-wrapper-id"
    />
    <Card
      className={cssStyle.backgroundCss}
      sx={{
        p: 2,
        mx: { xs: 2, lg: 6 },
        mt: -25,
        mb: 4,
        backdropFilter: 'saturate(200%) blur(40px)',
      }}
      data-testid="container-card-content-wrapper-id"
      id="container-card-content-wrapper-id"
    >
      {children}
    </Card>
  </Box>
);

export { ContentWrapperComponent, PropsContentWrapperComponent };

/*

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
 */
