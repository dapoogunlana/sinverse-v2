
import React, { useState } from 'react';
import SinButton from '../../../../../components/base-components/sin-button/sin-button';
import { clipToLength } from '../../../../../services/utils/data-manipulation-utilits';
import AppModal from '../../../../../components/block-components/app-modal/app-modal';
import { features } from './features-info';
import './features.scss';
import SeparationLine from '../../../../../components/base-components/separation-line/separation-line';

function Features() {

  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [featureModalVisible, setFeatureModalVisible] = useState(false);

  const veiwFeature = (index: number) => {
    setActiveFeature(features[index]);
    setFeatureModalVisible(true);
  }
  const closeFeature = () => {
    setFeatureModalVisible(false);
  }
  return (
    <div className='features'>
      <SeparationLine stickTop></SeparationLine>
      <div className='w96 max1200'>
       <h2 className='text-center'>Features of Sinverse</h2>
       <div className='w96 max1100 row'>
         {
           features.map((feature, index) => (
            <div className={'col-lg-4 py-2 ' + (index === 2 ? 'col-md-12' : 'col-md-6')} key={index}>
            <div className='feature'>
              <div className='imh pb-3'>
                <img src={feature.image} alt="" />
              </div>
              <h6>{feature.name}</h6>
              <p>{clipToLength(feature.info, 210)}</p>
              <span onClick={() => veiwFeature(index)}>Read More</span>
            </div>
          </div>
           ))
         }
       </div>
      </div>
      {
        featureModalVisible &&
        <AppModal styleClass='silent' onCloseModal={closeFeature}>
        <div className='feature-popup'>
          <div className='imh pb-3 w96 max350'>
            <img src={activeFeature.image} className='rad-10' alt="" />
          </div>
          <h6>{activeFeature.name}</h6>
          <p>{activeFeature.info}</p>
        </div>
      </AppModal>
      }
    </div>
  );
}

export default Features;
