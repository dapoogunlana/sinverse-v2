import React, {  } from 'react';
import './banner-sub-space.scss';

function SubSpace() {
  return (
    <div className='sub-hero py-5'>
      <div className='w90 max1200 pt5-web pb-4'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 py-4 center-info'>
                <div className='w96 py-3'>
                  <p className='font-weight-bold increased-x'>Become Powerful. Become Infamous. Build Your Empire.</p>
                  <p className='text'>
                    Welcome to SinVerse, the ultimate multiplayer game for fans of mafia-inspired worlds who 
                    crave an immersive and interactive experience. In SinVerse, you’ll join a dynamic, 
                    player-driven economy where every decision shapes your rise to power. Strategize, expand 
                    your influence, and build an empire that commands respect. But beware—challenges await at 
                    every turn, and only the smartest and most cunning will thrive. 
                    <br /><br />
                    Do you have what it takes to dominate the SinVerse? Join us now and find out.
                  </p>
                </div>
          </div>
          <div className='col-lg-7 col-md-6 py-4 center-info'>
            <div className='vid-space' data-aos='zoom-in' data-aos-delay='800'>
                <div className='big-sphare-curve' data-aos='zoom-in' data-aos-delay='900'></div>
                <div className='small-sphare-curve' data-aos='zoom-in' data-aos-delay='900'></div>
                <div className='vid-holder'>
                  <div className="stream-vid">
                      <iframe width="100%" height="100%" title="vid-modal" src={`https://www.youtube.com/embed/${'xvNLi8NCM3E'}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubSpace;
