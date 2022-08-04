import React, { useEffect, useState }  from 'react';     
import { useNavigate } from 'react-router';
import { CardView } from '../../components/CardView';
import { decks } from '../../store/mazzi';
import { cardState } from '../../store/mazzo'; 
 

// styles
import './contatore.scss';

interface ContatoreProps {  }

/**
 * Components that returns a counter and redirect to main page
 */
const Contatore: React.FC<ContatoreProps> = () => { 

  const navigate = useNavigate();
  const [ count, setCount ] = useState(0)
  const [ numberDecks ] = useState(6)
  const [ creationCard , setCreationCard ] = useState(true) 
  const [ deck, setDeck ] = useState<Array<cardState>>([])
  const [ card, setCard ] = useState<cardState>( {semi: null,name: '',value: 0 ,image:'cards/start.svg'}) 


  // console.log( deck.length  )

   
  useEffect(()=>{ 
    if(creationCard){
        setDeck( decks(numberDecks) );
        setCard(card)
        setCreationCard(false)
      }
    } , [card, creationCard, numberDecks]
  )

  useEffect(()=>{ 
    setCount( count =>  count + card?.value )
   } , [ card ] )

  const handleCount = () => {
    selectionCards()  
  } 

  const cardRemove = ( deckSel:any ,cardPosition:number) => {
    let newDeck = [...deckSel]
    newDeck.splice(cardPosition,1)
    return newDeck
  }
 
  function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  const selectionCards = () => {
    var indexCard = getRandomInt(deck.length)
    var card = deck[indexCard]
    setCard(card)
    setDeck(cardRemove(deck,indexCard) )  
  } 

  const percentDecks = ( numberDecks:number, totCardleft:number ) => {
    return( ( (numberDecks*52) - totCardleft )  )
  }

  return (
    <div className='pg-contatore'>  
    <button onClick={()=>navigate("/homepage")}>go back</button>
      <h1>numero di mazzi {numberDecks}</h1> 
      <h1>percentuale carte già giocate  { percentDecks(numberDecks, deck.length)}</h1> 
      <CardView imageCard={card.image} nameCard={card.name} className='counting' /> 
      <h1>{count}</h1>
      { deck.length>1 &&
        <div className='contatore-containerButton'>
          <button className='contatore-button' onClick={ handleCount } > cliccami </button> 
        </div> 
      } 
    </div>
  );
};

 
export default React.memo(Contatore);