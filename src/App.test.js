import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it("App renders correctly", () => {
  const { getByText } = render(<App />);
  expect(getByText("Jungle River")).toBeInTheDocument();
});
