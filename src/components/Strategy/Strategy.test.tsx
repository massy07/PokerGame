import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Strategy from './Strategy';
import { startDealer, startPlayer } from '../../store/entities/handCardsPlayers';

describe('<Strategy />', () => {
  test('it should mount', () => {
    render(<Strategy player={startDealer} dealer={startPlayer} viewResult={function (selectResult: string[]): void {
      throw new Error('Function not implemented.');
    } }  />);
    
    const strategy = screen.getByTestId('Strategy');

    expect(strategy).toBeInTheDocument();
  });
});