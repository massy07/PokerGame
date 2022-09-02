import React  from 'react';    
import { useNavigate } from 'react-router-dom';

// styles
import './homepage.scss';

interface HomepageProps {  }

const Homepage: React.FC<HomepageProps> = () => { 

  const navigate = useNavigate(); 

  const handleClickUrl = ( url:string ):void => {   
    navigate(url)
  }      

  return (
    <div className='pg-homepage'>  
      <h1>HOMEPAGE</h1>
      <button onClick={()=>handleClickUrl('/counter-cards')}>COUNTER</button>
      <button onClick={()=>handleClickUrl('/quiz')}>QUIZ</button>
      <button onClick={()=>handleClickUrl('/play-strategy')}>STRATEGY</button>
    </div>
  );
};

 
export default React.memo(Homepage);

