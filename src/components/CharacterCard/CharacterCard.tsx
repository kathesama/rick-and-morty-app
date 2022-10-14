/*
Created by: Katherine Aguirre
On: 11/10/2022 : 14:06
Project: rick-and-morty-app
*/
import React, { FC, useCallback } from 'react';
import { Avatar, Box, Container, Divider, Grid, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { getCharStatusIcon, getGenderIcon } from '../../utilities/uiFunctions';
import cssStyle from './CharacterCard.module.scss';
import { EpisodeSchemaInterface } from '../../graphql/InterfaceTypes';
import { SubContentWrapperComponent } from '../UI/SubContentWrapper/SubContentWrapper';
import { SubContentTitleComponent } from '../UI/SubContentTitle/SubContentTitle';
import { CustomChipComponent } from '../UI/CustomChip/CustomChip';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsCharacterCardComponent {
  image: string;
  name: string;
  gender: string;
  status: string;
  location: any;
  origin: any;
  species: string;
  type: string;
  episode: EpisodeSchemaInterface[];
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme?.spacing(0.5),
}));

const CharacterCardComponent: FC<PropsCharacterCardComponent> = ({ image, name, gender, status, location, species, type, origin, episode }: PropsCharacterCardComponent): any => {
  const navigate = useNavigate();

  const callBackFn = useCallback((url: string) => navigate(url), [navigate]);

  return (
    <Box component="section" py={{ xs: 12, sm: 12 }} data-testid="CharacterCardComponent" id="CharacterCardComponent">
      <Container sx={{ p: 0 }} data-testid="container-char-card-id" id="container-char-card-id">
        <Grid container item xs={12} justifyContent="center" data-testid="grid-avatar-char-card-id" id="grid-avatar-char-card-id">
          <Box mt={{ xs: 16, md: -25 }} textAlign="center" data-testid="box-avatar-char-card-id" id="box-avatar-char-card-id">
            <Avatar src={image} sx={{ width: 250, height: 250 }} className={cssStyle.avatarChar} data-testid="avatar-avatar-char-card-id" id="avatar-avatar-char-card-id" />
          </Box>
          <Grid container justifyContent="center" py={6} data-testid="grid-content-char-card-id" id="grid-content-char-card-id">
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }} data-testid="internal-grid-content-char-card-id" id="internal-grid-content-char-card-id">
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} data-testid="internal-grid-box-card-id" id="internal-grid-box-card-id">
                <Typography variant="h3" data-testid="ig-typography-card-id" id="ig-typography-card-id">
                  {name}
                </Typography>
              </Box>
              <Grid container spacing={2} mb={3} data-testid="ig-grid-icons-card-id" id="ig-grid-icons-card-id">
                <Grid item className={cssStyle.boxItems} data-testid="ig-grid-icons-gender-card-id" id="ig-grid-icons-gender-card-id">
                  {getGenderIcon(gender)}&nbsp;{gender}
                </Grid>
                <Grid item className={cssStyle.boxItems} data-testid="ig-grid-icons-status-card-id" id="ig-grid-status-gender-card-id">
                  {getCharStatusIcon(status)}&nbsp;{status}
                </Grid>
                <Grid item className={cssStyle.boxItems} data-testid="ig-grid-icons-species-card-id">
                  <SubContentTitleComponent icon="dna" iconColor="Crimson" title="Specie">
                    &nbsp;{species || '?'}
                  </SubContentTitleComponent>
                </Grid>
                <Grid item className={cssStyle.boxItems} data-testid="ig-grid-icons-type-card-id">
                  <SubContentTitleComponent icon="microscope" iconColor="Indigo" title="Type">
                    &nbsp;{type || '?'}
                  </SubContentTitleComponent>
                </Grid>
              </Grid>
              <Divider variant="middle" data-testid="ig-grid-origin-divider-card-id" />

              <SubContentWrapperComponent icon="map-location-dot" iconColor="SeaGreen" title="Origin">
                <CustomChipComponent label={origin?.name} url={origin?.id ? `/locations/${origin?.id}` : undefined} callBackFunction={origin?.id ? callBackFn : undefined} isButton={false} />
              </SubContentWrapperComponent>

              <Divider variant="middle" data-testid="ig-grid-location-divider-card-id" />
              <SubContentWrapperComponent icon="location-dot" iconColor="Indigo" title="Location">
                <CustomChipComponent label={`${location?.type} / ${location?.name}` || '?'} url={location?.id ? `/locations/${location?.id}` : undefined} callBackFunction={location?.id ? callBackFn : undefined} isButton={false} />
              </SubContentWrapperComponent>
              <Divider variant="middle" />
              <SubContentWrapperComponent icon="film" iconColor="RoyalBlue" title="Episode(s)">
                {episode?.map((data) => (
                  <ListItem key={data.id}>
                    <CustomChipComponent label={data?.episode} url={`/episodes/${data?.id}`} callBackFunction={callBackFn} />
                  </ListItem>
                ))}
              </SubContentWrapperComponent>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { CharacterCardComponent, PropsCharacterCardComponent };
