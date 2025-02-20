
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ExchangeKuCoin,
  ExchangePancakeswap,
  ExchangeMXC,
  ExchangeGateIo,
  LogoRed,
  LogoWhite,
} from "../../../assets/images/new";
import { routeConstants } from "../../../services/constants/route-constants";
import { useNavigate } from "react-router-dom";
import { externalLinkConstants, socialLinks } from "../../../config/environment";
import { sendRequest } from "../../../services/utils/request";
import { toast } from 'react-toastify';
import { Formik } from "formik";
import * as Yup from "yup";
import { WhitePaper } from "../../../assets/files";
import SinButton from "../../../components/base-components/sin-button/sin-button";

function UserFooter(props: any) {
  
  const navigate = useNavigate();
  const [response, setResponse] = useState<any>();
  const [location, setLocation] = useState<any>();

  const goToPageSection = (page: string, section: string) => {
    navigate(page);
    setTimeout(() => {
        if(section && typeof(section) === 'string') {
            document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
        }
    }, 100);
  }

  const goToLink = (link: string) => {
    window.open(link);
  }

  const subscribe = (email: string, controls: any) => {

    sendRequest(
      {
        method: 'POST',
        url: 'visitor',
        body: {
          email: email,
          geolocation: location,
          subscribed: true,
          rating: 5
        }
      },
      (res: any) => {
          controls.setSubmitting(false);
          setResponse(<p className='c-green mb-0 pt-2'>{res.message}</p>);
          setTimeout(() => setResponse(''), 7000);
          controls.resetForm();
          toast.success(res.message);
        },
      (err: any) => {
          controls.setSubmitting(false);
          const errorMessage = err.error?.emailError || err.message || 'Unable to complete';
          setResponse(<p className='c-red-faded mb-0 pt-2'>{errorMessage}</p>);
          toast.error(errorMessage);
          setTimeout(() => setResponse(''), 7000);
        }
    );
  }

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((location) => {
    //   setLocation({
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude,
    //     accuracy: location.coords.accuracy,
    //   });
    // }, null, {});
  }, [props]);

  return (
    <div className="footer pt-2 relative">
      <div className="w96 p-3 relative">
        <div className="w96 max1300 mt-5">
          <div className="w96 max600 pb-3">
            <p className="text-center">Subscribe to our newsletter and get notifications to stay updated</p>
            {/* <div className="subscribe-grid inc-grid w96 max600 mb-4">
                <input type="text" placeholder="Enter your email" />
                <span></span>
                <button className="md-close">Subscribe</button>
                <button className="md-open">Go</button>
            </div> */}
            <Formik
                initialValues={{
                  email: '',
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().required().email('Invalid Email'),
                })}
                onSubmit={(values, formParams) => subscribe(values.email, formParams)}
              >
                {
                  (props) => {
                    const {
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      handleChange,
                      handleSubmit
                    } = props;
                    return <form action="" onSubmit={handleSubmit}>
                      <div className='subscribe-grid inc-grid w96 max600 mb-1'>
                            <input
                              type="email"
                              placeholder='Enter email address'
                              name='email'
                              id='email'
                              value={values.email}
                              onChange={handleChange}
                              onBlur={() => touched.email = false}
                            />
                            <span></span>
                            <button type='submit' className="md-close" disabled={isSubmitting}>Subscribe</button>
                            <button type='submit' className="md-open" disabled={isSubmitting}>Go</button>
                            {/* <button type='submit' className='solid-button-2c rad-10 shadowed' disabled={isSubmitting}>
                              {isSubmitting ? 'Processing..' : 'Submit'}
                            </button> */}
                      </div>
                      {touched.email && errors.email && <p className='c-red-faded text-center'>{errors.email}</p>}
                      { isSubmitting && <div className='text-center'>Processing...</div> }
                      { response && <div className=' text-center'>{response}</div> }
                    </form>
                  }
                }
              </Formik>
          </div>
          <div className="footer-sector">
            <div className="footer-sect">
              <div className="w-96 sub-sect row">
                <div className="col-12 footer-topic-height my-3">
                  <Link to={`/`}><img src={LogoWhite} className="logo" alt="" /></Link>
                </div>
                <div className="col-sm-6">
                  {/* <p className="reduced-soft mb-1">
                    <Link to={`/${routeConstants.staking}`}>Staking</Link>
                  </p> */}
                  <p className="reduced-soft">
                    <Link to={`/${routeConstants.exchange}`}>Exchange</Link>
                  </p>
                  {/* <p className="reduced-soft">
                    <Link to={`/${routeConstants.documents}`}>Documents</Link>
                  </p> */}
                  <p className="reduced-soft">
                    <Link to={`/${routeConstants.token}`}>SIN Token</Link>
                  </p>
                  <p className="reduced-soft md-close">
                    <Link to={`/${routeConstants.download}`}>
                      <SinButton size={'small'} >Download</SinButton>
                    </Link>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="reduced-soft">
                    <Link to={`/${routeConstants.about}`}>About</Link>
                  </p>
                  <p className="reduced-soft">
                    <Link to={`/${routeConstants.gameInfo}`}>Game Info</Link>
                  </p>
                  <p className="reduced-soft">
                    <Link to={`/${routeConstants.industryNews}`}>Marketplace</Link>
                  </p>
                  <p className="reduced-soft">
                    <Link to={`/${routeConstants.districtReveal}`}>District Reveals</Link>
                  </p>
                  <p className="reduced-soft">
                    <a target={'_blank'} href={WhitePaper}>Whitepaper</a>
                  </p>
                  <p className="reduced-soft">
                    <Link to={`/${routeConstants.privacyPolicy}`}>Privacy Policy</Link>
                  </p>
                  <p className="reduced-soft md-open">
                    <Link to={`/${routeConstants.download}`}>
                      <SinButton size={'small'} >Download</SinButton>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-sect">
              <div className="w-96 sub-sect row">
                <div className="col-12 footer-topic-height center-info front-info-mobile my-3">
                  <p className="mb-0 font-weight-bold head-p">Available Exchanges</p>
                </div>
                <div className="col-sm-6 md-close">
                  <div className="mb-3">
                    <div className="w50 max70 imh">
                      <img src={LogoRed} alt="" />
                    </div>
                    {/* <div className="">
                      <h1 className="mb-0">71<span className="reduced-im">%</span></h1>
                      <p>Sold Out</p>
                    </div> */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="exchange-sect">
                    <a href={externalLinkConstants.kuCoin} target={'_blank'} className="mb-2">
                      <div className="description-grid-40">
                        <img src={ExchangeKuCoin} width={28} className="rad-15 shadowed" alt="" />
                        <p className="pt-1">KuCoin</p>
                      </div>
                    </a>
                    <a href={externalLinkConstants.pancakeswap} target={'_blank'} className="mb-2">
                      <div className="description-grid-40">
                        <img src={ExchangePancakeswap} width={28} className="rad-15 shadowed" alt="" />
                        <p className="pt-1">Pancakeswap</p>
                      </div>
                    </a>
                    <a href={externalLinkConstants.mxc} target={'_blank'} className="mb-2">
                      <div className="description-grid-40">
                        <img src={ExchangeMXC} width={28} className="rad-15 shadowed" alt="" />
                        <p className="pt-1">MXC</p>
                      </div>
                    </a>
                    <a href={externalLinkConstants.gate_io} target={'_blank'}>
                      <div className="description-grid-40">
                        <img src={ExchangeGateIo} width={28} className="rad-15 shadowed" alt="" />
                        <p className="pt-1">Gate.io</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-sect">
              <div className="sub-sect icon-case">
                <div className="icon-sect">
                  <div className="spread-info media-icons footer-topic-height my-3">
                      <a href={socialLinks.telegram} target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane increased-x"></i></a>
                      <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="mx-2"><i className="fab fa-twitter increased-x"></i></a>
                      <a href={socialLinks.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram increased-x"></i></a>
                      <a href={socialLinks.medium} target="_blank" rel="noreferrer" className="mx-2"><i className="fab fa-medium increased-x"></i></a>
                      <a href={socialLinks.discord} target="_blank" rel="noreferrer"><i className="fab fa-discord increased-x"></i></a>
                  </div>
                  <div className="sub-icon-text">
                    <p className="py-3 center-mobile">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-info reduced footer-base relative">
          <p className="pt-4 pb-3 center-mobile">
            <span className="mr-2 px-2"></span>
            © SinVerse {new Date().getFullYear()} . All right reserved 
            <span className="ml-2 ref-text" onDoubleClick={() => goToLink('http://paul-ogunlana.com.ng/')}>Ref</span>
          </p>
        </div>
    </div>
  );
}
export default UserFooter;


// class TestClass extends React.Component {
  
// }

// function TestFunct (props: any) {

//   const [focus, setFocus ] = React.useState(props.shouldFocus);
  
//   React.useEffect(()=>{
//     setFocus(props.shouldFocus)
//   })
//   return <input autoFocus={focus} />;
// }
