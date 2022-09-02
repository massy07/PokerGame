import React, { FC, useEffect, useState } from 'react';

// style
import './ViewStrategyResult.scss';

interface ViewStrategyResultProps {
  resultStrategy:Array<string>
}

const ViewStrategyResult: FC<ViewStrategyResultProps> = ({resultStrategy}) => { 

  const [ textView, setTextView ] = useState(textSelectionStrategy[0])

  useEffect(()=>{ 
  if(resultStrategy.length===0 && resultStrategy.length===0 ){
    setTextView(textSelectionStrategy[1])
  } else if(resultStrategy[0]!==resultStrategy[1]){
    setTextView(textSelectionStrategy[2])
  } else setTextView(textSelectionStrategy[3]) 
  },[resultStrategy])
   
  return (
    <>   
      <div className="viewStrategyResult" data-testid="viewStrategyResult">
        <h1>{textView.title}</h1>
        <h2>{textView.text}</h2> 
        <div className={ 'result-game' + (resultStrategy.length !== 0 ?' show':' hide'  ) } >
          <h2>your selection {resultStrategy[0]} good decision {resultStrategy[1]}</h2> 
        </div>
      </div>
    </>
  );
};

export default React.memo(ViewStrategyResult); 

const textSelectionStrategy = [
  {
    title:'ENJOY AND SHOW YOUR ABILITY',
    text: ' '
  },
  {
    title:'PLAY',
    text: 'TRY YOUR SKILLS'
  },
  {
    title:'WRONG!',
    text: 'SORRY, BAD DECISION!'
  },
  {
    title:'WELL DONE,',
    text: 'YOU ARE IN THE RIGHT WAY...'
  }
]
