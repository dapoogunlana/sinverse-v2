import React, {  } from 'react';
import './banner-sub-space.scss';

function SubSpace() {
  return (
    <div className='sub-hero py-5'>
      <div className='w90 max1200 pt5-web pb-4'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 py-4 center-info'>
                <div className='w96 py-3'>
                  <p className='font-weight-bold increased-x'>Become Rich. Become Infamous. Become a Kingpin.</p>
                  <p className='text'>
                    Welcome to SinVerse, the ultimate multiplayer game for fans of Mafia games who want an even more immersive 
                    and interactive experience. In SinVerse, you'll join a thriving player-run economy where every decision you 
                    make can make or break your criminal empire. Rise to the top and become the ultimate kingpin, building a 
                    criminal empire that's the envy of your rivals. But beware - in SinVerse, danger lurks around every corner, 
                    and you'll need to be smart, ruthless, and cunning to survive. 
                    <br /><br />
                    Do you have what it takes to rule the underworld? Join us now and find out.
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
