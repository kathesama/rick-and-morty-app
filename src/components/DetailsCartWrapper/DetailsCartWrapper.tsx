/*
Created by: Katherine Aguirre
On: 14/10/2022 : 18:12
Project: rick-and-morty-app
*/
import React, { FC, useCallback } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Divider, Grid, ListItem, Typography } from '@mui/material';
import { SubContentTitleComponent } from '../UI/SubContentTitle/SubContentTitle';
import { SubContentWrapperComponent } from '../UI/SubContentWrapper/SubContentWrapper';
import { CustomChipComponent } from '../UI/CustomChip/CustomChip';

import cssStyle from './DetailsCartWrapper.module.scss';

type DescriptionType = {
  icon?: IconProp;
  iconColor?: string;
  data?: string | any[];
  type?: string;
};

interface PropsDetailsCartWrapperComponent {
  componentIdName: string;
  name?: string | null;
  elements?: DescriptionType;
  descriptionFields?: DescriptionType[] | null;
  urlToNavigate?: string | null;
}

const DetailsCartWrapperComponent: FC<any> = ({
  name = 'DefaultName',
  elements = { icon: undefined, iconColor: 'black', type: '', data: [] },
  descriptionFields = [{ icon: undefined, iconColor: 'black', type: '', data: 'DescriptionField01' }],
  urlToNavigate = undefined,
  componentIdName = 'details-cart-wrapper',
}: PropsDetailsCartWrapperComponent): any => {
  const navigate = useNavigate();
  const callBackFn = useCallback((url: string) => navigate(url), [navigate]);

  return (
    <Box component="section" py={{ xs: 12, sm: 12 }} data-testid={componentIdName}>
      <Container sx={{ p: 0 }} data-testid={`${componentIdName}-container-card-id`}>
        <Grid container item xs={12} justifyContent="center" data-testid={`${componentIdName}-grid-avatar-char-card-id`} className={cssStyle.widthBox}>
          <Grid container justifyContent="center" py={6} data-testid={`${componentIdName}-grid-avatar-loc-card-id`}>
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 12, md: 1 }} data-testid={`${componentIdName}-internal-grid-content-loc-card-id`}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} data-testid={`${componentIdName}-internal-grid-box-card-id`}>
                <Typography variant="h3" data-testid={`${componentIdName}-ig-typography-card-id`}>
                  {name}
                </Typography>
              </Box>
              <Grid container spacing={2} mb={3} data-testid={`${componentIdName}-ig-grid-icons-card-id`}>
                {Array.isArray(descriptionFields) &&
                  descriptionFields?.map((description, i) => (
                    <Grid item className={cssStyle.boxItems} data-testid={`${componentIdName}-${i}-ig-grid-icons-type-card-id`} key={`${componentIdName}-${i}-key`}>
                      <SubContentTitleComponent icon={description?.icon} iconColor={description?.iconColor} title={description?.type}>
                        &nbsp;{description?.data || '?'}
                      </SubContentTitleComponent>
                    </Grid>
                  ))}
              </Grid>

              <Divider variant="middle" />
              <SubContentWrapperComponent icon={elements?.icon} iconColor={elements.iconColor} title={elements.type}>
                {Array.isArray(elements?.data) &&
                  elements?.data?.map((data) => (
                    <ListItem key={data.id} data-testid={`ig-grid-list-item-${data.id}-card-id`} className={cssStyle.itemList}>
                      <CustomChipComponent label={data?.name} url={`${urlToNavigate}${data?.id}`} callBackFunction={callBackFn} avatar={data?.image} />
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

export { DetailsCartWrapperComponent, PropsDetailsCartWrapperComponent };
