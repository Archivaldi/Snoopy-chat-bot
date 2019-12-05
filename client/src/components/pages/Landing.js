
import React from 'react';
import { Fade } from 'react-slideshow-image';
import './landing.css';

const fadeImages = [
    
    "https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png",
    "https://i.ytimg.com/vi/9ZMw6dGRkGo/maxresdefault.jpg",
   
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 300,
  infinite: true,
  indicators: true
}

const Landing = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} />
          
        </div>
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>
      </div>
      
    </Fade>
  )
}


export default Landing