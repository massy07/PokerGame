import classNames from 'classnames';
import React, { useState }  from 'react'; 
// styles
import './driftBlock.scss';

interface DriftBlockProps { 
  children?: React.ReactNode;
  image:string;
  velocity:number;
  fatherID: string; 
  className?: string; 
}

const DriftBlock:React.FC<DriftBlockProps> = ({ className , image  , children , velocity, fatherID}) => {

  
  const [ moveBG ,setMoveBG ] = useState<number>( 0 ) 
  const [ pageScroll , setPageScroll ] = useState<number>(0)
  const [ indexScroll, setIndexScroll ] = useState<number>(0)  
  const [windowHeight ] = useState(window.innerHeight );

  const classList = classNames( 'tps-driftBlock' , className );
 
  let container:HTMLElement | null = null;   
  let topPos:number = 0;  
  let heightPos:number = 0 ;     
  const containerFather =  document.getElementById(fatherID)?.offsetHeight ;   

  const addValue=()=>{ 
    container = document.getElementById('boxRefID');    
    if(container&&containerFather){
      topPos = container?.offsetTop;  
      heightPos = container?.offsetTop ;    
    }
  } 

  const cBG =  () => {   
    addValue()
    if(topPos && heightPos && moveBG < heightPos && containerFather ){    
      if( (window.scrollY+windowHeight) >= topPos && (topPos+heightPos) >= window.scrollY ){     
        if(pageScroll>indexScroll && moveBG > ( -1* (containerFather/2) ) ){ 
          // console.log( 'DOWN' ) 
          setIndexScroll( pageScroll - 1 )  
          setMoveBG(moveBG - velocity )
        }
        if(pageScroll===indexScroll){
          // console.log( 'STOP' ) 
          setIndexScroll( pageScroll )
        }
        if(pageScroll<indexScroll && moveBG<0 ){ 
          // console.log( 'UP' ) 
          setIndexScroll( pageScroll + 1 ) 
          setMoveBG(moveBG + velocity ) 
        }    
      } else{
       // console.log("EXIT")
      }
    } 
    setPageScroll(window.scrollY) 
  }  
  window.addEventListener( 'scroll' , cBG )
 

  return (
    <div className={classList} style={{backgroundPositionY: moveBG,  backgroundImage: `url(${image})` }} id='boxRefID'     >  
      <label>DriftBlock</label>
      {children}
    </div>
  );
};
 
export default React.memo(DriftBlock); 

