import React from 'react';

import './HeaderPage.css';
import { MenuNavBarComponent } from '../../components/UI/MenuNavBar/MenuNavBar';

const HeaderPage: React.FC = () => (
  <div data-testid="home-page">
    <article>
      <MenuNavBarComponent />
    </article>
  </div>
);

export {
  // eslint-disable-next-line import/prefer-default-export
  HeaderPage,
};
