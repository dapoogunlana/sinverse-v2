import React, { useEffect } from 'react';
import Banner2 from './page-modules/banner/banner';
import LatestNews from './page-modules/latest-news/latest-news';
import './home.scss';
import SubSpace from './page-modules/banner-sub-space/banner-sub-space';
import GamePlay from './page-modules/game-play/game-play';
import KuCoinSpace from './page-modules/kuCoin-space/kuCoin-space';
import Features from './page-modules/features/features';
import LandTypes from './page-modules/land-types/land-types';
import Roadmap from './page-modules/roadmap/roadmap';
import Partners from './page-modules/partners/partners';
import MarketPlace from './page-modules/marketplace/marketplace';

function About(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[props]);
  
  return (
    <div className='home'>
      <Banner2/>
      <SubSpace/>
      <GamePlay/>
      <KuCoinSpace/>
      <Features/>
      <LandTypes/>
      <MarketPlace/>
      <Roadmap/>
      <LatestNews/>
      <Partners/>
    </div>
  );
}

export default About;
