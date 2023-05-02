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
              SinVerse is an immersive play-to-earn multiplayer mafia metaverse that combines the excitement of a mafia-themed 
              game with the power of blockchain technology. With 17 distinct districts, each with its own properties, resources, 
              and in-game businesses, players can dive into a dynamic world where they can shape the economy, run businesses, 
              and make their mark.
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
                  In SinVerse, the economy is entirely player-driven. Players and factions compete for SIN GOLD coins, the 
                  in-game currency, through various activities such as organized crime, smuggling, and illegal activities. 
                  SIN GOLD coins are interchangeable with SIN Tokens at a variable exchange rate, blockchain-based tokens that 
                  can be used for various in-game transactions, including acquiring NFT-based business licenses and in-game 
                  items such as weapons, transportation, and unique clothing. This creates a unique play-to-earn ecosystem 
                  where players can earn real-world value from their in-game activities.
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
                  Players have the opportunity to set up and run businesses in SinVerse, contributing to the game's 
                  economy and utilizing blockchain technology. There are two main categories of business licenses: Premium 
                  and Exclusive. These businesses are limited in number and offer a higher earning potential. Additionally, 
                  every landowner in SinVerse receives a general license, allowing them to create a general business on their 
                  property, providing further opportunities for customization and entrepreneurship. In order for a business 
                  license to be activated, a user must also be a landowner within SinVerse in the designated district the 
                  license is assigned to.
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
                  SinVerse offers a variety of gameplay options for players to enhance their skills and earn rewards. Daily 
                  mafia wars, turf battles, and heists provide opportunities for competitive gameplay and rewards. NPC 
                  interactions, mini-games, and special events, including NFT drops and limited-time offers, offer additional 
                  avenues for players to win rare items and valuable rewards. The gameplay in SinVerse is constantly expanding, 
                  with regular updates and new features to keep players engaged and entertained.
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
                  SinVerse offers an immersive play-to-earn multiplayer mafia metaverse experience where players can shape the 
                  economy, run businesses, expand their gameplay options, and connect with others in a dynamic game world. 
                  With its player-driven economy, utilization of blockchain technology for NFT-based business licenses, 
                  customizable businesses, expanding gameplay features, and social aspects, SinVerse provides a unique and 
                  engaging experience for players who are looking for a virtual mafia adventure with real-world value.
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
