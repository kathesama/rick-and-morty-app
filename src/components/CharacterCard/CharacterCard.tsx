/*
Created by: Katherine Aguirre
On: 11/10/2022 : 14:06
Project: rick-and-morty-app
*/
import React, { useState, FC } from 'react';
import { Avatar, Box, Container, Grid, Icon, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getCharStatusIcon, getGenderIcon } from '../../utilities/uiFunctions';
import cssStyle from './CharacterCard.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsCharacterCardComponent {
  id: string;
  image: string;
  name: string;
  gender: string;
  status: string;
  location: string;
  species: string;
  type: string;
}

const CharacterCardComponent: FC<PropsCharacterCardComponent> = ({id, image, name, gender, status, location, species, type}: PropsCharacterCardComponent): any => {
  const [state, setState] = useState('');

  console.log(id);
  return (
    <Box component="section" py={{ xs: 12, sm: 12 }} data-testid="ShowCharactersPage" id="ShowCharactersPage">
      <Container sx={{ p: 0,  }} data-testid="container-char-card-id" id="container-char-card-id" >
        <Grid container item xs={12} justifyContent="center"  data-testid="grid-avatar-char-card-id" id="grid-avatar-char-card-id">
          <Box mt={{ xs: 16, md: -25 }} textAlign="center" data-testid="box-avatar-char-card-id" id="box-avatar-char-card-id">
            <Avatar src={image} sx={{ width: 250, height: 250 }} className={cssStyle.avatarChar} data-testid="avatar-avatar-char-card-id" id="avatar-avatar-char-card-id"/>
          </Box>
          <Grid container justifyContent="center" py={6} data-testid="grid-content-char-card-id" id="grid-content-char-card-id">
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="h3">{name}</Typography>
              </Box>
              <Grid container spacing={2} mb={3}>
                <Grid item className={cssStyle.boxItems} >
                  {getGenderIcon(gender)}&nbsp;{gender}
                </Grid>
                <Grid item className={cssStyle.boxItems} >
                  {getCharStatusIcon(status)}&nbsp;{status}
                </Grid>
                <Grid item className={cssStyle.boxItems}>
                  <Typography component="span" variant="body2" color="text">
                    <FontAwesomeIcon icon="map-location-dot" color="SeaGreen" size="lg" title="Location" />
                  </Typography>
                  <Typography component="span" variant="body2" fontWeight="bold">
                    &nbsp;location
                  </Typography>
                </Grid>
                <Grid item className={cssStyle.boxItems}>
                  <Typography component="span" variant="body2" color="text">
                    <FontAwesomeIcon icon="dna" color="Crimson" size="lg" title="Specie" />
                  </Typography>
                  <Typography component="span" variant="body2" fontWeight="bold">
                    &nbsp;{species}
                  </Typography>
                </Grid>
                <Grid item className={cssStyle.boxItems}>
                  <Typography component="span" variant="body2" color="text">
                    <FontAwesomeIcon icon="microscope" color="Indigo" size="lg" title='Type' />
                  </Typography>
                  <Typography component="span" variant="body2" fontWeight="bold">
                    &nbsp;{type || '?'}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" fontWeight="light" color="text">
                Decisions: If you can&apos;t decide, the answer is no. If two equally difficult
                paths, choose the one more painful in the short term (pain avoidance is creating an
                illusion of equality). Choose the path that leaves you more equanimous. <br />
                <Typography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: 'max-content',
                    display: 'flex',
                    alignItems: 'center',

                    '& .material-icons-round': {
                      transform: `translateX(3px)`,
                      transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                    },

                    '&:hover .material-icons-round, &:focus .material-icons-round': {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export {
  CharacterCardComponent,
  PropsCharacterCardComponent,
};
