import React, { useState } from 'react';
import { roadmapClipart } from '../../../../../assets/images/new';
import SeparationLine from '../../../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../../../components/base-components/topic-holder/topic-holder';
import CardSwiper from '../../../../../components/block-components/card-carousel/card-carousel';
import { Carousel } from '../../../../../components/block-components/carousel';
import { roadmapInfo } from './roadmap-info';
import './roadmap.scss';

function Roadmap() {

  const [activeInfo, setActiveInfo] = useState(roadmapInfo[0]);

  const activateType = (index: number) => {
    setActiveInfo(roadmapInfo[index]);
  }
  const moveHorizontal = (toRight?: boolean) => {
    const typeCase = document.getElementById('roadmap-case');
    console.log({typeCase: typeCase?.scrollLeft});
    if(toRight) {
      typeCase?.scrollTo({
        left: typeCase?.scrollLeft + 200,
        behavior: 'smooth'
      });
    } else {
      typeCase?.scrollTo({
        left: typeCase?.scrollLeft - 200,
        behavior: 'smooth'
      });
    }
    
  }

  const imageSlide = roadmapInfo.map((item, index) => {
    return <div className='road-map-slide' key={index}>
    <SeparationLine stickBottom/>
      <h6 className='text-center mb-0'>{item.name}</h6>
      <div className='image-container'>
        <SeparationLine></SeparationLine>
        <img src={item.image} alt="" />
        <SeparationLine></SeparationLine>
      </div>
      <div className=''>
        <p className=''>
          {item.info}
        </p>
      </div>
    </div>
  })

  return (
    <div className='roadmap'>
      <div className='gradient-bg'></div>
      <h2 className='text-center pt-3 relative'>Road Map</h2>
      <div className='row'>
        <div className='col-md-6 center-info md-close'>
          <div className='rm-img'>
            <img src={roadmapClipart} alt="" />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='road-map-slide-holder py-4'>
            <CardSwiper slides={imageSlide}/>
          </div>
        </div>
      </div>
      <SeparationLine stickBottom></SeparationLine>
    </div>
  );
}

export default Roadmap;
