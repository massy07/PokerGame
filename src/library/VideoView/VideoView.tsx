import React, {  }  from 'react';  
import classNames from 'classnames';
// styles
import './videoView.scss';

interface VideoViewProps {
  className?: string; 
  VideoLogin:string;
  children?: React.ReactNode;
}

/**
 * Components that returns a counter and redirect to main page
 */
const VideoView: React.FC<VideoViewProps> = ({ className, VideoLogin , children }) => { 

  const classList = classNames('tps-videoView',className)
 
  return (
    <div className={classList}  > 
      <video  className='videoView-video' id='video'  loop autoPlay muted >
        <source src={ `/images/${VideoLogin}` } />
        {children}
      </video> 
    </div>
  );
};

 
export default React.memo(VideoView);