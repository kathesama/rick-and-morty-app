import React from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

// import { CustomTableComponent } from './CustomTable';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ShowCharactersPage } from '../../pages/Characters/ShowCharacters/ShowCharacters';
import CustomTableComponent from './CustomTable';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

// mocking functionality
const onRowClick = jest.fn();
const onFetchData = jest.fn();

describe('CustomTableComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<CustomTableComponent data={[]} columns={[]} onRowClick={onRowClick} onFetchData={onFetchData} loading={false} count={0} queryPageSize={1} />);
    });
  };

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/characters`]}>
          <Routes>
            <Route path="/characters" element={<CustomTableComponent data={[]} columns={[]} onRowClick={onRowClick} onFetchData={onFetchData} loading={false} count={0} queryPageSize={1} />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

  it.each`
    component       | id
    ${'Wrapper'}    | ${'CustomTableComponent'}
    ${'Table'}      | ${'table-custom-table-id'}
    ${'Table Head'} | ${'table-head-custom-table-id'}
    ${'Table Body'} | ${'table-body-custom-table-id'}
  `('Should has $component', async ({ id }) => {
    await renderComponent();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  // keep with others tests
});
