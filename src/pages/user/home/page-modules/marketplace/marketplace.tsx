import React, { useState } from 'react';
import { DownloadIntro, constructionSignPost } from '../../../../../assets/images/new';
import SeparationLine from '../../../../../components/base-components/separation-line/separation-line';
import SinButton from '../../../../../components/base-components/sin-button/sin-button';
import SinCard from '../../../../../components/base-components/sin-card/sin-card';
import AppModal from '../../../../../components/block-components/app-modal/app-modal';
import './marketplace.scss';

function MarketPlace() {
  const [tonstructionNoticeModalVisible, setConstructionNoticeModalVisible] = useState(false);

  const veiwConstructionNotice = () => {
    setConstructionNoticeModalVisible(true);
  }
  const closeConstructionNotice = () => {
    setConstructionNoticeModalVisible(false);
  }

  return (
    <div className='market-place py-5 relative'>
      <SeparationLine stickBottom></SeparationLine>
      <div className='w96 max1200 py-4'>
        <div className='row'>
          <div className='col-md-6 center-info' data-aos='zoom-in' data-aos-delay='500'>
            <div className='w70 max350 imh py-3'>
              <img src={DownloadIntro} alt="" />
            </div>
          </div>
          <div className='col-md-6 center-info' data-aos='fade-left'>
            <div className='case-content w96 py-3'>
              <p className='increased-soft'>
                The SinVerse marketplace will enable you to trade various in-game assets, including land and business licenses. 
              </p>
              <p className='increased-soft'>
                Please note that the official marketplace is currently under construction. 
              </p>
              <p className='increased-soft mb-3'>
                If you wish to view land that you have purchased in previous land sales, please 
                visit <a href='https://land.sinverse.com/' className='link' target={'_blank'}>https://land.sinverse.com</a>
              </p>
              <SinButton action={veiwConstructionNotice}>Trade your Assets</SinButton>
            </div>
          </div>
        </div>
      </div>
      {
        tonstructionNoticeModalVisible &&
        <AppModal styleClass='under-construction-popup' onCloseModal={closeConstructionNotice}>
          <SinCard className='team-card' dark>
            <div className='py-2 text-center'>
              <div className='w70 max200 imh mb-4'>
                <img src={constructionSignPost} alt="" />
              </div>
              <h5></h5>
              <p>Please note that the official marketplace is currently under construction</p>
            </div>
          </SinCard>
        </AppModal>
      }
    </div>
  );
}

export default MarketPlace;
