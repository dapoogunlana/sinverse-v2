import React, {  } from 'react';
import {
  SbCardIconExperience,
  SbCardIconEarn,
  SbCardIconExplore,
} from '../../../../../assets/images';
import './banner-sub-space.scss';

function SubSpace() {
  return (
    <div className='sub-hero py-5'>
      <div className='w90 max1200 pt5-web pb-4'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 py-4 center-info'>
                <div className='w96 py-3'>
                  <p className='text center-mobile'>
                    Sinverse is the first R-Rated Mafia Metaverse built on the blockchain. It’s an underworld MMPORG action 
                    thriller game that combines the exhilarating action of Grand Theft Auto and Eve Online but goes much 
                    further to enable gamers to have complete ownership and control of their in-game assets ranging from real 
                    estate, weapons, automobiles, fashion accessories, farms, businesses and many more. The game is set around 
                    the theme of power, dominance, hostile take-over, strategic alliance, control and rise to prominence. 
                    Unlike many metaverse games that are generally P2E, Sinverse is the first blockchain game to introduce and 
                    build a working player run economy (PRE). If you are an avid gamer and your opium is career gaming,  then 
                    Sinverse is what you have been looking for. Enjoy the thrill of War & dominance as you battle your way to 
                    the top!
                  </p>
                </div>
          </div>
          <div className='col-lg-7 col-md-6 py-4 center-info'>
            <div className='vid-space' data-aos='zoom-in' data-aos-delay='800'>
                <div className='big-sphare-curve' data-aos='zoom-in' data-aos-delay='900'></div>
                <div className='small-sphare-curve' data-aos='zoom-in' data-aos-delay='900'></div>
                <div className='vid-holder'>
                  <div className="stream-vid">
                      <iframe width="100%" height="100%" title="vid-modal" src={`https://www.youtube.com/embed/${'kD-IIeri2Uo'}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
