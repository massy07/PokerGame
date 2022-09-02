import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Player from './Player';
import { startPlayer } from '../../store/entities/handCardsPlayers';

describe('<Player />', () => {
  test('it should mount', () => {
    render(<Player dataPlayer={startPlayer} />);
    
    const player = screen.getByTestId('Player');

    expect(player).toBeInTheDocument();
  });
});