import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { MenuNavBarComponent } from './MenuNavBar';

let container: any;

const renderComponent = () =>
  render(
    <MemoryRouter initialEntries={[`/`]}>
      <Routes>
        <Route path="/" element={<MenuNavBarComponent />} />
      </Routes>
    </MemoryRouter>
  );

describe('MenuNavBarComponent test', () => {
  afterEach(async () => {
    container.remove();
    container = null;
  });
  describe('Rendering', () => {
    it('has header', async () => {
      container = document.createElement('div');
      document.body.appendChild(container);
      renderComponent();
      expect(screen.getByTestId('MenuNavBarComponent')).toBeInTheDocument();
    });
  });
  describe('Checking structure', () => {
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    it.each`
      component         | id
      ${'App bar'}      | ${'app-bar-id'}
      ${'Container'}    | ${'container-id'}
      ${'Toolbar'}      | ${'toolbar-id'}
      ${'Logo'}         | ${'logo-test-id'}
      ${'Menu options'} | ${'responsive-box-id'}
      ${'About me'}     | ${'about-box-ui'}
    `('Should has: $component', async ({ id }) => {
      renderComponent();
      await waitFor(() => {
        expect(screen.getByTestId(id)).toBeInTheDocument();
      });
    });
  });
});
