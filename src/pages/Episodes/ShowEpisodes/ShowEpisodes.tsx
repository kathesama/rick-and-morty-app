/*
Created by: Katherine Aguirre
On: 10/10/2022 : 10/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import cssStyle from './ShowEpisodes.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowEpisodesPage {
}

const ShowEpisodesPage: FC<any> = (props: PropsShowEpisodesPage): any => (
  <div className={cssStyle.example} data-testid='ShowEpisodesPage'>
    ShowEpisodesPage
  </div>
);

export {
  ShowEpisodesPage,
  PropsShowEpisodesPage,
};
