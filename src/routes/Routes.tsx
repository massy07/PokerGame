import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Routes , Route  } from "react-router"; 
import { Homepage } from '../page/Homepage'; 
import { Contatore } from '../page/Contatore'; 
import { Privato } from '../page/Privato';
import { Quiz } from '../page/Quiz';
import { PlayStrategy } from '../page/PlayStrategy';

interface RoutesAppProps {}

const RoutesApp:React.FC<RoutesAppProps> = () => { 

  

  return ( 
      <Routes>     
        <Route path="/" element={<Homepage/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/play-strategy" element={<PlayStrategy/>} />
        <Route path="/contatore" element={<Contatore/>} /> 
          <Route element={<PrivateRoute/>}> 
          <Route path="/privato" element={<Privato/>} />  
        </Route> 
    </Routes>
  );
};

export default React.memo(RoutesApp);
