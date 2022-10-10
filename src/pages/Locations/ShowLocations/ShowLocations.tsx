/*
Created by: Katherine Aguirre
On: 10/10/2022 : 10/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import cssStyle from './ShowLocations.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowLocationsPage {
}

const ShowLocationsPage: FC<any> = (props: PropsShowLocationsPage): any => (
  <div className={cssStyle.example} data-testid='ShowLocationsPage'>
    ShowLocationsPage
  </div>
);

export {
  ShowLocationsPage,
  PropsShowLocationsPage,
};
