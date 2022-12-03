import React from 'react';
import { render } from '@testing-library/react';
import FloatingContent from './FloatingContent';

describe('FloatingContent Component should render without explode', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<FloatingContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
