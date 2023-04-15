import React, { useEffect, useState } from 'react';
import { tokenFaqData } from './token-data';
import './token.scss';
import { Tokenomics } from '../../../assets/files';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { SinToken, HeroDownloadWhitepaper, CardStretchBg, TokenWhereToBuy } from '../../../assets/images/new';

function Token(props: any) {

  const [reactiveFaqs, setReactiveFaqs] = useState(tokenFaqData);

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
    <div className='token'>
      <div className='banner'>
        <div className='header-spacer'></div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w90 max1250 py-2'>
        <TopicHolder max={1250} className='w96 my-5 relative'>Sinverse Token</TopicHolder>

          <div className='top-card'>
            <div className='row'>
              <div className='col-md-6 center-info-front'>
                <div className='img-sect py-4' data-aos='zoom-out'>
                  <img src={SinToken} className='' alt="" />
                </div>
              </div>
              <div className='col-md-6 center-info'>
                <div className='w90 center-mobile text-sect'>
                  <p>
                    SIN token is the native utility token of the Sinverse Metaverse, which can be used to buy and sell virtual 
                    assets and services within the game. SIN token is an BEP-20 standard token built on the Ethereum blockchain, 
                    which makes it compatible with a wide range of wallets and exchanges. SIN tokens are used to pay for land 
                    purchases, transaction fees, in-game purchases, and to reward players who participate in mini-games or 
                    complete tasks within the game. As Sinverse continues to expand and attract more players, the demand for SIN 
                    tokens is expected to increase, creating potential opportunities for token holders to profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className='pt-5 text-center'>Token Details</h2>
          <div className='stats-sect' data-aos='zoom-out'>
            <div>
              <h6>1,000,000,000</h6>
              <p>Total SIN Supply</p>
            </div>
            <span></span>
            <div>
              <h6>0.00</h6>
              <p>SIN Price</p>
            </div>
            <span></span>
            <div>
              <h6>0.00</h6>
              <p>Circulating Supply</p>
            </div>
            <span></span>
            <div>
              <h6>0.00</h6>
              <p>24hrs Volume</p>
            </div>
            <span></span>
            <div>
              <h6>0.00</h6>
              <p>Total Burns</p>
            </div>
          </div>
        </div>
      </div>
      <div className='where-to'>
        <div className='w90 max1100' data-aos="fade-up">
          <h3 className='text-center'>Where to Buy SIN Tokens</h3>
          <div className='row'>
            <div className='col-md-6 center-info'>
              <div className='w90 center-mobile text-holder'>
                <div className='case-bg'>
                  <img src={CardStretchBg} alt="" />
                </div>
                <p className=''>
                  SIN token can be purchased on several popular cryptocurrency exchanges. These include Kucoin, Gate.io, 
                  MEXC and Pancakeswap. To buy SIN tokens, you'll need to first create an account on one of these exchanges 
                  and then deposit funds into your account. Once you have funds in your account, you can use them to purchase 
                  SIN tokens at the current market price. It's important to note that the availability and pricing of SIN 
                  tokens may vary depending on the exchange you choose to use. It's always a good idea to do your own research 
                  and compare prices across different exchanges before making a purchase.
                </p>
              </div>
            </div>
            <div className='col-md-6 center-info'>
              <div className='imh w90 max350 py-4' data-aos='zoom-out'>
                <img src={TokenWhereToBuy} className='' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='token-download'>
        <div className=' py-5 token-download-bg'>
          <SeparationLine stickTop></SeparationLine>
          <SeparationLine stickBottom></SeparationLine>
          <h3 className='text-center py-4'>Sinverse Tokenomics</h3>
          <div className='download py-4 text-center' data-aos='zoom-out'>
            <img src={HeroDownloadWhitepaper} className='clickable hover-zoom' alt="" onClick={openTokenomics} />
            <p onClick={openTokenomics} className='clickable'>Download Tokenomics</p>
          </div>
        </div>
      </div>

      <div className='rewards'>
        <div className='bg-cover'>
          <div className='w90 max1100' data-aos="fade-up">
          <h4 className='text-center pb-3'>Loyalty Reward</h4>
            <div className='row'>
              <div className='col-md-6 my-3'>
                <div className='w90 center-mobile text-holder' data-aos="fade-right">
                  <div className='case-bg'><img src={CardStretchBg} alt="" /></div>
                  <p className='mb-0'>
                    Players of Sinverse games can earn SIN tokens in a variety of ways. The most straightforward way is by 
                    participating in the games themselves. Each game has a unique set of rules and objectives, but players can 
                    earn SIN tokens as they progress through the levels, complete challenges, and achieve certain milestones. 
                    The amount of SIN tokens earned will vary depending on the difficulty of the game and the level of skill 
                    required to complete it.
                  </p>
                </div>
              </div>
              <div className='col-md-6'></div>
              <div className='col-md-6'></div>
              <div className='col-md-6 my-3'>
                <div className='w90 center-mobile text-holder' data-aos="fade-left">
                  <div className='case-bg'><img src={CardStretchBg} alt="" /></div>
                  <p className='mb-0'>
                    Additionally, Sinverse offers a referral program that rewards players for inviting friends to join the 
                    platform. Players can share their referral links with friends, and when those friends sign up and start 
                    playing games on the platform, the original player will earn a percentage of the SIN tokens that their 
                    friend earns.
                  </p>
                </div>
              </div>
              <div className='col-md-6 my-3'>
                <div className='w90 center-mobile text-holder' data-aos="fade-right">
                  <div className='case-bg'><img src={CardStretchBg} alt="" /></div>
                  <p className='mb-0'>
                    Finally, Sinverse may offer occasional airdrops, where players can receive free SIN tokens simply by 
                    holding a certain amount of tokens in their wallets. These airdrops may be announced on the platform's 
                    website or social media channels, so players should keep an eye out for any updates. Overall, there are 
                    multiple ways for players to earn SIN tokens while playing games on the Sinverse platform, making it an 
                    attractive option for gamers and cryptocurrency enthusiasts alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='faq-sect py-5'>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w90 max1000' data-aos="fade-up">
          <h4 className='text-center pt-5 pb-3'>Frequently Asked Questions</h4>
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

export default Token;
