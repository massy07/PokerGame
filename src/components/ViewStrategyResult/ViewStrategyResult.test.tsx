import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewStrategyResult from './ViewStrategyResult';

describe('<ViewStrategyResult />', () => {
  test('it should mount', () => {
    render(<ViewStrategyResult resultStrategy={[]} />);
    
    const viewStrategyResult = screen.getByTestId('ViewStrategyResult');

    expect(viewStrategyResult).toBeInTheDocument();
  });
});