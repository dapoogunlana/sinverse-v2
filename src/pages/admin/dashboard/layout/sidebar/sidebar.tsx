import React, {  } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import { LogoHighRes } from '../../../../../assets/images/new';
import { routeConstants } from '../../../../../services/constants/route-constants';
import './sidebar.scss';

function Sidebar(props: any) {
  return (
    <div className='bar'>
      <div>
        <i className="fa-solid fa-times sidebar-icon" onClick={props.offSidebarVisible}></i>
      </div>
      <div className='imh w40 max85 pt-5 pb-3'>
        <img src={LogoHighRes} alt="" />
      </div>
      <NavLink to={`/${routeConstants.admin}/${routeConstants.adminStatistics}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.offSidebarVisible}>
        <span>Statistics</span>
      </NavLink>
      <NavLink to={`/${routeConstants.admin}/${routeConstants.adminWaitlistMessages}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.offSidebarVisible}>
        <span>Whitelist Mails</span>
      </NavLink>
      <NavLink to={`/${routeConstants.admin}/${routeConstants.adminVisitorMessages}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.offSidebarVisible}>
        <span>News Letter Mails</span>
      </NavLink>
      <NavLink to={`/${routeConstants.admin}/${routeConstants.adminPosts}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.offSidebarVisible}>
        <span>News Posts</span>
      </NavLink>
      {/* <NavLink to={`/${routeConstants.admin}/${routeConstants.adminLearn}`} className={({isActive}) => isActive ? 'bar-link selected' : 'bar-link'} onClick={props.offSidebarVisible}>
        <span>Learn</span>
      </NavLink> */}
    </div>
  );
}

export default Sidebar;
