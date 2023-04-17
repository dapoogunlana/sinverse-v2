import React, { useEffect, useState } from 'react';
import { advisorList, teamList } from './about-data';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import { SnakeLine, SleakRoundedCube, VulcanButton } from '../../../assets/images/new';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';
import SinCard from '../../../components/base-components/sin-card/sin-card';
import { clipToLength } from '../../../services/utils/data-manipulation-utilits';
import './about.scss';
import AppModal from '../../../components/block-components/app-modal/app-modal';

function About(props: any) {

  const [activeTeam, setActiveTeam] = useState(teamList[0]);
  const [teamModalVisible, setTeamModalVisible] = useState(false);

  const veiwTeam = (index: number) => {
    console.log('trying');
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
          <TopicHolder max={1250} className='w96 my-5 relative'>About Sinverse</TopicHolder>
          <div className='intro-writeup' data-aos='zoom-out'data-aos-delay='500'>
            <p className='mb-0'>
              ‘Sinverse’ is a Metaverse multi-player game built on Blockchain Technology. The background of the game is based on the most controversial Cities of the world, where digital real estate is available to be purchased. Users can buy this land to develop and build their empire. The aim of the game is to become the ultimate Kingpin. This will be a highly social orientated platform, where you can build clubs for your friends to hangout, venues for online events or even compete in underworld activities to win in-game rewards.
            </p>
            <div className='w80 max600 imh mb-1 py-3'>
              <SeparationLine/>
            </div>
            <p className='mb-0'>
              Vulcan Forged are advisors on game development, using state of the art virtual reality technology. In addition to this, the platform will be cross-chain agonistic, allowing for high speed & low costs transactions on the Blockchain.This Metaverse arena is highly touted to be the next big ‘thing’ in the cryptoverse. Leveraging a strong community and key opinion leaders who are avid gamers, it’s the perfect recipe for success.
            </p>
          </div>
          <SeparationLine/>
        </div>
      </div>
      <div className='team-sect pb-5'>
        <div className='w96 max1200 py-5'>
          <h3 className='text-center'>Our Team</h3>
          <div className='row'>
            {teamList.map((member, index) => {
              return <div className='col-lg-3 col-md-6' key={index} data-aos='fade-up' data-aos-delay={200 * index}>
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
          <h3 className='text-center topic pt-5'>Advisors</h3>
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
          </div>
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
          <p className='reduced mb-1'>{activeTeam.info}</p>
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
