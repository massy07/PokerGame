import React  from 'react';   
import { useNavigate } from 'react-router-dom';

// styles
import './homepage.scss';

interface HomepageProps {  }

/**
 * Components that returns a counter and redirect to main page
 */
const Homepage: React.FC<HomepageProps> = () => { 
  const navigate = useNavigate();

  const handleButtonClick = ( url:string ):void => {    
    navigate(url)
  }      

 
  return (
    <div className='pg-homepage'>  
      <h1>HOMEPAGE</h1>
      <button onClick={()=>handleButtonClick('/counter-cards')}>COUNTER</button>
      <button onClick={()=>handleButtonClick('/quiz')}>QUIZ</button>
      <button onClick={()=>handleButtonClick('/play-strategy')}>STRATEGY</button>
    </div>
  );
};

 
export default React.memo(Homepage);

