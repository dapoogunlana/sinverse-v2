import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import HalfBanner from '../../../components/block-components/half-banner/half-banner';
import { IindustryNews } from '../../../services/constants/interfaces/data-schemas';
import { convertStringForUrl, filterUnsecureHTML, formatDate } from '../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../services/utils/request';
import { Helmet } from 'react-helmet';
import './district-reveal.scss';
import { toast } from 'react-toastify';
import { CalenderIconWhite, GameInfoMetaverse } from '../../../assets/images/new';
import SinButton from '../../../components/base-components/sin-button/sin-button';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import SinCard from '../../../components/base-components/sin-card/sin-card';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import { districtList } from './district-reveal-data';

function DistrictReveal(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <div className='district-reveal'>
      <div className='district-gradient'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w96 max1200 py-5'>
          <div className='header-spacer'></div>
          <TopicHolder>District Reveal</TopicHolder>
          <div className='intro-writeup' data-aos='zoom-out'data-aos-delay='500'>
            <p className='mb-0'>
              Each district within the SinVerse has its unique set of customs, principles, influential figures, and a prominent 
              economic focus. The corresponding webpage on the SinVerse site provides insight into the distinct characteristics of 
              each district. If you're contemplating which area of the metaverse would be the ideal fit for your ambition to 
              become the ultimate Kingpin, this is where you can gain knowledge to make a well-informed and advantageous decision.
            </p>
          </div>
          <div className='w96 max1100 '>
            <div className='row py-5'>
              {
                districtList.map((district, index) => (
                  <div className='col-lg-6 col-md-12 py-4' key={index} data-aos='fade-up' data-aos-delay={index % 2 ? 300 : 0}>
                    <SinCard className='district-card' dark>
                      <SinCard className='game-info-img'>
                        <div className='vid-holder'>
                          <div className="stream-vid">
                              <iframe 
                                width="100%" height="100%" title="vid-modal" 
                                src={`https://www.youtube.com/embed/${district.videoLink}?rel=0`} 
                                frameBorder="0" allowFullScreen 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              ></iframe>
                          </div>
                        </div>
                      </SinCard>

                      <div className='relative py-3'>
                        <SeparationLine></SeparationLine>
                      </div>

                      <h6 className='increased'>{district.name}</h6>
                      <p className='reduced info'>{district.breif}</p>
                    </SinCard>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistrictReveal;
