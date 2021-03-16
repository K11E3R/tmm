import React from 'react';
import './Slides.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const proprietes = {
    duration: 5000,
    transitionduration: 500,
    infinite : true,
    indicators: true,
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...proprietes}>
          <div className="each-slide">
              <div>
                  <img src='../imageonline-co-logoadded.png' alt='img1'style="width: 100% !important; " />
                  
              </div>
          </div>
          <div className="each-slide">
            <div>
                  <img src='../imageonline-co-logoadded-3-2.png' alt='img1' style="width: 100% !important; " />
            </div>
          </div>
          <div className="each-slide">
            <div>
                  <img src='../imageonline-co-logoadded-9.png' alt='img1' style="width: 100% !important; " />
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow ;