import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import SinButton from '../../../../../components/base-components/sin-button/sin-button';
import { Carousel } from '../../../../../components/block-components/carousel';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { clipToLength, convertStringForUrl, formatDate } from '../../../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../../../services/utils/request';
import './latest-news.scss';

function LatestNews(props: any) {


  const [currentNewsList, setCurrenctNewsList] = useState<any[]>([]);
  const [imageSlide, setImageSlide] = useState<any[]>([]);
  const navigate = useNavigate();

  const goToItem = (news: any) => {
    navigate(`/${routeConstants.industryNews}/${news.id}?${convertStringForUrl(news.title)}`);
  }
  
  const previewCount = (slideLength: number) => {
    const width = window.innerWidth;
    if(width > 991) {
      return 3 <= slideLength ? 3 : slideLength;
    } else if(width > 767) {
      return 2 <= slideLength ? 2 : slideLength;
    } else {
      return 1;
    }
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

  const updateImageSlide = () => {
    setImageSlide(currentNewsList.map((item, index) => {
      return <div className='news-slide-holder' key={index}>
        <div className='news-slide' data-aos='fade-up'>
          {/* <div className='image-holder'> */}
          <div className={"im-enclose" + (item.image ? ' no-bg': '')}>
            <img src={item.image} alt="" />
          </div>
          <div className='text-holder'>
            <h6 className=''>{item.title}</h6>
            <p className='faint-font reduced-soft content mb-2 faint-font'>
              {clipToLength(item.content[0].point || item.content[0].topic || item.content[1].point, 90)}
            </p>
            <p className='faint-font reduced-soft mb-2 faint-font'>{item.date}</p>
            <button className='news-button' onClick={() => goToItem(item)}>Read More</button>
            {/* <SinButton fill action={() => goToItem(item)}>Read More</SinButton> */}
          </div>
        </div>
      </div>
    }))
  }

  useEffect(() => {
    fetchNewsPosts();
    // updateImageSlide();
  },[props]);
  useEffect(() => {
    updateImageSlide();
  },[currentNewsList]);
  
  return (
    imageSlide.length > 0 ?
    <div className='latest-news pt-5'>
      <div className='w96 max1200 py-4'>
        <h3 className='text-center'>Latest News</h3>
          <Carousel
            loop
            autoPlay
            delay={6000}
            freeMode
            slidesPerView={previewCount(imageSlide.length)}
            spaceBetween={0}
            data={imageSlide}
          />
      </div>
    </div> :
    <></>
  );
}

export default LatestNews;
