import React , { useEffect, useMemo, useState } from 'react';  

// styles
import './videoFrameView.scss';

interface VideoFrameViewProps {}

const VideoFrameView:React.FC<VideoFrameViewProps> = () => { 

  type fruitImagesState = Array<string>

// Images asset
const fruitImages:fruitImagesState = useMemo(() =>[
  'https://drive.google.com/uc?id=1vtaubItASKilyvb5sgQO7D7gjAQ7xo0i',
  'https://drive.google.com/uc?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR',
  'https://drive.google.com/uc?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh',
  'https://drive.google.com/uc?id=1UToQfe_NtiiiuMmEe0pTklSJVX5fMfjx',
  'https://drive.google.com/uc?id=1k9fwXuTvRq31IiIottNXyLXVmp_AlSqY',
  'https://drive.google.com/uc?id=1cLTEsyaPIfpbY0cDBVGWNcAJkYQiKkDy',
  'https://drive.google.com/uc?id=1XVFuCCK-H7Bsl6MElKsTonRS3LFwVeKr',
  'https://drive.google.com/uc?id=1iEEkhqhXHMwYEU_OZXFNy4WVJd8XgKeF',
  'https://drive.google.com/uc?id=1YQoo8tP26iVhQYzdOoul0GXX7VGhwxcy',
  'https://drive.google.com/uc?id=1phnVR5D_T1I5zbGglRQvQKwqwO8OK8g8',
  'https://drive.google.com/uc?id=1EkdV0pffOX-icwcJPJfEl8f8J9v1uKoO',
  'https://drive.google.com/uc?id=1jw8973CNvmfp2mocKx8XgCnfU9BUAB5o',
  'https://drive.google.com/uc?id=1mklqc080uvbzidP1ZUT_v_INLvphiM2z',
  'https://drive.google.com/uc?id=16kYP2us-BsJOflHdPnhPeyUavGrrYLKr',
  'https://drive.google.com/uc?id=1IQHncfdA2iU1YIdQndggvmoLIOIhc1he',
  'https://drive.google.com/uc?id=15h11jLQqXTHnFdruo2Ahz-DQf_KQj3vW',
  'https://drive.google.com/uc?id=1ktnwX9h1O27dQEKtZt78f4rDv1AIbnFS',
  'https://drive.google.com/uc?id=1owtgIhe8hFVF2LLhldAf1rODrurgv7OQ',
  'https://drive.google.com/uc?id=1i1VvCV1D00qLJFBjKqF_D837dnav6lLR',
  'https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7',
] , []) 
  
// // Global variable to control the scrolling behavior
// const step = 30; // For each 30px, change an image  
 
  // container style
  const [ containerStyle, setContainerStyle ]= useState( {  
    backgroundImage: `url('${fruitImages[0]}')`, 
  } )
  
  const [scrollTop, setScrollTop] = useState(0);
  const [label, setLabel] = useState(0); 
  const container = document.getElementById('IDFrame') ;  
  const  heightPos = container?.offsetTop  ;   
  

  useEffect(() => {
    const onScroll = (e:any) => {
      setScrollTop(e.target.documentElement.scrollTop); 
    };
    window.addEventListener("scroll", onScroll);   


    if( heightPos && scrollTop > (heightPos - window.innerHeight) ){    
      setLabel( Math.min(Math.floor((scrollTop - (heightPos - (window.innerHeight / 2)) )/30) + 1, 20) )      
    } 


 
  
  }, [containerStyle, fruitImages, heightPos,   scrollTop]);

  useEffect( () => {
    console.log(label)
    if(label < fruitImages.length && label > 0){ 
      setContainerStyle( { backgroundImage: `url('${fruitImages[label]}')` } ) 
    }
  } , [label,fruitImages ] )
 



  return (
    <div className='tps-videoFrame' >  
      {fruitImages.map( (item) => <link rel="preload" as="image" href={item} key={item}/> ) }
      <div className='container' id="IDFrame"  >   
        <div className='image-container' style={containerStyle} ></div>
      </div>
    </div>
  );
};
 
export default React.memo(VideoFrameView); 
