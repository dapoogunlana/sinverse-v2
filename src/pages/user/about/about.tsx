import React, { useEffect, useState } from 'react';
import { advisorList, teamList } from './about-data';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { SleakRoundedCube, VulcanButton } from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import SinCard from '../../../components/base-components/sin-card/sin-card';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';
import './about.scss';
import AppModal from '../../../components/block-components/app-modal/app-modal';

function About(props: any) {

  const [activeTeam, setActiveTeam] = useState(teamList[0]);
  const [teamModalVisible, setTeamModalVisible] = useState(false);

  const veiwTeam = (index: number) => {
    setActiveTeam(teamList[index]);
    setTeamModalVisible(true);
  }
  const closeTeam = () => {
    setTeamModalVisible(false);
  }

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <div className='about'>
      <div className='intro-case'>
        <div className='intro'>
          <div className='radial-cover'></div>
          <div className='header-spacer'></div>
          <TopicHolder max={1250} className='w96 my-5 relative'>About SinVerse</TopicHolder>
          <div className='intro-writeup' data-aos='zoom-out'data-aos-delay='500'>
            <p className='mb-0'>
              SinVerse (formerly Sin City Metaverse) is a dynamic virtual world and multiplayer empire-building 
              game set in an expansive open-world environment. The concept was first introduced at the Agora 
              Event in June 2021 during the “Celebrating NFT & DeFi” expedition. Led by an experienced team, 
              the project was officially launched on October 17, 2021, live on stage at Gitex, the Global World 
              Expo in Dubai, in front of an audience of over 1 million.
            </p>
            <div className='w80 max600 imh mb-1 py-3'>
              <SeparationLine/>
            </div>
            <p className='mb-0'>
              At SinVerse, our mission is to create a sustainable, player-driven economy within an immersive and 
              competitive world. We are committed to innovation and continuous growth, empowering players to 
              shape their own experiences. As the first Mafia-inspired Metaverse on the Blockchain, we provide 
              an interactive virtual world where players can engage in strategic gameplay, build their empire, 
              and participate in a thriving in-game economy.
              <br/><br/>
              Our team is composed of passionate gaming and blockchain professionals, supported by partnerships 
              and advisors from some of the longest-standing service providers in blockchain history.
            </p>
          </div>
          <SeparationLine/>
        </div>
      </div>
      <div className='team-sect pb-5'>
        <div className='w96 max900 py-5'>
          <h3 className='text-center'>Core Team</h3>
          <div className='row'>
            {teamList.map((member, index) => {
              return <div className='col-md-6' key={index} data-aos='fade-up' data-aos-delay={200 * index}>
                <SinCard className='team-card' dark>
                  <div className='member-img'>
                    <img src={SleakRoundedCube} alt="" />
                    <div className='image-float'>
                      <img src={member.image} alt="" />
                    </div>
                  </div>
                  <h6 className='mb-0 increased'>{member.name}</h6>
                  <p className='position mb-0'>{member.position}</p>
                  <p className='reduced mb-1'>{clipToLength(member.info, 100)}</p>
                  <p className='read-more mb-1' onClick={() => veiwTeam(index)}>Read More</p>
                </SinCard>
              </div>
            })}
          </div>
          {/* <h3 className='text-center topic pt-5'>Advisors</h3>
          <div className='row'>
            {advisorList.map((member, index) => {
              return <div className='col-lg-12' key={index} data-aos='fade-up'>
                <SinCard className='team-card' dark>
                  <div className='member-img'>
                    <img src={SleakRoundedCube} alt="" />
                    <div className='image-float'>
                      <img src={member.image} alt="" />
                    </div>
                  </div>
                  <h6 className='mb-0 increased'>{member.name}</h6>
                  <p className='position mb-0'>{member.position}</p>
                  <div className='w80 imh'>
                    <img src={VulcanButton} alt="" />
                  </div>
                </SinCard>
              </div>
            })}
          </div> */}
        </div>
      </div>
      {
        teamModalVisible &&
        <AppModal styleClass='silent-sin' onCloseModal={closeTeam}>
        <SinCard className='team-card' dark>
          <div className='member-img'>
            <img src={SleakRoundedCube} alt="" />
            <div className='image-float'>
              <img src={activeTeam.image} alt="" />
            </div>
          </div>
          <h6 className='mb-1 increased'>{activeTeam.name}</h6>
          <p className='position mb-1'>{activeTeam.position}</p>
          <div className='scrollable'>
            <p className='reduced mb-1' dangerouslySetInnerHTML={{__html: activeTeam.info}}></p>
          </div>
          <div className='links mt-3'>
            <div className='icon-case mx-3' title='Linked in'>
              <i className="fab fa-linkedin increased" onClick={() => goToLink(activeTeam.linkedIn)}></i>
            </div>
            <div className='icon-case mx-3' title='Email'>
              <i className="fas fa-envelope increased" onClick={() => goToLink(activeTeam.email)}></i>
            </div>
          </div>
        </SinCard>
      </AppModal>
      }
    </div>
  );
}

export default About;
