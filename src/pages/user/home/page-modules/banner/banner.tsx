import React, {  } from 'react';
import { WhitePaper } from '../../../../../assets/files';
import { HeroDownloadGame, HeroDownloadWhitepaper, SINVERSE, HeroImgMobile, HeroScrollDownCircle, HeroScrollDownArrow } from '../../../../../assets/images/new';
import './banner.scss';

function Hero2() {

  const downloadWhitepaper = () => {
    window.open(WhitePaper);
  }
  const downloadGame = () => {
    window.open(WhitePaper);
  }
  const goDown = () => {
    document.getElementById('arrow-holder')?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='hero-case'>
      <div className='hero'>
        <div className='hero-img-case'></div>
        <div className='hero-content-case'>
          <div className='w100'>
            <h4>Wecome to</h4>
            <div className='hollow-line'></div>
          </div>
          <div className='content-features'>
            <div className='sinverse-topic imh'>
              <img src={SINVERSE} alt="" />
            </div>
            <div className='w100-flat'>
              <div className='mobile-image'>
                <img src={HeroImgMobile} alt="" />
              </div>
            </div>
            <div className='spread-info-top w100-flat'>
              <div className='hero-download' onClick={downloadWhitepaper}>
                <img src={HeroDownloadWhitepaper} alt="" />
                <p className='reduced-soft'>Download Whitepaper</p>
              </div>
              <div className='hero-download' onClick={downloadGame}>
                <img src={HeroDownloadGame} alt="" />
                <p className='reduced-soft'>Download Game</p>
              </div>
            </div>
          </div>
        </div>
        <div className='scroll-down' onClick={goDown}>
          <div className='circle-holder'>
            <img src={HeroScrollDownCircle} alt="" />
          </div>
          <div className='arrow-holder' id='arrow-holder'>
            <img src={HeroScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
