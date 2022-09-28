
import React from 'react';      

// styles
import './imageView.scss'; 

interface ImageViewProps { 
  imageCard:string;
  nameCard:string;
  className?:string;
  onClick?: () => void;
 }  

const ImageView: React.FC<ImageViewProps> = ({ imageCard, nameCard,className,onClick }) => {   

  const classList =  'imageView '+ className  
  return (
    <>
      <div className={classList} onClick={onClick} >   
        <img src={'./image/'+imageCard} alt={nameCard} className='image-show'/>
      </div>
    </>
  );
};

 
export default React.memo(ImageView);

