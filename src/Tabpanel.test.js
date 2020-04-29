import React from 'react';
import { render } from '@testing-library/react';
import Tabpanel from './Components/Tabpanel'

test('Ryans tab renders', () => {
  const { getByText } = render(<Tabpanel/>);
  const linkElement = getByText(/Ryan/i);
  expect(linkElement).toBeInTheDocument();
});

test('Tatsukis tab renders', () => {
    const { getByText } = render(<Tabpanel/>);
    const linkElement = getByText(/Tatsuki/i);
    expect(linkElement).toBeInTheDocument();
  });
