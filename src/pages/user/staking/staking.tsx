import React, { useEffect, useState } from 'react';
import { stakingList1, stakingList2 } from './staking-data';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { SnakeLine, SleakRoundedCube, VulcanButton, SleakHalfCurveSquare, SleakCircle } from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import SinCard from '../../../components/base-components/sin-card/sin-card';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';
import './staking.scss';
import AppModal from '../../../components/block-components/app-modal/app-modal';
import SinButton from '../../../components/base-components/sin-button/sin-button';
import { socialLinks } from '../../../config/environment';

function Staking(props: any) {

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <div className='staking'>
      <div className='bg-cover pb-5'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='header-spacer'></div>
        <div className='radial-cover'></div>
        <TopicHolder max={1250} className='w96 my-5 relative'>Staking</TopicHolder>
        <div className='py-3 w96 max1300'>
          <div className='row'>
            <div className='col-xl-9 py-4 px-0'>
              <div className='w96 list-sect'>
                <div className='row mx-0'>
                  {stakingList1.map((pool, index) => {
                    return <div className='col-lg-4 col-md-6 px-1' key={index} data-aos='fade-up' data-aos-delay={200 * index}>
                      <SinCard className='list-card'>
                        <div className='staking-img'>
                          <img src={SleakCircle} alt="" />
                          <div className='image-float'>
                            <img src={pool.image} alt="" />
                          </div>
                        </div>
                        <h6 className=''>{pool.name}</h6>
                        <SeparationLine></SeparationLine>
                        <div className='spread-info staking-info mt-3'>
                          <span className='tag'>Apy:</span>
                          <span className='answer'>{pool.apy}</span>
                        </div>
                        <div className='spread-info staking-info'>
                          <span className='tag'>Staking Cap:</span>
                          <span className='answer'>{pool.stakingCap}</span>
                        </div>
                        <div className='spread-info staking-info'>
                          <span className='tag'>Lock:</span>
                          <span className='answer'>{pool.lock}</span>
                        </div>
                        <div className='spread-info staking-info pb-2'>
                          <span className='tag'>End Date:</span>
                          <span className='answer'>{pool.endDate}</span>
                        </div>
                        <div className='guide-link'>
                          <a href={pool.guideLink} target={'_blank'}>
                            <span className='link-text'>View Guide</span>
                            <span className='under-line'></span>
                          </a>
                        </div>
                        <SinButton tint='blue' size='slim' action={() => goToLink(pool.stakingLink)}>Start Staking</SinButton>
                      </SinCard>
                    </div>
                  })}
                </div>
              </div>
              <div className='w96 list-sect mt-4'>
                <div className='row mx-0'>
                  {stakingList2.map((pool, index) => {
                    return <div className='col-md-6 px-1' key={index} data-aos='fade-up' data-aos-delay={200 * index}>
                      <SinCard className='list-card list-card2'>
                        <div className='staking-img'>
                          <img src={SleakCircle} alt="" />
                          <div className='image-float'>
                            <img src={pool.image} alt="" />
                          </div>
                        </div>
                        <h6 className=''>{pool.name}</h6>
                        <SeparationLine></SeparationLine>
                        <div className='spread-info staking-info mt-3'>
                          <span className='tag'>Apy:</span>
                          <span className='answer'>{pool.apy}</span>
                        </div>
                        <div className='spread-info staking-info'>
                          <span className='tag'>Rewards:</span>
                          <span className='answer'>{pool.rewards}</span>
                        </div>
                        <div className='spread-info staking-info'>
                          <span className='tag'>Pool Days:</span>
                          <span className='answer'>{pool.poolDays}</span>
                        </div>
                        <div className='spread-info staking-info pb-2'>
                          <span className='tag'>End Date:</span>
                          <span className='answer'>{pool.endDate}</span>
                        </div>
                        <div className='spread-info staking-info pb-2'>
                          <span className='tag'>Min/Max:</span>
                          <span className='answer'>{pool.minMax}</span>
                        </div>
                        {
                          pool.full ? <p className='text-center reduced mb-2'>(Staking pool is full)</p> : <p>.</p>
                        }
                        <SinButton tint='blue' size='slim' disabled={pool.full} action={() => goToLink(pool.stakingLink)}>Start Staking</SinButton>
                      </SinCard>
                    </div>
                  })}
                </div>
              </div>
            </div>
            <div className='col-xl-3 py-4 px-0' data-aos='zoom-out'>
              <SinCard className='stake-info-card'>
                <div className='p-3 pt-4'>
                  <p className='font-weight-bold mb-1'>Why Stake</p>
                  <p className='reduced mb-4'>
                    Staking provides a way for token holders to earn passive income by simply holding their tokens. Stakers are 
                    rewarded with new tokens or transaction fees for their participation in the network. The longer the staking 
                    period, the higher the potential rewards, but also the higher the risk of losing the locked tokens if the 
                    staker does not follow the rules.
                  </p>
                  <p className='font-weight-bold mb-1'>Sinverse DAO</p>
                  <p className='reduced mb-4'>
                    Staking also helps to reduce the circulating supply of SIN tokens, which can have a positive impact on the 
                    token's value and price stability. Overall, Sinverse staking is an important tool for users looking to earn 
                    rewards and participate in the governance of the Sinverse DAO.
                  </p>
                  <div className="icon-sect pt-4 pb-3">
                    <div className="spread-info mt-3 media-icons footer-topic-height">
                        <a href={socialLinks.telegram} target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane increased-x"></i></a>
                        <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="mx-2"><i className="fab fa-twitter increased-x"></i></a>
                        <a href={socialLinks.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram increased-x"></i></a>
                        <a href={socialLinks.medium} target="_blank" rel="noreferrer" className="mx-2"><i className="fab fa-medium increased-x"></i></a>
                        <a href={socialLinks.discord} target="_blank" rel="noreferrer"><i className="fab fa-discord increased-x"></i></a>
                    </div>
                  </div>
                </div>
              </SinCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staking;