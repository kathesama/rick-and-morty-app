/*
Created by: Katherine Aguirre
On: 13/10/2022 : 13/10/2022
Project: rick-and-morty-app
*/
import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import cssStyle from './SubContentTitle.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsSubContentTitleComponent {
  children: ReactElement | ReactElement[];
  icon?: IconProp;
  iconColor?: string;
  title?: string;
}

const SubContentTitleComponent: FC<any> = ({ icon = 'ban', iconColor = 'Black', title = 'Test Title', children }: PropsSubContentTitleComponent): any => (
  <div data-testid="SubContentTitleComponent">
    <Grid className={cssStyle.boxItems} data-testid={`SubContentWrapperComponent-${title.trim().toLowerCase()}`}>
      <Typography component="span" variant="body2" color="text">
        <FontAwesomeIcon icon={icon} color={iconColor} size="lg" title={title} />
      </Typography>
      <Typography component="span" variant="body2" fontWeight="bold">
        {children}
      </Typography>
    </Grid>
  </div>
);

export { SubContentTitleComponent, PropsSubContentTitleComponent };
