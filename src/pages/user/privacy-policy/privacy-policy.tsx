import React, { useEffect, useState } from 'react';
import './privacy-policy.scss';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';

function PrivacyPolicy(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <div className='privacy-policy'>
      <div className='sub-space pb-5'>
        <div className='header-spacer'></div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w90 max1250 py-2'>
        <TopicHolder max={1250} className='w96 my-5 relative' breakSubChild subChild='Effective Date: 26/07/2024'>Privacy Policy</TopicHolder>

        </div>
        <SeparationLine stickBottom></SeparationLine>
        <div className='w90 max1000' data-aos="fade-up">
          <h6>1. Introduction</h6>
          <p>
            Welcome to Sinverse! We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://sinverse.com) and use our game. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
          </p>
          <h6>2. Information We Collect</h6>
          <p>We collect information about you in a variety of ways. This includes:</p>
          <h6>2.1 Information You Provide to Us</h6>
          <p><span>Account Information:</span> When you register for an account, we collect your username, email address, password, and any other information you provide.</p>
          <p><span>Profile Information:</span> You may provide additional information, such as a profile picture or other details as part of your account profile.</p>
          <p><span>Transaction Information:</span> We collect information related to your transactions on the Sinverse marketplace, including NFTs purchased and Sin Tokens won or exchanged.</p>

          <h6>2.2 Information We Collect Automatically</h6>
          <p>
            <span>Log and Usage Data:</span> We collect log files and usage data automatically when you access our website or 
            game. This may include your IP address, browser type, operating system, access times, pages viewed, and the page you 
            visited before navigating to our site.
          </p>
          <p>
            <span>Device Information:</span> We collect information about the device you use to access our website or game, including hardware model, operating system and version, unique device identifiers, and mobile network information.
          </p>
          <p>
            <span>Cookies and Similar Technologies:</span> We use cookies and similar tracking technologies to collect information about your activities on our website and game.
          </p>

          <h6>2.3 Information From Third Parties</h6>
          <p>We may receive information about you from third parties, such as social media platforms or partners, when you use these services to log into our game or website.</p>

          <h6>3. How We Use Your Information</h6>
          <p>We use the information we collect in the following ways:</p>
          <p><span>To Provide and Maintain Our Service:</span> Including to register you as a user, manage your account, provide customer support, and operate our game and website.</p>
          <p><span>To Improve Our Service:</span> To understand how our users interact with our game and website, improve user experience, and develop new features.</p>
          <p><span>To Process Transactions:</span> To facilitate transactions within the Sinverse marketplace, including the purchase of NFTs and the winning or exchange of Sin Tokens.</p>
          <p><span>To Communicate With You:</span> To send you updates, promotional materials, and other information that may be of interest to you.</p>
          <p><span>To Ensure Security and Prevent Fraud:</span> To protect our game, website, and users from fraud and to ensure security.</p>
          <p><span>To Comply With Legal Obligations:</span> To comply with applicable laws, regulations, and legal processes.</p>

          <h6>4. Sharing Your Information</h6>
          <p>We do not sell your personal data. We may share your information with:</p>
          <p><span>Service Providers:</span> Third-party vendors who provide services such as data analysis, payment processing, and customer support.</p>
          <p><span>Affiliates:</span> We may share your information with our affiliates, in which case we will require them to honor this Privacy Policy.</p>
          <p><span>Legal Requirements:</span> If required by law or to protect the rights, property, or safety of Sinverse, our users, or others.</p>

          <h6>5. Data Security</h6>
          <p>
            We implement security measures designed to protect your information from unauthorized access, use, or disclosure. 
            However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot 
            guarantee its absolute security.
          </p>

          <h6>6. Your Data Protection Rights</h6>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <p><span>Access:</span> You can request access to your personal data.</p>
          <p><span>Correction:</span> You can request that we correct any inaccuracies in your personal data.</p>
          <p><span>Deletion:</span> You can request that we delete your personal data.</p>
          <p><span>Restriction:</span> You can request that we restrict the processing of your personal data.</p>
          <p><span>Portability:</span> You can request that we provide you with a copy of your personal data in a structured, commonly used, and readable format.</p>
          <p>To exercise any of these rights, please contact us at [Insert Contact Email].</p>

          <h6>7. International Data Transfers</h6>
          <p>
            Your information may be transferred to, and maintained on, computers located outside of your state, province, 
            country, or other governmental jurisdiction where the data protection laws may differ. By using our website and 
            game, you consent to the transfer of your data to these locations.
          </p>

          <h6>8. Changes to This Privacy Policy</h6>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
            Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h6>9. Contact Us</h6>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: <a href="mailto:hello@sinverse.com">hello@sinverse.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
