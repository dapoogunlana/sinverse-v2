import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../../assets/styles/layout.scss";
import { HamburgerButton } from "../../../assets/images/new";
import { routeConstants } from "../../../services/constants/route-constants";
import UserHeaderDropdown from "./header-dropdown";
import SinButton from "../../../components/base-components/sin-button/sin-button";
import { LogoWhite } from "../../../assets/images/new";
import { externalLinkConstants } from "../../../config/environment";

function UserHeader2(props: any) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openWebMenu, setOpenWebMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  const toggleWebDialogue = () => {
    setOpenWebMenu(!openWebMenu);
  }
  const openWebDialogue = () => {
    setOpenWebMenu(true);
  }
  const closeDialogue = () => {
    setOpenWebMenu(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const home = window.location.pathname.indexOf('home');
      if (window.scrollY < 100) {
        if (home !== -1) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
      } else {
        setScrolled(true);
      }
    })
    // window.addEventListener('popstate', () => {
    //   console.log('Pop Changed');
    // })
  })

  return (
    <>
      <div
        className={
          (openMobileMenu ? "header open-mobile-menu" : "header close-mobile-menu") +
          (openWebMenu ? ' web-menu-open' : '')
        }
      >
        {/* <div className={scrolled ? 'sub-layer3' : 'trans-3'}></div> */}
        <div className="sub-layer"></div>
        <div className="case spread-info md-open relative">
          <Link to={routeConstants.home} onClick={closeMobileMenu}>
            <div className="logo-mini">
              <img src={LogoWhite} alt="" />
            </div>
          </Link>
          <div className="spread-info">
            <div className="mobile-menu pr-2">
              <img src={HamburgerButton} onClick={toggleMobileMenu} width={30} alt="" />
            </div>
          </div>
        </div>
        <div className="w90 spread-nav-web relative">
          <Link to={routeConstants.home} onClick={closeMobileMenu}>
            <div className="logo md-close-im">
              <img src={LogoWhite} alt="" />
            </div>
          </Link>
          <div className="nav">
                  
            <div className="spread-info-web">
              <ul>
                <li>
                  <div className="text-center">
                    <NavLink to={`/${routeConstants.about}`} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                      <span>About</span>
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="text-center">
                    <NavLink to={`/${routeConstants.gameInfo}`} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                      <span>Game Info</span>
                    </NavLink>
                  </div>
                </li>
                {/* <li>
                  <div className="text-center">
                    <NavLink to={`/${routeConstants.staking}`} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                      <span>Staking</span>
                    </NavLink>
                  </div>
                </li> */}
                <li>
                  <div className="text-center">
                    <NavLink to={`/${routeConstants.exchange}`} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                      <span>Exchange</span>
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="text-center">
                    <a href={externalLinkConstants.marketplace} target={'_blank'} onClick={closeMobileMenu}>
                      <span>Marketplace</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text-center">
                    <NavLink to={`/${routeConstants.districtReveal}`} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                      <span>District Reveals</span>
                    </NavLink>
                  </div>
                </li>
                {/* <li>
                  <div className="text-center">
                    <NavLink to={routeConstants.register} onClick={closeMobileMenu}>
                      <SinButton>Download</SinButton>
                    </NavLink>
                  </div>
                </li> */}
                {/* <li className="md-close-im">
                  <div className="text-center">
                    <i className="fas fa-bars" onClick={toggleWebDialogue}></i>
                  </div>
                </li> */}
              </ul>
              <div className="text-center">
                <Link to={`/${routeConstants.download}`}>
                  <SinButton size={'small'} >Download</SinButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <UserHeaderDropdown closeDialogue={closeDialogue} />
      </div>
    </>
  );
}

export default UserHeader2;
