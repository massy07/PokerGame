
import React from 'react';      

// styles
import './imageView.scss'; 

interface ImageViewProps { 
  imageCard:string;
  nameCard:string;
  className?:string;
 }  

const ImageView: React.FC<ImageViewProps> = ({ imageCard, nameCard,className }) => {   

  const classList =  'pg-imageView '+ className  

  return (
    <>
      <div className='pg-imageView' >   
        <img src={'./image/'+imageCard} alt={nameCard}  className={classList}/>
      </div>
    </>
  );
};

 
export default React.memo(ImageView);

