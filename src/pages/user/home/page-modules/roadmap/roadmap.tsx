import React, { useState } from 'react';
import SeparationLine from '../../../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../../../components/base-components/topic-holder/topic-holder';
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

  return (
    <div className='roadmap'>
      <div className='gradient-bg'></div>
      <h2 className='text-center pt-3 relative'>Road Map</h2>
      <div className='type-holder'>
        <div className='type-case' id="roadmap-case">
          <div className='types'>
            {
              roadmapInfo.map((type, index) => (
                <div key={index} className={'type' + (type.name === activeInfo.name ? ' active-type': '')} onClick={() => activateType(index)}>
                  <img src={type.image} alt="" />
                  <p className='reduced-soft text-center'>{type.name}</p>
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
  );
}

export default Roadmap;
