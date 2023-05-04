import React, { useEffect, useState } from 'react';
import { tokenFaqData } from './token-data';
import './token.scss';
import { WhitePaper } from '../../../assets/files';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import {
  SinToken,
  CardStretchBg, 
  TokenWhereToBuyKuCoin,
  TokenWhereToBuyPancakeswap,
  TokenWhereToBuyMXC,
  TokenWhereToBuyGateIo,
  CountIcon1,
  CountIcon2,
  CountIcon3,
  TokenomicsImage,
} from '../../../assets/images/new';
import { sendRequest } from '../../../services/utils/request';
import { apiLinks, externalLinkConstants } from '../../../config/environment';
import { formatNumber } from '../../../services/utils/data-manipulation-utilits';

function Token(props: any) {

  const [reactiveFaqs, setReactiveFaqs] = useState(tokenFaqData);
  const [sinverseStats, setSinverseStats] = useState<any>({});
  const [sinverseStats2, setSinverseStats2] = useState<any>({});

  const openQuestion = (index: number) => {
    const newFaqs = [...reactiveFaqs];
    newFaqs[index].active = !newFaqs[index].active;
    setReactiveFaqs(newFaqs);
  }

  const openTokenomics = () => {
    window.open(WhitePaper);
  }
  useEffect(() => {
    sendRequest({
        url: apiLinks.cryptoCompare,
        external: true
    }, (res: any) => {
      setSinverseStats(res.Data?.SIN || {});
    }, () => {});
    sendRequest({
        url: apiLinks.coinGeco,
        external: true
    }, (res: any) => {
      setSinverseStats2(res || {});
    }, () => {});
    window.scrollTo(0, 0);
  },[props]);
  
  return (
    <div className='token'>
      <div className='banner'>
        <div className='header-spacer'></div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w90 max1250 py-2'>
        <TopicHolder max={1250} className='w96 my-5 relative'>SinVerse Token</TopicHolder>

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
                    SinCity (SIN) token serves as the native utility token of SinVerse, enabling users to buy and sell virtual 
                    assets and services within the game. Built on the BEP-20 standard, SIN token operates on the Binance Smart 
                    Chain, ensuring compatibility with a range of wallets and exchanges. You can use SIN tokens to purchase 
                    virtual land, pay for transaction fees, buy in-game items, and reward players who participate in mini-games 
                    or complete tasks within the game.
                    <br/><br/>
                    In the SinVerse metaverse, a single token model play-and-earn system is implemented, which ensures a 
                    sustainable recycling method through revenue generated on the platform. This system supports a circular 
                    economy, ensuring rewards remain sustainable without harming the ecosystem. This approach provides a fair 
                    and sustainable environment for players to enjoy the game and earn rewards simultaneously.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className='pt-5 text-center'>Token Details</h2>
          <div className='stats-sect' data-aos='zoom-out'>
            <div>
              {/* <h6>1,000,000,000</h6> */}
              <h6>{formatNumber(sinverseStats.TotalCoinsMined)}</h6>
              <p>Total SIN Supply</p>
            </div>
            <span></span>
            <div>
              {/* <h6>0.00</h6> */}
              <h6>${formatNumber(sinverseStats2.market_data?.current_price?.usd, 5)}</h6>
              <p>SIN Price</p>
            </div>
            <span></span>
            <div>
              {/* <h6>0.00</h6> */}
              <h6>{formatNumber(sinverseStats.CirculatingSupply)}</h6>
              <p>Circulating Supply</p>
            </div>
            <span></span>
            <div>
              {/* <h6>0.00</h6> */}
              <h6>${formatNumber(sinverseStats2.market_data?.high_24h?.usd, 5)}</h6>
              <p>24hrs Volume</p>
            </div>
            <span></span>
            <div>
              {/* <h6>0.00</h6> */}
              <h6>{formatNumber(sinverseStats.CirculatingSupply)}</h6>
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
              <div className='w90 max350 buy-token-grid py-4' data-aos='zoom-out'>
                <div className='buy-card card-1'>
                  <a href={externalLinkConstants.kuCoin}>
                    <img src={TokenWhereToBuyKuCoin} className='' alt="" />
                  </a>
                </div>
                <div className='buy-card card-2'>
                  <a href={externalLinkConstants.pancakeswap}>
                    <img src={TokenWhereToBuyPancakeswap} className='' alt="" />
                  </a>
                </div>
                <div className='buy-card card-3'>
                  <a href={externalLinkConstants.mxc}>
                    <img src={TokenWhereToBuyMXC} className='' alt="" />
                  </a>
                </div>
                <div className='buy-card card-4'>
                  <a href={externalLinkConstants.gate_io}>
                    <img src={TokenWhereToBuyGateIo} className='' alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='token-download'>
        <div className=' py-5 token-download-bg'>
          <SeparationLine stickTop></SeparationLine>
          <SeparationLine stickBottom></SeparationLine>
          <h3 className='text-center py-4'>SinVerse Tokenomics</h3>
          <div className='download py-4 text-center' data-aos='zoom-out'>
            <div className='w70 imh'>
              <img src={TokenomicsImage} className='clickable hover-zoom' alt="" onClick={openTokenomics} />
            </div>
            <p onClick={openTokenomics} className='clickable pt-2'>Download Tokenomics</p>
          </div>
        </div>
      </div>

      <div className='rewards'>
        <div className='bg-cover'>
          <div className='w90 max1100' data-aos="fade-up">
          <h4 className='text-center pb-3'>Token Rewards</h4>
            <div className='row'>
              <div className='col-md-6 my-3'>
                <div className='w90 text-holder' data-aos="fade-right">
                  <div className='case-bg'><img src={CardStretchBg} alt="" /></div>
                  <div className='max70 imh'>
                    <img src={CountIcon1} alt="" />
                  </div>
                  <p className='mb-2'>
                    In SinVerse, players can earn SIN tokens by participating in the games, completing challenges, and achieving 
                    milestones. The amount of tokens earned depends on the game's difficulty and skill required. As players 
                    progress and improve their skills, they can potentially earn more tokens by exchanging the in-game currency 
                    Gold SIN coins. Overall, SIN tokens incentivize players to enjoy the games, improve their skills, and 
                    progress further, resulting in a dynamic and rewarding gaming experience.
                  </p>
                </div>
              </div>
              <div className='col-md-6'></div>
              <div className='col-md-6'></div>
              <div className='col-md-6 my-3'>
                <div className='w90 text-holder' data-aos="fade-left">
                  <div className='case-bg'><img src={CardStretchBg} alt="" /></div>
                  <div className='max70 imh'>
                    <img src={CountIcon2} alt="" />
                  </div>
                  <p className='mb-2'>
                    SinVerse will also provide a referral program that incentivizes players to invite their friends to join the 
                    platform. By sharing their referral links, players can earn a percentage of the Gold SIN coins that their 
                    referred friends earn while playing games on the platform. This rewards both the referring player and their 
                    friend, creating a win-win situation. By inviting more friends to join SinVerse, players can potentially 
                    earn more SIN tokens and enhance their overall gaming experience.
                  </p>
                </div>
              </div>
              <div className='col-md-6 my-3'>
                <div className='w90 text-holder' data-aos="fade-right">
                  <div className='case-bg'><img src={CardStretchBg} alt="" /></div>
                  <div className='max70 imh'>
                    <img src={CountIcon3} alt="" />
                  </div>
                  <p className='mb-2'>
                    Staking rewards in SinVerse are governed by a DAO and are earned by landowners who actively promote the 
                    game. These rewards are generated through initial in-game asset sales on the NFT Marketplace, future 
                    royalties, and faction taxes, creating a self-recycling profit-share opportunity for those who contribute 
                    to the ecosystem's growth.
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
