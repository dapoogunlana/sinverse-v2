import React, { Fragment, useEffect, useState } from 'react';
import { downloadList } from './downloads-data';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { SleakHalfCurveSquare, DownloadBulldog } from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import SinCard from '../../../components/base-components/sin-card/sin-card';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';
import './downloads.scss';
import AppModal from '../../../components/block-components/app-modal/app-modal';
import SinButton from '../../../components/base-components/sin-button/sin-button';

function Downloads(props: any) {

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <div className='downloads'>
      <div className='top-sect'>
        <div className='bg-lay pb-5'>
          <SeparationLine stickBottom></SeparationLine>
          <div className='header-spacer'></div>
          <TopicHolder max={1250} className='w96 mt-5 mb-4 relative'>Downloads</TopicHolder>
          <div className='intro-sect w90 max1100'>
            <div className='txt-case'>
              <h6 className='increased'>Download latest sinverse updates </h6>
              <p className='reduced-soft'>
                Explore the world of SinVerse and earn your status as the ultimate Kingpin. Download patches, upgrades and 
                updates here. You can also find patches that will improve the performance of the SinVerse game on your machine. 
                The patches and updates are official upgrades created by game developers that eliminate bugs and introduce new 
                gameplay features. For best experience, ensure you download the current version.
              </p>
            </div>
            <div className='im-case'>
              <img src={DownloadBulldog} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='other-sect py-5'>
        <div className='radial-cover'></div>
        {downloadList.map((download, index) => {
          return <div className='w96 max1200 list-sect' key={index} data-aos='fade-up' data-aos-delay={200 * index}>
            <div className={'mx-0 download-card' + (index % 2 ? '' : ' reverse-flex')}>
              <div className='img-sect'>
                <SinCard className='download-img-card'>
                  <div className='imh'>
                    <img src={download.image} alt="" />
                  </div>
                </SinCard>
              </div>
              <div className='text-sect'>
                <div className='pt-2'>
                  <h6 className='increased'>{download.version}</h6>
                  <p className='increases-soft italic mb-1'>Release Notes -</p>
                  {
                    download.section?.map((sect: any, sectIndex) => (
                      <Fragment key={sectIndex}>
                        {
                          sect.label && <p className='mb-0 mt-2'>- {sect.label}</p>
                        } 
                        {
                          sect.points.map((point: any, pointIndex: number) => (
                            <Fragment key={pointIndex}>
                              {point.note && <p className='mb-0 reduced-soft'>{pointIndex + 1}, {point.note}</p>}
                              {
                                point.subPoints.map((sub: any, subIndex: number) => (
                                  <p className='mb-0 reduced-soft' key={subIndex}>{sub}</p>
                                ))
                              }
                              {point.disclaimer && <p className='mb-1 reduced-soft'>{point.disclaimer}</p>}
                            </Fragment>
                          ))
                        }
                      </Fragment>
                    ))
                  }
                  <SinButton tint='blue' className='mt-3' action={() => goToLink(download.link)}>
                    Download Now
                  </SinButton>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default Downloads;
