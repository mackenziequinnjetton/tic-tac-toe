import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardRow from './BoardRow';

test('renders BoardRow', () => {
  render(<BoardRow rowData={[".", ".", "."]} />);
  const linkElement = screen.getAllByText(/./i);
  expect(linkElement).toHaveLength(3);
});
