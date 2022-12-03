import React  from 'react'; 
import {Navigate, Outlet, useLocation } from "react-router"; 

interface PrivateRouteProps { 
}

const PrivateRoute:React.FC<PrivateRouteProps>  = ( ) => { 


  const location = useLocation();
 
  const isAuthenticated  = true  // useSelector<rootState,boolean|undefined>(  state  => state.userInfo.isAuthenticated ) ; 
    
    return isAuthenticated ? <Outlet/> : <Navigate to='/privato' state={{from:location}} replace />;


};

export default React.memo(PrivateRoute);
