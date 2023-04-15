import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '../../../assets/images';
import { newsList } from './news-data';
import { routeConstants } from '../../../services/constants/route-constants';
import './news.scss';
import { clipToLength, convertStringForUrl, formatDate } from '../../../services/utils/data-manipulation-utilits';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { sendRequest } from '../../../services/utils/request';
import TopicHolder from '../../../components/base-components/topic-holder/topic-holder';
import SeparationLine from '../../../components/base-components/separation-line/separation-line';

function News(props: any) {

  const navigate = useNavigate();
  const [currentNewsList, setCurrenctNewsList] = useState<any[]>([]);

  const goToItem = (news: any) => {
    navigate(`/${routeConstants.industryNews}/${news.id}?${convertStringForUrl(news.title)}`);
  }
  
  const fetchNewsPosts = () => {
    sendRequest({
      url: 'blog',
    }, (res: any) => {
      const selectedList: any[] = res.data.map((item: any) => {
        const newItem = {
          id: item._id,
          image: item.image,
          title: item.topic,
          content: item.body.map((subItem: any) => {
            return {
              topic: subItem.sub_topic,
              point: subItem.writeup,
              subPoints: [],
            }
          }) || [],
          date: formatDate(item.datePosted),
        }
        if (item.brief) {
          newItem.content.unshift({
            topic: '',
            point: item.brief,
            subPoints: [],
          })
        }
        return newItem;
      });
      setCurrenctNewsList(selectedList);
      console.log({selectedList});
    }, () => {});
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNewsPosts();
  }, [props]);
  
  return (
    <div className='news'>
      <div className='news-banner'>
        <div className='w90 max1200 py-5'>
          <div className='header-spacer'></div>
          <SeparationLine stickBottom></SeparationLine>

          <div>
          <TopicHolder max={1250} className='w96 my-5 relative'>Trending News</TopicHolder>
          {
              currentNewsList.length > 0 &&
              <div className='row' data-aos="fade-up">
                <div className='col-md-6 center-info-front py-4'>
                  <div className='imh-dotted-holder'>
                    {/* <img src={currentNewsList[0].image} className='rad-10' alt="" /> */}
                    <div className={"im-enclose shadowed rad-10" + (currentNewsList[0].image ? ' no-bg': '')}>
                      <img src={currentNewsList[0].image} alt="" />
                    </div>
                  </div>
                </div>
                <div className='col-md-6 center-info'>
                  <div className='max500'>
                    <p className='c-faint-font mb-2'>{currentNewsList[0].date}</p>
                    <h3>{currentNewsList[0].title}</h3>
                    <p>{clipToLength(currentNewsList[0].content[0].point || currentNewsList[0].content[0].topic || currentNewsList[0].content[1].point, 100)}</p>
                    <p className='c-pr-light-blue font-weight-bold increased clickable' onClick={() => goToItem(currentNewsList[0])}>Read More</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      
      <div className='lower-space'>
        <div className='w90 max1200 pt-5'>

          <div className='row'>
              {currentNewsList.map((item, index) => {
                if (index > 0 && index < 4) {
                  return <div className='col-lg-4 colmd-6 py-3' data-aos="fade-up" key={index}>
                    <div className='imh-dotted-holder'>
                      {/* <img src={item.image} className='rad-10' alt="" /> */}
                      <div className={"im-enclose" + (item.image ? ' no-bg': '')}>
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                    <div className='max500 pt-3'>
                      <p className='c-faint-font mb-2'>{item.date}</p>
                      <h4 className='increased'>{item.title}</h4>
                      <p className='c-pr-light-blue font-weight-bold increased-soft clickable' onClick={() => goToItem(item)}>Read More</p>
                    </div>
                  </div>
                }
              })}
            
          </div>

          <SeparationLine></SeparationLine>

          {currentNewsList.map((item, index) => {
            if (index > 3 ) {
              return <React.Fragment key={index}>
                <div className='row py-4' >
                <div className='col-md-6 center-info-front py-4' data-aos="fade-up">
                  <div className='imh-dotted-holder'>
                    {/* <img src={item.image} className='rad-10' alt="" /> */}
                      <div className={"im-enclose" + (item.image ? ' no-bg': '')}>
                        <img src={item.image} alt="" />
                      </div>
                  </div>
                </div>
                <div className='col-md-6 center-info'>
                  <div className='max500'>
                    <p className='c-faint-font mb-2'>{item.date}</p>
                    <h3>{item.title}</h3>
                    <p>{clipToLength(item.content[0].point || item.content[0].topic || item.content[1].point, 100)}</p>
                    <p className='c-pr-light-blue font-weight-bold increased clickable' onClick={() => goToItem(item)}>Read More</p>
                  </div>
                </div>
              </div>
              <SeparationLine></SeparationLine>
              </React.Fragment>
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
