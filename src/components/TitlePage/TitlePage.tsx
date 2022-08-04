import React  from 'react';   
import { useNavigate } from 'react-router';

// styles
import './titlePage.scss';

interface TitlePageProps { 
  title:string
 }

/**
 * Components that returns a counter and redirect to main page
 */
const TitlePage: React.FC<TitlePageProps> = ({title}) => { 
 
  const navigate = useNavigate();

  return (
    <div className='pg-titlePage'>  
      <div className='titlePage-container'>  
      <button onClick={()=>navigate("/homepage")}>go back</button> 
      <h1>{title}</h1>
      </div>
    </div>
  );
};

 
export default React.memo(TitlePage);

