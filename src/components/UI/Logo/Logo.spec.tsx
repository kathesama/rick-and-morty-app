import { act, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { Logo } from './Logo';

let container: any;

const setup = async (value = '') => {
  act(() => {
    ReactDOM.createRoot(container).render(value.length > 0 ? <Logo logoText={value} /> : <Logo />);
  });
};

describe('Logo', () => {
  afterEach(() => {
    container.remove();
    container = null;
  });

  describe('Checking assembly', () => {
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      act(() => {
        ReactDOM.createRoot(container).render(<Logo />);
      });
    });

    it.each`
      name                       | content
      ${'Logo space'}            | ${'logo-test-id'}
      ${'A badge'}               | ${'styled-badge-test-id'}
      ${'Rick and Morty name'}   | ${'rick-and-morty-test-id'}
      ${'Rick and Morty avatar'} | ${'avatar-test-id'}
    `('displays $name', async ({ content }) => {
      const languageImg = await waitFor(() => screen.getByTestId(content));

      expect(languageImg).toBeInTheDocument();
    });
  });

  describe('Checking content display', () => {
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    it.each`
      name                     | content             | expectValue
      ${'Rick and Morty name'} | ${'Rick and Morty'} | ${'Rick and Morty'}
      ${'Rick and Morty name'} | ${'Rick y Morty'}   | ${'Rick y Morty'}
      ${'Rick and Morty name'} | ${''}               | ${'Rick and Morty'}
    `("When $name is '$content' should show $expectValue as logo name", async ({ content, expectValue }) => {
      await setup(content);
      const logoText = await waitFor(() => screen.queryByText(expectValue));

      expect(logoText).toBeInTheDocument();
    });
  });
});
