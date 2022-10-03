/*
Created by: Katherine Aguirre
On: 02/10/2022 : 02/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import cssStyle from './ShowCharacters.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsShowCharactersPage {
}

const ShowCharactersPage: FC<any> = (props: PropsShowCharactersPage): any => {
  const dispatch = useDispatch();

  return (
    <div className={cssStyle.example} data-testid='ShowCharactersPage'>
      ShowCharactersPage
    </div>
  );
};

export {
  ShowCharactersPage,
  PropsShowCharactersPage,
};
