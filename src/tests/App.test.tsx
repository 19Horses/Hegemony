import { beforeEach, describe, test, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  const mockIntersectionObserver = vitest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('When the app renders', () => {
  test('it shows the title', () => {
    render(<App />);
    screen.getByText('Working Class London, Got Suttn to Say:');
  });

  test('it renders the posters', () => {
    render(<App />);
    screen.getByAltText('Tek charge Hegemony poster');
    screen.getByAltText('Tracksuits and securing the bag Hegemony poster');
  });
});
