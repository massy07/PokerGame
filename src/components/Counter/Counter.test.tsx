import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

describe('<Counter />', () => {
  test('it should mount', () => {
    
    render(<Counter valueCard={1} newDeck={false} deckCards={0} />);
    
    const counter = screen.getByTestId('Counter');

    expect(counter).toBeInTheDocument();
  });
});