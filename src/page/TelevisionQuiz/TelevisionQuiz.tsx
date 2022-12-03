import React, { FC } from 'react';

// style
import './televisionQuiz.scss';

interface TelevisionQuizProps {}

const TelevisionQuiz: FC<TelevisionQuizProps> = () => { 

  console.log('TelevisionQuiz');
  
  return (
    <>   
      <div className="televisionQuiz" data-testid="televisionQuiz">
        TelevisionQuiz Component
      </div>
    </>
  );
}; 

export default React.memo(TelevisionQuiz); 
