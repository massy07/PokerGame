import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableDistribution from './TableDistribution';

describe('<TableDistribution />', () => {
  test('it should mount', () => {
    render(<TableDistribution playerTable={[]} />);
    
    const tableDistribution = screen.getByTestId('TableDistribution');

    expect(tableDistribution).toBeInTheDocument();
  });
});