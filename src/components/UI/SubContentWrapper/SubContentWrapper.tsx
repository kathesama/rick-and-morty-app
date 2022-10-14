/*
Created by: Katherine Aguirre
On: 13/10/2022 : 13/10/2022
Project: rick-and-morty-app
*/
import React, { FC, ReactElement } from 'react';
import { Grid, Paper } from '@mui/material';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import cssStyle from './SubContentWrapper.module.scss';
import { SubContentTitleComponent } from '../SubContentTitle/SubContentTitle';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsSubContentWrapperComponent {
  children: ReactElement | ReactElement[];
  icon?: IconProp;
  iconColor?: string;
  title?: string;
}

const SubContentWrapperComponent: FC<any> = ({ icon = 'ban', iconColor = 'Black', title = 'Test Title', children }: PropsSubContentWrapperComponent): any => (
  <>
    <Grid className={cssStyle.boxItems} data-testid="SubContentWrapperComponent">
      <SubContentTitleComponent icon={icon} iconColor={iconColor} title={title}>
        &nbsp;{title}
      </SubContentTitleComponent>
    </Grid>
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {children}
    </Paper>
  </>
);

export { SubContentWrapperComponent, PropsSubContentWrapperComponent };
