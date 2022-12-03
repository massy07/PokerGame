import React, { useState }  from 'react';   
import { ImageView } from '../../components/ImageView';
import { getRandomInt } from '../../store/utils/utils';
import { mixPrizeArray } from './utils'; 
import { TitlePage } from '../../components/TitlePage';

// styles
import './quiz.scss';

interface QuizProps {  }

const Quiz: React.FC<QuizProps> = () => { 
  

  const [ prizeArray, setPrizeArray ] = useState<Array<number>>(mixPrizeArray())  
  const [ play, setPlay ] =  useState<string>("firstSelect")   
  const [ showPrizeArray , setShowPrizeArray ] = useState<Array<boolean>>([false,false,false]) 
  const defaultImgBox = {name:'box', image:'quiz/box.png'}
  const [ showFinalResult, setShowFinalResult ] = useState<boolean>( false ) 
  const [ finalResult, setFinalResult ] = useState<string>( 'start' ) 

  const imagePrize = [ {name:'capra', image:'quiz/capra.png'},{name:'auto', image:'quiz/auto.png',} ]
 
  const creationPrize = () => { 
    setShowPrizeArray(selectResult('start'))
    setPrizeArray( mixPrizeArray() ) 
    setPlay('firstSelect')
    setShowFinalResult(false)
  }

  const selectResult = (play:string) => {
    if(play==="Win"||play==="Lost"){ return [ true, true, true] }
    else return [ false, false, false] 
  }

  const visionAllBox = (selectBox:number) => { 
    setShowFinalResult(true)
     if( prizeArray[selectBox]===1 ){
      setPlay("Win")
      setShowPrizeArray(selectResult("Win"))
      setFinalResult("Win")
     }else{
      setPlay("Lost")
      setShowPrizeArray(selectResult("Lost"))
      setFinalResult("Lost")
     }
  }

  const heandleClick = (selectBox:number) => { 
    var selectOneBox = true
      if( play==="firstSelect" ){  
    for(let i=0; i<3 ;i++ ){
        while(selectOneBox){
          var wrongBox = getRandomInt(3)
          if( wrongBox!==selectBox && prizeArray[wrongBox]!==1){
            showPrizeArray[wrongBox]=true
            selectOneBox=false
          } 
        }
        setPlay("lastSelect")
      }  
      }else{
        visionAllBox(selectBox)
      }
  }

  return (
    <div className='pg-quiz'>           
      <TitlePage title='Quiz' />
      <button onClick={creationPrize}> play </button> 
      <div className='quiz-container-box'>  
        { (showPrizeArray.length > 0) && 
            prizeArray.map( (item,index)=> (
               <div className={'quiz-image '+imagePrize[item].name} onClick={ ()=>heandleClick(index) }>  
                {showPrizeArray[index]
                  ?<ImageView imageCard={imagePrize[item].image} nameCard={imagePrize[item].name}  className={imagePrize[item].name}/>  
                  :<ImageView imageCard={defaultImgBox.image} nameCard={defaultImgBox.name}  className={defaultImgBox.name}/>  
                } 
              </div> 
            )
          )
        }
      </div>
      <h1 className='quiz-result'>{(showFinalResult)?finalResult:'play'}</h1> 
    </div>
  );
};

 
export default React.memo(Quiz);
