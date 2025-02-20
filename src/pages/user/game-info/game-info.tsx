import React, { useEffect, useState } from 'react';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import {
  GameInfoBanner,
  DownloadIntro,
  CorporateKnifeMan,
  GameInfoPlayerEconomy,
  GameInfoBusinessLincences,
  GameInfoExpansion,
  GameInfoSocial,
  LogoHighRes,
  LogoSpinner,
} from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import './game-info.scss';

function GameInfo(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <div className='game-info'>
      <div className='first-sect'>
        <div className='first-img' data-aos='zoom-out' data-aos-delay='1000'>
          <img src={GameInfoBanner} alt="" />
        </div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='header-spacer'></div>
        <TopicHolder max={1250} className='w96 mt-5 mb-2 relative'>Welcome to SinVerse</TopicHolder>
        <div className='w96 max1250'>
          <div className='text-holder'>
            <h5 className='italic' data-aos='fade-right' data-aos-delay='200'>An Immersive Multiplayer Mafia Metaverse</h5>
            <p data-aos='fade-right' data-aos-delay='400'>
              SinVerse is an immersive multiplayer metaverse that blends mafia-themed gameplay with blockchain 
              technology. Featuring 17 distinct districts, each with unique properties, resources, and in-game 
              businesses, players can explore a dynamic world, establish enterprises and influence the in-game 
              economy. SinVerse is designed for entertainment, fostering strategic gameplay and competition 
              within a virtual environment.
            </p>
          </div>
        </div>
      </div>
      <div className='red-bg py-5 relative'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200 py-4'>
          <div className='row'>
            <div className='col-md-6 center-info' data-aos='zoom-in' data-aos-delay='500'>
              <div className='w96 max500 imh py-3'>
                <img src={GameInfoPlayerEconomy} alt="" />
              </div>
            </div>
            <div className='col-md-6 center-info' data-aos='fade-left'>
              <div className='case-content w96 py-3'>
                <h6 className='increased-x'>Player-Run Economy</h6>
                <p className='increased-soft'>
                  SinVerse features a player-driven economy where players and factions engage in various strategic 
                  activities to earn GOLD, the in-game currency. GOLD can be used for in-game transactions, including 
                  acquiring and purchasing in-game items such as weapons, transportation and unique clothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='second-sect py-5 relative'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200 py-4'>
          <div className='row'>
            <div className='col-md-6 center-info md-open' data-aos='zoom-in' data-aos-delay='500'>
              <div className='w90 max500 imh py-3'>
                <img src={GameInfoBusinessLincences} alt="" />
              </div>
            </div>
            <div className='col-md-6 center-info' data-aos='fade-left'>
              <div className='case-content w96 py-3'>
                <h6 className='increased-x'>Business Licenses in SinVerse</h6>
                <p className='increased-soft'>
                  Players can establish and manage businesses in SinVerse, shaping the in-game economy and 
                  utilizing blockchain technology for ownership and customization. There are two main categories 
                  of business licenses: Premium and Exclusive, each offering unique advantages. Additionally, 
                  all landowners in SinVerse receive a general license, allowing them to create and operate 
                  businesses on their property, enhancing customization and economic activity. To activate a 
                  business license, a player must own land in the designated district assigned to that license.
                </p>
              </div>
            </div>
            <div className='col-md-6 center-info md-close' data-aos='zoom-in' data-aos-delay='500'>
              <div className='w90 max500 imh py-3'>
                <img src={GameInfoBusinessLincences} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='blue-bg py-5 relative'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200 py-4'>
          <div className='row'>
            <div className='col-md-6 center-info' data-aos='zoom-in' data-aos-delay='500'>
              <div className='w80 max450 imh py-3'>
                <img src={GameInfoExpansion} alt="" />
              </div>
            </div>
            <div className='col-md-6 center-info' data-aos='fade-left'>
              <div className='case-content w96 py-3'>
                <h6 className='increased-x'>Gameplay Expansion</h6>
                <p className='increased-soft'>
                  SinVerse offers a diverse range of gameplay experiences, allowing players to test their skills 
                  and earn in-game rewards. Engage in daily mafia wars, turf battles, and heists for competitive 
                  action, or explore NPC interactions, mini-games, and special events. Exclusive NFT drops and 
                  limited-time offers provide opportunities to acquire rare in-game items. With regular updates 
                  and new features, SinVerse continues to evolve, keeping players engaged in an ever-expanding 
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='third-sect py-5 relative'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200 py-4'>
          <div className='row'>
            <div className='col-md-6 center-info md-open' data-aos='zoom-in' data-aos-delay='500'>
              <div className='w90 max500 imh py-3'>
                <img src={GameInfoSocial} alt="" />
              </div>
            </div>
            <div className='col-md-6 center-info' data-aos='fade-left'>
              <div className='case-content w96 py-3'>
                <h6 className='increased-x'>Social Aspects of SinVerse</h6>
                <p className='increased-soft'>
                  In addition to the economy and gameplay, SinVerse also offers social aspects for players to connect and 
                  customize their gaming experience. Players can form or join mafia families, create alliances, and engage 
                  in cooperative activities to gain an advantage in the game world. The use of NFTs also allows players to 
                  customize and personalize their businesses, properties, and characters, creating a unique identity and 
                  showcasing their virtual assets to others in the community.
                </p>
              </div>
            </div>
            <div className='col-md-6 center-info md-close' data-aos='zoom-in' data-aos-delay='500'>
              <div className='w90 max500 imh py-3'>
                <img src={GameInfoSocial} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='green-bg py-5 relative'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200 py-4'>
          <div className='row'>
            <div className='col-md-6 center-info' data-aos='zoom-in' data-aos-delay='500'>
              <div className='w90 max450 logo-spin py-3'>
                <div className='solid'>
                  <img src={LogoSpinner} alt="" />
                </div>
                <div className='floating'>
                  <img src={LogoHighRes} alt="" />
                </div>
              </div>
            </div>
            <div className='col-md-6 center-info' data-aos='fade-left'>
              <div className='case-content w96 py-3'>
                <h6 className='increased-x'>Conclusion</h6>
                <p className='increased-soft'>
                  SinVerse delivers an immersive multiplayer mafia-themed metaverse where players can shape the in-game 
                  economy, build businesses, and expand their gameplay experience in a dynamic virtual world. With a 
                  player-driven economy, blockchain-powered NFT-based business licenses, customizable enterprises, and 
                  evolving gameplay features, SinVerse offers a unique and engaging experience for those seeking a strategic 
                  and interactive virtual underworld adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default GameInfo;
