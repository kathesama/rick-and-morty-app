/*
Created by: Katherine Aguirre
On: 02/10/2022 : 02/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsUnderConstructionPage {
  url?: string;
}

const UnderConstructionPage: FC<any> = ({ url = 'new' }: PropsUnderConstructionPage): any => <div data-testid="UnderConstructionPage">{`Page ${url} under construction`}</div>;

export { UnderConstructionPage, PropsUnderConstructionPage };
