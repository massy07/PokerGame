import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TelevisionQuiz from './TelevisionQuiz';

describe('<TelevisionQuiz />', () => {
  test('it should mount', () => {
    render(<TelevisionQuiz />);
    
    const televisionQuiz = screen.getByTestId('TelevisionQuiz');

    expect(televisionQuiz).toBeInTheDocument();
  });
});