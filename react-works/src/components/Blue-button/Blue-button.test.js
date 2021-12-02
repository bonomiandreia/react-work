import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blue-button from './Blue-button';

describe('<Blue-button />', () => {
  test('it should mount', () => {
    render(<Blue-button />);
    
    const blueButton = screen.getByTestId('Blue-button');

    expect(blueButton).toBeInTheDocument();
  });
});