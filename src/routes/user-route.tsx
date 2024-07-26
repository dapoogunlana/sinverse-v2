import React, { Suspense, lazy } from 'react';
import {  Routes, Route, Navigate  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';
import Loader from '../components/block-components/loader/loader';


const UserModule = lazy(() => import("../layout/user/user-module"));
const AboutPage = lazy(() => import("../pages/user/about/about"));
const NewsPage = lazy(() => import("../pages/user/news/news"));
const NewsDetailPage = lazy(() => import("../pages/user/news-detail/news-detail"));
// const ContactPage = lazy(() => import("../pages/user/contact/contact"));

const HomePage = lazy(() => import("../pages/user/home/home"));
const ExchangePage = lazy(() => import("../pages/user/exchange/exchange"));
const GameInfoPage = lazy(() => import("../pages/user/game-info/game-info"));
const StakingPage = lazy(() => import("../pages/user/staking/staking"));
const DistrictRevealPage = lazy(() => import("../pages/user/district-reveal/district-reveal"));
const DocumentPage = lazy(() => import("../pages/user/documents/documents"));
const DownloadPage = lazy(() => import("../pages/user/downloads/downloads"));
const DownloadInstructionsPage = lazy(() => import("../pages/user/download-instructions/download-instructions"));
const TokenPage = lazy(() => import("../pages/user/token/token"));
const FaqPage = lazy(() => import("../pages/user/faq/faq"));
const PrivacyPolicyPage = lazy(() => import("../pages/user/privacy-policy/privacy-policy"));

function UserRoute() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path={routeConstants.all} element={<UserModule/>}>
          <Route path={routeConstants.home2} element={<HomePage/>}></Route>
          <Route path={routeConstants.about} element={<AboutPage/>}></Route>
          {/* <Route path={routeConstants.contact} element={<ContactPage/>}></Route> */}

          <Route path={routeConstants.exchange} element={<ExchangePage/>}></Route>
          <Route path={routeConstants.gameInfo} element={<GameInfoPage/>}></Route>
          <Route path={routeConstants.staking} element={<StakingPage/>}></Route>
          <Route path={routeConstants.industryNews} element={<NewsPage/>}></Route>
          <Route path={routeConstants.industryNews + '/:id'} element={<NewsDetailPage/>}></Route>
          <Route path={routeConstants.districtReveal} element={<DistrictRevealPage/>}></Route>
          <Route path={routeConstants.documents} element={<DocumentPage/>}></Route>
          <Route path={routeConstants.download} element={<DownloadPage/>}></Route>
          <Route path={routeConstants.downloadInstructions} element={<DownloadInstructionsPage/>}></Route>
          <Route path={routeConstants.token} element={<TokenPage/>}></Route>
          <Route path={routeConstants.faq} element={<FaqPage/>}></Route>
          <Route path={routeConstants.privacyPolicy} element={<PrivacyPolicyPage/>}></Route>
          <Route path={routeConstants.all} element={<Navigate to={routeConstants.home2}/>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default UserRoute;
