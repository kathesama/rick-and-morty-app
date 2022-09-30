/*
Created by: Katherine Aguirre
On: 29/09/2022 : 29/09/2022
Project: rick-and-morty-app
*/
import React, { FC, HTMLAttributes, ReactNode } from 'react';
import Card from '@mui/material/Card';

import cssStyle from './ListingCharacters.module.css';

interface Props extends HTMLAttributes<HTMLDivElement>{
  message: string;
  variant?: 'success' | 'warning' | 'danger' | 'info';
  children?: ReactNode;
}

const ListingCharactersComponent: FC<Props> = ({ children, message, variant }) => (
  <div>{children || message}</div>
);

export {
  ListingCharactersComponent as ListingCharacters,
  Props,
};

