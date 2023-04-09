import React, {  } from 'react';
import { roadmapInfo } from '../roadmap/roadmap-info';
import { partnerList } from './partners-info';
import './partners.scss';

function Partners() {

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
      <div className='partner-slide-holder'>
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
      </div>
    </div>
  );
}

export default Partners;
