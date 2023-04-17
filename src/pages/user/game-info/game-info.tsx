import React, { useEffect, useState } from 'react';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { GameInfoMetaverse, GameInfoFaction, GameInfoTools, GameInfoKingpin, CardStretchBg } from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import SinCard from '../../../components/base-components/sin-card/sin-card';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';
import './game-info.scss';
import AppModal from '../../../components/block-components/app-modal/app-modal';
import SinButton from '../../../components/base-components/sin-button/sin-button';

function GameInfo(props: any) {

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <div className='game-info'>
      <div className='first-sect'>
        <div className='first-bg'></div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='header-spacer'></div>
        <TopicHolder max={1250} className='w96 my-5 relative'>Game Info</TopicHolder>
        <div className='w96 max1200'>
          <div className='row'>
            <div className='col-lg-6 col-md-12' data-aos='fade-up' data-aos-delay='100'>
              <SinCard className='info-card' dark>
                <SinCard className='game-info-img'>
                  <img src={GameInfoMetaverse} alt="" />
                </SinCard>

                <div className='relative py-3'>
                  <SeparationLine></SeparationLine>
                </div>

                <h6 className='increased'>THE METAVERSE</h6>
                <p className='reduced'>
                  Your journey in Sinverse begins with acquiring a piece of land. The whole action takes place right inside 
                  the fictional Sinverse that has a vivid resemblance with some real life cities as a closer look at the naming 
                  and architecture reveals. The City has 17 districts with a total of 15,000 plots available for users to buy 
                  and own. Each district has its own unique faction; users can enrol and benefit from resources provided by 
                  any district they desire to domicile in.
                </p>
              </SinCard>
            </div>
            <div className='col-lg-6 col-md-12 pt-high-web' data-aos='fade-up' data-aos-delay='300'>
              <SinCard className='info-card' dark>
                <SinCard className='game-info-img'>
                  <img src={GameInfoFaction} alt="" />
                </SinCard>

                <div className='relative py-3'>
                  <SeparationLine></SeparationLine>
                </div>

                <h6 className='increased'>JOIN A FACTION</h6>
                <p className='reduced'>
                  Now that you have successfully owned a piece of real estate in the rated-R metaverse, you will need to protect 
                  yourself and assets by joining a faction as you now live in a “hunt or be hunted world”. There is no assuming 
                  a neutral position in Sinverse otherwise you will be easily dominated and vanquished. There are multiple 
                  gangs to join across the City but the smart move would be to join a faction that controls your neighborhood.
                </p>
              </SinCard>
            </div>
          </div>
        </div>
      </div>
      <div className='second-sect'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200'>
          <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6' data-aos='fade-left'>
              <div className='card-case'>
                <div className='case-bg'>
                  <img src={CardStretchBg} alt="" />
                </div>
                <div className='case-content'>
                  <h6 className='increased'>HUNT OR BE HUNTED</h6>
                  <p className='reduced'>
                    The easiest way to climb through the ranks and become the ultimate kingpin will be to ensure you are on 
                    top of your game - either taking out members of other factions, arranging for their abduction or carrying 
                    out various sinister task for your gang. So go out there and whack someone or someone will whack you first 
                    and you will be out of action. Remember, the more tasks you are involved in, the more likelihood that your 
                    earning in SIN tokens & associated NFTs will increase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='third-sect'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200'>
          <div className='row'>
            <div className='col-md-6' data-aos='fade-right'>
              <div className='card-case'>
                <div className='case-bg'>
                  <img src={CardStretchBg} alt="" />
                </div>
                <div className='case-content'>
                  <h6 className='increased'>BRAINS OR BRAWN?</h6>
                  <p className='reduced'>
                    Live the Sinverse life in the direction you desire. Are you heady and always want to live on the edge? 
                    Simply join the Yakuza faction who control the Yakuza district. Ensure you are deeply loyal to their cause 
                    otherwise you may be excommunicated. If you are thrilled by careful and strategic planning, then what you 
                    seek is the dreaded Mafia faction who control the whole stretch of the Sicilian district. Fortunately, 
                    there is always a place for everyone in Sinverse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fourth-sect'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200'>
          <div className='row'>
            <div className='col-lg-6 col-md-12' data-aos='fade-up' data-aos-delay='100'>
              <SinCard className='info-card' dark>
                <SinCard className='game-info-img'>
                  <img src={GameInfoMetaverse} alt="" />
                </SinCard>

                <div className='relative py-3'>
                  <SeparationLine></SeparationLine>
                </div>

                <h6 className='increased'>THE METAVERSE</h6>
                <p className='reduced'>
                  Your journey in Sinverse begins with acquiring a piece of land. The whole action takes place right inside 
                  the fictional Sinverse that has a vivid resemblance with some real life cities as a closer look at the naming 
                  and architecture reveals. The City has 17 districts with a total of 15,000 plots available for users to buy 
                  and own. Each district has its own unique faction; users can enrol and benefit from resources provided by 
                  any district they desire to domicile in.
                </p>
              </SinCard>
            </div>
            <div className='col-lg-6 col-md-12' data-aos='fade-up' data-aos-delay='300'>
              <SinCard className='info-card' dark>
                <SinCard className='game-info-img'>
                  <img src={GameInfoKingpin} alt="" />
                </SinCard>

                <div className='relative py-3'>
                  <SeparationLine></SeparationLine>
                </div>

                <h6 className='increased'>BECOME THE KINGPIN</h6>
                <p className='reduced'>
                  Now that you have all the tools and connections that is necessary for your survival in Sinverse, what next? 
                  Rise to the occasion and move through the ranks to become the ultimate kingpin. There is no bigger glory in 
                  the City than becoming the commander of the underworld. There are perks that comes with attaining this lofty 
                  position but to get to this point, you probably are a heartless and ruthless warrior. Be vigilant and ensure 
                  you are not dethroned!
                </p>
              </SinCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
