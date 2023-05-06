import React, { useState } from 'react';
import { Carousel } from '../../../../../components/block-components/carousel';
import { partnerList } from './partners-info';
import './partners.scss';

function Partners() {

  
  const previewCount = (slideLength: number) => {
    const width = window.innerWidth;
    if(width > 991) {
      return 3 <= slideLength ? 3 : slideLength;
    } else if(width > 767) {
      return 2 <= slideLength ? 2 : slideLength;
    } else {
      return 1;
    }
  }

  const moveHorizontal = (toRight?: boolean) => {
    const partnerCase = document.getElementById('partner-case');
    if(toRight) {
      partnerCase?.scrollTo({
        left: partnerCase?.scrollLeft + 320,
        behavior: 'smooth'
      });
    } else {
      partnerCase?.scrollTo({
        left: partnerCase?.scrollLeft - 320,
        behavior: 'smooth'
      });
    }
  }

  const imageSlide = partnerList.map((partner, index) => (
    <div key={index}>
      <div className='partner-case' data-aos='zoom-in' data-aos-delay={index * 100}>
        <img src={partner.image} alt="" />
      </div>
    </div>
  ));

  return (
    <div className='partners py-5'>
      <h2 className='text-center'>Partners</h2>
      <div className='partner-list-grid'>
        {
          partnerList.map((partner, index) => (
            <div key={index}>
              <div className='partner-case' data-aos='zoom-in' data-aos-delay={index * 100}>
                <img src={partner.image} alt="" />
              </div>
            </div>
          ))
        }
      </div>
      {/* <div className='partner-slide-holder'>
        <div className='partner-slide-case' id="partner-case">
          <div className='partner-slides'>
            {
              partnerList.map((partner, index) => (
                <div key={index} className='single-slide'>
                  <img src={partner.image} alt="" />
                </div>
              ))
            }
          </div>
        </div>
        <div className='actions'>
          <div className='right' onClick={() => moveHorizontal()}>
            <i className="fa-solid fa-caret-left"></i>
          </div>
          <div className='left' onClick={() => moveHorizontal(true)}>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div> */}
      <div className='partner-auto-slide'>
          <Carousel
            loop
            autoPlay
            delay={6000}
            freeMode
            slidesPerView={2}
            spaceBetween={0}
            data={imageSlide}
            navigation={true}
          />
      </div>
    </div>
  );
}

export default Partners;
