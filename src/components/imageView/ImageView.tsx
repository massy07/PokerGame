
import React from 'react';      

// styles
import './imageView.scss'; 

interface ImageViewProps { 
  imageCard:string;
  nameCard:string;
  className?:string;
 }  

const ImageView: React.FC<ImageViewProps> = ({ imageCard, nameCard,className }) => {   

  const classList =  'imageView '+ className  

  return (
    <>
      <div className={classList}>   
        <img src={'./image/'+imageCard} alt={nameCard} className='image-show'/>
      </div>
    </>
  );
};

 
export default React.memo(ImageView);

