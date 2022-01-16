import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/INDUS VALLEY SCRIPT/i);
  linkElements.forEach(linkElement => {
    expect(linkElement).toBeInTheDocument();
  });
});
