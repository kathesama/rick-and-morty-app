/*
Created by: Katherine Aguirre
On: 02/10/2022 : 17:11
Project: rick-and-morty-app
*/
import React, { useState, FC } from 'react';
import cssStyle from './CharactersGrid.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsCharactersGridComponent {}

const CharactersGridComponent: FC<any> = (props: PropsCharactersGridComponent): any => {
  const [state, setState] = useState('');

  return (
    <div className={cssStyle.example} data-testid="CharactersGridComponent">
      CharactersGridComponent
    </div>
  );
};

export { CharactersGridComponent, PropsCharactersGridComponent };
