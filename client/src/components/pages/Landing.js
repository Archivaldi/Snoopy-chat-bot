
import React from 'react';
import { Fade } from 'react-slideshow-image';
import './landing.css';
const fadeImages = [
    "https://cdn.acidcow.com/pics/20100616/funny_for_sale_signs_22.jpg",
    "https://cdn.pixabay.com/photo/2015/01/21/13/21/sale-606687__340.png",
    "http://i.imgur.com/a1GHNZm.jpeg"    
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 300,
  infinite: false,
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
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
      </div>
    </Fade>
  )
}


export default Landing