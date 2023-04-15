import React, { useEffect, useState } from 'react';
import { exchangeList } from './exchange-data';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { SnakeLine, SleakRoundedCube, VulcanButton, SleakHalfCurveSquare } from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import SinCard from '../../../components/base-components/sin-card/sin-card';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';
import './exchange.scss';
import AppModal from '../../../components/block-components/app-modal/app-modal';
import SinButton from '../../../components/base-components/sin-button/sin-button';

function Exchange(props: any) {

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <div className='exchange'>
      <div className='bg-cover pb-5'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='header-spacer'></div>
        <div className='radial-cover'></div>
        <TopicHolder max={1250} className='w96 mt-5 mb-4 relative'>Exchange</TopicHolder>
        <div className='py-5 w96'>
        <div className='w96 max1200 list-sect mb-5' data-aos='zoom-in'>
          <p className='text-center relative reduced-web mb-0'>
            To buy SIN tokens, you can use both centralized and decentralized exchanges. Centralized exchanges are traditional 
            platforms where a third party facilitates transactions between buyers and sellers. Below, you will find a list of 
            exchanges where SIN is currently trading on actively. On the other hand, decentralized exchanges allow for 
            peer-to-peer transactions without the need for intermediaries.
          </p>
        </div>
          <div className='w96 max1200 list-sect' data-aos='zoom-in' data-aos-delay='300'>
            <div className='row mx-0'>
              {exchangeList.map((exchange, index) => {
                return <div className='col-lg-3 col-md-6 px-1' key={index} data-aos='fade-up' data-aos-delay={(200 * index) + 700}>
                  <SinCard className='list-card'>
                    <div className='exchange-img'>
                      <img src={SleakHalfCurveSquare} alt="" />
                      <div className='image-float'>
                        <img src={exchange.image} alt="" />
                      </div>
                    </div>
                    <h6 className=' increased'>{exchange.name}</h6>
                    <SinButton tint='blue' size='slim' action={() => goToLink(exchange.link)}>Buy Now</SinButton>
                  </SinCard>
                </div>
              })}
            </div>
          </div>
        <div className='w96 max1200 list-sect mt-5' data-aos='zoom-in' data-aos-delay='600'>
          <p className='text-center relative reduced-web mb-0'>
            Before you can buy SIN tokens, you'll need to create an account on the exchange of your choice and complete the 
            necessary verification process. Once you have verified your account, you can deposit funds into your account using 
            supported cryptocurrencies such as USDT & BNB. From there, you can place a buy order for SIN tokens and wait for 
            your transaction to be processed.
            <br/><br/>
            It's important to note that different exchanges may have varying fees, transaction limits, and deposit/withdrawal 
            options. Be sure to do your research and compare different exchanges to find the best one that suits your needs. 
            Additionally, always practice good security measures such as enabling two-factor authentication and keeping your 
            private keys safe. Also note that this content is for information purposes only, this is not a call to buy or 
            trade SIN.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
