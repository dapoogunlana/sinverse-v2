import React, { useState } from 'react';
import SeparationLine from '../../../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../../../components/base-components/topic-holder/topic-holder';
import { Carousel } from '../../../../../components/block-components/carousel';
import { landTypesInfo } from './land-types-info';
import './land-types.scss';

function LandTypes() {

  const [activeInfo, setActiveInfo] = useState(landTypesInfo[0]);

  const activateType = (index: number) => {
    setActiveInfo(landTypesInfo[index]);
  }
  const moveHorizontal = (toRight?: boolean) => {
    const typeCase = document.getElementById('type-case');
    if(toRight) {
      typeCase?.scrollTo({
        left: typeCase?.scrollLeft + 100,
        behavior: 'smooth'
      });
    } else {
      typeCase?.scrollTo({
        left: typeCase?.scrollLeft - 100,
        behavior: 'smooth'
      });
    }
    
  }
  
  const previewCount = (slideLength: number) => {
    const width = window.innerWidth;
    if(width > 1300) {
      return 5 <= slideLength ? 5 : slideLength;
    } else if(width > 1050) {
      return 4 <= slideLength ? 4 : slideLength;
    } else if(width > 79) {
      return 3 <= slideLength ? 3 : slideLength;
    } else {
      return 2;
    }
  }

  const itemSlide = landTypesInfo.map((type, index) => (
    <div key={index} className={'type' + (type.name === activeInfo.name ? ' active-type': '')} onClick={() => activateType(index)}>
      <img src={type.image} alt="" />
      <p className='reduced-soft text-center'>{type.name}</p>
    </div>
  ));

  return (
    <div className='land-types'>
      <h2 className='text-center pt-3'>Land and Business Licenses</h2>
      <div className='active-sect'>
        <div className="active-image">
            <img src={activeInfo.image} alt="" />
        </div>
        <span></span>
        <div className='active-info'>
          <h2 className='text-center pt-3 relative'>{activeInfo.name}</h2>
            <p className='' dangerouslySetInnerHTML={{__html: activeInfo.info}}></p>
        </div>
      </div>
      <div className='type-holder'>
        <div className='type-case' id="type-case">
          {
            window.innerWidth > 1300 ?
            <div className='types'>
              {
                landTypesInfo.map((type, index) => (
                  <div key={index} className={'type' + (type.name === activeInfo.name ? ' active-type': '')} onClick={() => activateType(index)}>
                    <img src={type.image} alt="" />
                    <p className='reduced-soft text-center'>{type.name}</p>
                  </div>
                ))
              }

            </div> :
            <div className='market-items-sect'>
              <div className='w96 max1200 py-4'>
                  <Carousel
                    loop
                    autoPlay
                    delay={6000}
                    freeMode
                    slidesPerView={previewCount(itemSlide.length)}
                    spaceBetween={0}
                    data={itemSlide}
                  />
              </div>
            </div>
          }
        </div>
        <div className='actions'>
          <div className='right' onClick={() => moveHorizontal()}>
            <i className="fa-solid fa-caret-left"></i>
          </div>
          <div className='left' onClick={() => moveHorizontal(true)}>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>
      <SeparationLine stickBottom></SeparationLine>
    </div>
  );
}

export default LandTypes;
