import React  from 'react';     
// styles 

interface CardViewProps { 
  imageCard:string;
  nameCard:string;
  className?:string;
 }  

  const CardView: React.FC<CardViewProps> = ({  imageCard, nameCard, className }) => {   
 
  const classList =  'cardView ' + className  

  return (
    <>
      <div className='pg-imageView' >   
        <img src={'./image/'+imageCard} alt={nameCard}  className={classList}/>
      </div>
    </>
  );
};

 
export default React.memo(CardView);

