import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Routes , Route  } from "react-router"; 
import { Homepage } from '../page/Homepage'; 
import { Private } from '../page/Private';
import { Quiz } from '../page/Quiz';
import { PlayStrategy } from '../page/PlayStrategy';
import { CounterCards } from '../page/CounterCards'; 
import { TelevisionQuiz } from '../page/TelevisionQuiz';

interface RoutesAppProps {}

const RoutesApp:React.FC<RoutesAppProps> = () => { 


  return ( 
      <Routes>     
        <Route path="/" element={<Homepage/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/play-strategy" element={<PlayStrategy/>} />
        <Route path="/counter-cards" element={<CounterCards/>} />  
        <Route path="/counter-cards" element={<TelevisionQuiz/>} />  
          <Route element={<PrivateRoute/>}> 
          <Route path="/private" element={<Private/>} />  
        </Route> 
    </Routes>
  );
};

export default React.memo(RoutesApp);
