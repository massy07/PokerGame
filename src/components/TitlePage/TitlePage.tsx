import React  from 'react';   
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setNewDecks } from '../../store/reducer/decksStore';

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
  const dispatch = useDispatch();

  const  handleBackHomepage = (url:string) => {
    dispatch(setNewDecks()) 
    navigate(url)
  }

  return (
    <div className='titlePage'>  
      <div className='titlePage-container'>  
      <button onClick={()=>handleBackHomepage("/homepage")}>go back</button> 
      <h1>{title}</h1>
      </div>
    </div>
  );
};

 
export default React.memo(TitlePage);

