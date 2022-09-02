import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dealer from './Dealer';
import { startDealer } from '../../store/entities/handCardsPlayers';

describe('<Dealer />', () => {
  test('it should mount', () => {
    render(<Dealer dataDealer={startDealer} />);
    
    const dealer = screen.getByTestId('Dealer');

    expect(dealer).toBeInTheDocument();
  });
});