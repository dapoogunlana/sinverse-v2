import React, {  } from 'react';
import SinButton from '../../../../../components/base-components/sin-button/sin-button';
import './kuCoin-space.scss';

function KuCoinSpace() {

  const goToLink = (link: string) => {
    window.open(link);
  }

  return (
    <div className='kuCoin-space'>
      <div className='w80 max800 pt5-web pb-4 text-center content2'>
       <h2>
        Kucoin, the people’s exchange collaborates with the “Rated R” Metaverse!
       </h2>
       <p className='increased-soft'>
        All newly registered users through the SinVerse affiliate program will enjoy 20% fees back in 
        USDT on their trading volume for one year!
       </p>
       <div className='w96 max900 row'>
         <div className='col-md-6 py-2'>
           <SinButton className='' size='big' action={() => goToLink('https://www.kucoin.com/r/af/QBSSSZW7')}>Sign Up With Kucoin</SinButton>
         </div>
         <div className='col-md-6 py-2'>
           <SinButton className='' size='big' action={() => goToLink('https://www.kucoin.com/trade/SIN-USDT')}>&nbsp; &nbsp; &nbsp;  Buy SIN Token &nbsp; &nbsp; &nbsp;</SinButton>
         </div>
       </div>
      </div>
    </div>
  );
}

export default KuCoinSpace;
