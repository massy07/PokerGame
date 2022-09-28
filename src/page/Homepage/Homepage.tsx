import React from 'react';    
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setResetCard } from '../../store/reducer/decksStore';
import { setPlayer } from '../../store/reducer/handCardsPlayersStore';

// styles
import './homepage.scss';

interface HomepageProps {  }

const Homepage: React.FC<HomepageProps> = () => { 

  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const handleClickUrl = ( url:string ):void => {   
    navigate(url)
    dispatch( setResetCard() )
    dispatch( setPlayer() )
  }      

  return (
    <div className='pg-homepage'>  
      <h1>HOMEPAGE</h1>
      <button onClick={()=>handleClickUrl('/quiz')}>QUIZ</button>
      <button onClick={()=>handleClickUrl('/counter-cards')}>COUNTER</button>
      <button onClick={()=>handleClickUrl('/play-strategy')}>STRATEGY</button>
    </div>
  );
};

 
export default React.memo(Homepage);
 