import React, { useState } from 'react';
import SeparationLine from '../../../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../../../components/base-components/topic-holder/topic-holder';
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

  return (
    <div className='land-types'>
      <h2 className='text-center pt-3'>Land and Business Licences</h2>
      <div className='type-holder'>
        <div className='type-case' id="type-case">
          <div className='types'>
            {
              landTypesInfo.map((type, index) => (
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
      <div className="active-image">
          <img src={activeInfo.image} alt="" />
      </div>
      <div className='active-info'>
        <h6>{activeInfo.name}</h6>
          <p className='' dangerouslySetInnerHTML={{__html: activeInfo.info}}></p>
      </div>
      <SeparationLine stickBottom></SeparationLine>
    </div>
  );
}

export default LandTypes;
