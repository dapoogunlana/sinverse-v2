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
        <TopicHolder max={1250} className='w96 my-5 relative'>Exchange</TopicHolder>
        <div className='py-5 w96'>
          <div className='w96 max1200 list-sect'>
            <div className='row mx-0'>
              {exchangeList.map((exchange, index) => {
                return <div className='col-lg-3 col-md-6 px-1' key={index} data-aos='fade-up' data-aos-delay={200 * index}>
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
        </div>
      </div>
    </div>
  );
}

export default Exchange;
