import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {PaginationFooterComponent, PaginationFooterDefaultValues} from './PaginationFooter';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('PaginationFooterComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<PaginationFooterComponent {...PaginationFooterDefaultValues}/>);
    });
  };

  it.each`
    component       | id
    ${'Wrapper'}        | ${'PaginationFooterComponent'}
    ${'Select'}        | ${'select-pagination-footer'}
    ${'TextField ind/dec'}        | ${'goto-page-pagination-footer'}    
    ${'Icon button A'}        | ${'icon-button-first-page-pagination-footer'}    
    ${'Icon button B'}        | ${'icon-button-before-page-pagination-footer'}    
    ${'Icon button C'}        | ${'icon-button-next-page-pagination-footer'}    
    ${'Icon button D'}        | ${'icon-button-last-page-pagination-footer'}    
  `('Should has $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  it.each`
    component       | text
    ${'page of total'}        | ${'1 of 1'}        
  `('Should has text $component', async ({ text }) => {
    await setup();
    const element: any = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });

  // keep with others tests
});
