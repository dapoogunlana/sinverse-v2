import React, { useState } from 'react';
import { GameplayOverlay } from '../../../../../assets/images/new';
import SeparationLine from '../../../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../../../components/base-components/topic-holder/topic-holder';
import { gamePlayInfo } from './game-play-info';
import './game-play.scss';

function GamePlay() {

  const [activeInfo, setActiveInfo] = useState(gamePlayInfo[0]);

  const activateMode = (index: number) => {
    setActiveInfo(gamePlayInfo[index]);
  }
  const moveHorizontal = (toRight?: boolean) => {
    const modeCase = document.getElementById('mode-case');
    if(toRight) {
      modeCase?.scrollTo({
        left: modeCase?.scrollLeft + 100,
        behavior: 'smooth'
      });
    } else {
      modeCase?.scrollTo({
        left: modeCase?.scrollLeft - 100,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className='game-play-case'>
      <div className="underband">
          <video muted={true} playsInline={true} autoPlay={true} src={activeInfo.video} loop id="myVideo">
              Your browser does not support HTML5 video.
          </video>
      </div>
      <div className='overlay'>
        <img src={GameplayOverlay} alt="" />
      </div>
      <div className='game-play'>
        <SeparationLine stickTop></SeparationLine>
        <TopicHolder max={1200} className='w96 mb-5'>General Game Play</TopicHolder>
        <div className='info'>
          <div className='info-head mb-4'>
            <SeparationLine stickTop></SeparationLine>
              <h5 className='text-center font-weight-bold mb-0'>{activeInfo.name?.toLocaleUpperCase()}</h5>
            <SeparationLine stickBottom></SeparationLine>
          </div>
          <div className='info-body'>
              <p className='text-center mb-0'>{activeInfo.info}</p>
            <SeparationLine stickBottom></SeparationLine>
          </div>
        </div>
        <div className='mode-holder'>
          <div className='mode-case' id="mode-case">
            <div className='modes'>
              {
                gamePlayInfo.map((mode, index) => (
                  <div key={index} className={'mode' + (mode.name === activeInfo.name ? ' active-mode': '')} onClick={() => activateMode(index)}>
                    <img src={mode.image} alt="" />
                    <p className='reduced-soft text-center'>{mode.name}</p>
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
        <SeparationLine stickBottom></SeparationLine>
      </div>
    </div>
  );
}

export default GamePlay;
