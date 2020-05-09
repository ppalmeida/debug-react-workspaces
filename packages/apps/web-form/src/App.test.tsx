import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, container } = render(<App />);
  const h2Element = getByText(/Hot Reload Your React TypeScript Workspaces/i);
  expect(h2Element).toBeInTheDocument();

  screen.debug(container);
});
