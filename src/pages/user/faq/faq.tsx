import React, { useEffect, useState } from 'react';
import { faqData } from './faq-data';
import './faq.scss';
import { Tokenomics } from '../../../assets/files';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';

function Faq(props: any) {

  const [reactiveFaqs, setReactiveFaqs] = useState(faqData);

  const openQuestion = (index: number) => {
    const newFaqs = [...reactiveFaqs];
    newFaqs[index].active = !newFaqs[index].active;
    setReactiveFaqs(newFaqs);
  }

  const openTokenomics = () => {
    window.open(Tokenomics);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <div className='faq'>
      <div className='sub-space pb-5'>
        <div className='header-spacer'></div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w90 max1250 py-2'>
        <TopicHolder max={1250} className='w96 my-5 relative'>Frequently Asked Questions</TopicHolder>

        </div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w90 max1000' data-aos="fade-up">
          {reactiveFaqs.map((item, index) => {
            return <div className="question-space py-3 my-3" key={index} onClick={() => openQuestion(index)}>
              <div className={'spread-info py-2 ' + (item.active ? 'active-question' : 'question')}>
                <h6 className="increased-soft mb-0">{item.question}</h6>
                {/* <div className={'view-icon' + (item.active ? ' full-view' : '')}>
                  <img src={DropdownArrow} alt="" />
                </div> */}
                <i className={'fa-sharp fa-solid fa-chevron-down increased ' + (item.active ? 'rotated' : '')}></i>
                {/* {
                  item.active ? 
                  <i className={"fa-solid fa-minus increased full " + (item.active ? 'full-view' : '')}></i> :
                  <i className={"fa-solid fa-plus increased full " + (item.active ? 'full-view' : '')}></i>
                } */}
              </div>
              <div className={"answer" + (item.active ? ' full' : '')}>
                <p className="reduced-soft mb-0">{item.answer}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
