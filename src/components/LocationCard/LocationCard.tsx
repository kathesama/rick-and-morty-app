/*
Created by: Katherine Aguirre
On: 14/10/2022 : 0:05
Project: rick-and-morty-app
*/
import React, { FC, useCallback } from 'react';
import { Box, Container, Divider, Grid, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import cssStyle from './LocationCard.module.scss';
import { CustomChipComponent } from '../UI/CustomChip/CustomChip';
import { SubContentWrapperComponent } from '../UI/SubContentWrapper/SubContentWrapper';
import { SubContentTitleComponent } from '../UI/SubContentTitle/SubContentTitle';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsLocationCardComponent {
  name: string | null;
  type: string | null;
  dimension: string | null;
  residents: any[];
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme?.spacing(0.5),
}));

const LocationCardComponent: FC<PropsLocationCardComponent> = ({ name = 'DefaultLocation', type = 'defaultType', dimension = 'defaultDimension', residents = [] }: PropsLocationCardComponent): any => {
  const navigate = useNavigate();

  const callBackFn = useCallback((url: string) => navigate(url), [navigate]);

  return (
    <Box component="section" py={{ xs: 12, sm: 12 }} data-testid="LocationCardComponent">
      <Container sx={{ p: 0 }} data-testid="container-location-card-id">
        <Grid container item xs={12} justifyContent="center" data-testid="grid-avatar-char-card-id" id="grid-avatar-char-card-id">
          <Grid container justifyContent="center" py={6} data-testid="grid-avatar-loc-card-id">
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }} data-testid="internal-grid-content-loc-card-id">
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} data-testid="internal-grid-box-card-id" id="internal-grid-box-card-id">
                <Typography variant="h3" data-testid="ig-typography-card-id" id="ig-typography-card-id">
                  {name}
                </Typography>
              </Box>
              <Grid container spacing={2} mb={3} data-testid="ig-grid-icons-card-id" id="ig-grid-icons-card-id">
                <Grid item className={cssStyle.boxItems} data-testid="ig-grid-icons-type-card-id">
                  <SubContentTitleComponent icon="dna" iconColor="Crimson" title="Type">
                    &nbsp;{type || '?'}
                  </SubContentTitleComponent>
                </Grid>
                <Grid item className={cssStyle.boxItems} data-testid="ig-grid-icons-dimension-card-id">
                  <SubContentTitleComponent icon="microscope" iconColor="Indigo" title="dimension">
                    &nbsp;{dimension || '?'}
                  </SubContentTitleComponent>
                </Grid>
              </Grid>

              <Divider variant="middle" />
              <SubContentWrapperComponent icon="film" iconColor="RoyalBlue" title="Resident(s)">
                {residents?.map((data) => (
                  <ListItem key={data.id}>
                    <CustomChipComponent label={data?.name} url={`/characters/${data?.id}`} callBackFunction={callBackFn} avatar={data?.image} />
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

export { LocationCardComponent, PropsLocationCardComponent };
