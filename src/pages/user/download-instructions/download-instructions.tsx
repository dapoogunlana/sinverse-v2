import React, { Fragment, useEffect, useState } from 'react';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { DownloadIntro } from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import './download-instructions.scss';
import SinButton from '../../../components/base-components/sin-button/sin-button';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';

function DownloadInstructions(props: any) {

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <div className='download-instructions'>
      <div className='other-sect pb-5'>
        <div className='radial-cover'></div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='header-spacer'></div>
        <TopicHolder max={1250} className='w96 mt-5 mb-5 relative'>Instructions & Requirements</TopicHolder>
        <div className='w96 max1200'>
          <div className='row p-0 m-0'>
            <div className='col-md-12 px-4 pb-4'>
              <Link to={`/${routeConstants.download}`}>
                <SinButton tint='blue' size='slim-mid' className='mt-3'>
                  Return to Downloads
                </SinButton>
              </Link>
            </div>
            <div className='col-md-6 px-4 py-3'>
              <div className='list-sect'>
                <h6 className='increased'>System Requirements:</h6>
                <p className='reduced-soft'>
                  SinVerse requires a Windows PC and a Metamask wallet connection on a web browser, which can be downloaded 
                  from <a href='https://metamask.io/download' target={'_blank'}>https://metamask.io/download/</a>. We recommend the following system specifications:
                </p>
                <ul className='pl-3'>
                  <li className='reduced-soft'>
                    Processor: Intel Core i5 8th Gen chipset or above
                  </li>
                  <li className='reduced-soft'>
                    Video Card: GeForce GTX 1050 Ti 4GB
                  </li>
                  <li className='reduced-soft'>
                    RAM: 8GB or above
                  </li>
                  <li className='reduced-soft'>
                    SSD is preferable for optimal performance
                  </li>
                </ul>
                <p className='mb-0 mt-2 reduced-soft'> 
                  Although the game will operate on lower-end systems, there may be frame rate issues in specific areas of the game.
                </p>
              </div>
              <div className='py-3'></div>
              <div className='list-sect'>
                <h6 className='increased'>Basic Controls</h6>
                <p className='mb-0'>Here are some basic controls to get you started in the game:</p>

                <h6 className=''>Game Controls:</h6>
                <ul className='pl-3'>
                  <li className='reduced-soft'>
                    W, A, S, D - Movement
                  </li>
                  <li className='reduced-soft'>
                    Shift - Toggle Run
                  </li>
                  <li className='reduced-soft'>
                    Spacebar - Jump
                  </li>
                  <li className='reduced-soft'>
                    C - Crouch
                  </li>
                  <li className='reduced-soft'>
                    Mouse - Look
                  </li>
                </ul>

                <h6 className=''>Weapon Functionalities:</h6>
                <ul className='pl-3'>
                  <li className='reduced-soft'>
                    Left Click - Shoot
                  </li>
                  <li className='reduced-soft'>
                    Right Click - Aim DownSight
                  </li>
                  <li className='reduced-soft'>
                    Mouse Wheel - Weapon Scroll
                  </li>
                  <li className='reduced-soft'>
                    R - Gun Reload
                  </li>
                </ul>

                <h6 className=''>Additional Functionalities:</h6>
                <ul className='pl-3'>
                  <li className='reduced-soft'>
                    Tab - Emotes Window
                  </li>
                  <li className='reduced-soft'>
                    E - Interaction (Drug Dealer, Weapon Shop)
                  </li>
                  <li className='reduced-soft'>
                    V - Chat Window
                  </li>
                  <li className='reduced-soft'>
                    M - Zoomed Map
                  </li>
                  <li className='reduced-soft'>
                    P - Cursor for Plot Interaction
                  </li>
                  <li className='reduced-soft'>
                    Esc - Side Panel Enable
                  </li>
                  <li className='reduced-soft'>
                    F - To Enter Car in Pick And Drop
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6 px-4 py-3'>
              <div className='list-sect space-top-web'>
                <h6 className='increased'>Downloading and Installing SinVerse:</h6>
                <p className='reduced-soft'>
                  Before accessing SinVerse, make sure to download the SinVerse game launcher 
                  from &nbsp;
                  <a href='https://sinverse.com/download/get/Sinverse.exe' target={'_blank'}>
                    https://sinverse.com/download/get/Sinverse.exe.
                  </a> &nbsp; After downloading the game, follow these steps:
                </p>
                <ol className='pl-3 mb-0'>
                  <li className='reduced-soft'>
                    Launch Sinverse.exe Installer
                  </li>
                  <li className='reduced-soft'>
                    Click to install SinVerse (must be on the latest version)
                  </li>
                  <li className='reduced-soft'>
                    Click the play button to enter the game
                  </li>
                  <li className='reduced-soft'>
                    Create a new account (or log in to your existing Sin account)
                  </li>
                  <li className='reduced-soft'>
                    After a successful account creation, you will be prompted to connect to your MetaMask wallet. Click 
                    "Wallet Login" to launch the signature interface.
                  </li>
                  <li className='reduced-soft'>
                    You will be redirected to your browser to sign the transaction. Click "Sign."
                  </li>
                  <li className='reduced-soft'>
                    Click "Copy to Clipboard."
                  </li>
                  <li className='reduced-soft'>
                    Return to the game, then choose your character and begin playing in the SinVerse!
                  </li>
                </ol>
              </div>
              <div className='imh w70 max300 py-3'>
                <img src={DownloadIntro} alt="" />
              </div>
            </div>
            <div className='col-md-12 px-4 py-3'>
              <div className='list-sect'>
                <p className='reduced-soft'>
                  In summary, to enjoy the exciting gameplay of SinVerse, ensure you have the necessary system requirements, 
                  download and install the game launcher, create an account, connect to your MetaMask wallet, choose your 
                  character, and use the basic controls to start playing. Have fun!
                </p>
                <p className='reduced-soft mb-0'>
                  Important: The SIN GOLD Coin is the in-game currency. This is a non-blockchain token which can be purchases 
                  on the forthcoming SinVerse marketplace or can be earned in game by completing missions, performing daily 
                  pick & drive deliveries, winning scheduled mini-games in the competition panel and killing NPCs who may 
                  dropped random rewards.
                </p>
              </div>
            </div>
            <div className='col-md-12 center-info px-4 pb-4'>
              <Link to={`/${routeConstants.download}`}>
                <SinButton tint='blue' size='slim-mid' className='mt-3'>
                  Return to Downloads
                </SinButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadInstructions;
