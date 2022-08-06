import React, { FC } from 'react';

// style
import './televisionQuiz.scss';

interface TelevisionQuizProps {}

const TelevisionQuiz: FC<TelevisionQuizProps> = () => (
  <div className="televisionQuiz" data-testid="televisionQuiz">
    TelevisionQuiz Component
  </div>
);

export default React.memo(TelevisionQuiz); 
