/*
Created by: Katherine Aguirre
On: 05/10/2022 : 05/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';

import cssStyle from './LoadingCircle.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsLoadingCircleComponent {
}

const LoadingCircleComponent: FC<any> = (props: PropsLoadingCircleComponent): any => (
  <div className={cssStyle.container} data-testid='LoadingCircleComponent'>
    <CircularProgress data-testid='circular-progress-loading-id'/>
  </div>
);

export {
  LoadingCircleComponent,
  PropsLoadingCircleComponent,
};

