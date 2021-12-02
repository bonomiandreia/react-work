import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gray-input from './Gray-input';

describe('<Gray-input />', () => {
  test('it should mount', () => {
    render(<Gray-input />);
    
    const grayInput = screen.getByTestId('Gray-input');

    expect(grayInput).toBeInTheDocument();
  });
});