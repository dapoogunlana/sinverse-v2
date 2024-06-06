import React, {  } from 'react';
import { useNavigate } from 'react-router';
import { WhitePaper } from '../../../../../assets/files';
import {
  HeroDownloadGame,
  HeroDownloadWhitepaper,
  SINVERSE,
  HeroImgMobile,
  HeroScrollDownCircle,
  HeroScrollDownArrow,
  HeroDownloadGameText,
  HeroDownloadWhitepaperText,
  HeroHyperPlayCustomBadge,
  HeroDownloadGameWideText,
} from '../../../../../assets/images/new';
import Fire from '../../../../../components/block-components/fire/fire';
import { externalLinkConstants } from '../../../../../config/environment';
import { routeConstants } from '../../../../../services/constants/route-constants';
import './banner.scss';

function Hero2() {

  const navigate = useNavigate()

  const downloadWhitepaper = () => {
    window.open(WhitePaper);
  }
  const downloadGame = () => {
    navigate(`/${routeConstants.download}`);
  }
  const downloadHyperplay = () => {
    window.open(externalLinkConstants.hyperPlay);
  }
  const goDown = () => {
    document.getElementById('arrow-holder')?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='hero-case'>
      <div className='hero'>
        <Fire/>
        <div className='hero-img-case' data-aos='fade-right'></div>
        <div className='hero-content-case'>
          <div className='w100'>
            <h4 data-aos='fade-right' data-aos-delay='500'>Welcome to</h4>
            <div className='hollow-line' data-aos='zoom-in' data-aos-delay='400'></div>
          </div>
          <div className='content-features'>
            <div className='sinverse-topic imh'>
              <img src={SINVERSE} alt="" data-aos='skew' data-aos-delay='700' />
            </div>
            <div className='w100-flat'>
              <div className='mobile-image'>
                <img src={HeroImgMobile} data-aos='zoom-out' alt="" />
              </div>
            </div>
            {/* <div className='spread-info-top w100-flat' data-aos='zoom-in' data-aos-delay='1200'>
              <div className='hero-download' onClick={downloadWhitepaper}>
                <img src={HeroDownloadWhitepaper} alt="" />
                <p className='reduced-soft pt-2'>Download Whitepaper</p>
              </div>
              <div className='hero-download' onClick={downloadGame}>
                <img src={HeroDownloadGame} alt="" />
                <p className='reduced-soft pt-2'>Download Game</p>
              </div>
            </div> */}
            <div className='spread-holder'>
              <div className='hero-download-button web-purple' onClick={downloadGame}>
                <img src={HeroDownloadGameWideText} alt="" />
              </div>
              <div className='spread-downloads w100-flat' data-aos='zoom-in' data-aos-delay='1200'>
                <div className='hero-download-button red' onClick={downloadWhitepaper}>
                  <img src={HeroDownloadWhitepaperText} alt="" />
                </div>
                <div className='hero-download-button purple' onClick={downloadGame}>
                  <img src={HeroDownloadGameText} alt="" />
                </div>
                <div className='dvd'></div>
                <div className='hero-download-button blue' onClick={downloadHyperplay}>
                  <img src={HeroHyperPlayCustomBadge} alt="" />
                </div>
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
