import React, { useEffect, useState } from 'react';
import { documentList } from './documents-data';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { SnakeLine, SleakRoundedCube, VulcanButton, SleakHalfCurveSquare } from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import SinCard from '../../../components/base-components/sin-card/sin-card';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';
import './documents.scss';
import AppModal from '../../../components/block-components/app-modal/app-modal';
import SinButton from '../../../components/base-components/sin-button/sin-button';

function Documents(props: any) {

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <div className='documents'>
      <div className='bg-cover pb-5'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='header-spacer'></div>
        <div className='radial-cover'></div>
        <TopicHolder max={1250} className='w96 my-5 relative'>Documents</TopicHolder>
        <div className='py-5 w96'>
          <div className='w96 max900 list-sect'>
            <div className='row mx-0'>
              {documentList.map((document, index) => {
                return <div className='col-lg-4 col-md-6 px-1' key={index} data-aos='fade-up' data-aos-delay={200 * index}>
                  <SinCard className='list-card'>
                    <div className='document-img'>
                      <img src={SleakHalfCurveSquare} alt="" />
                      <div className='image-float'>
                        <img src={document.image} alt="" />
                      </div>
                    </div>
                    <h6 className=' increased'>{document.name}</h6>
                    <p className='reduced-soft'>{document.overview}</p>
                    <SinButton tint='blue' disabled={!document.downloadable} size='slim' action={() => goToLink(document.link)}>{document.downloadable ? 'Download Now' : 'Coming Soon'}</SinButton>
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

export default Documents;
