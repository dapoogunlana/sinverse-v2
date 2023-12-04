
import React, { useEffect, useState } from 'react';
import { landMarketIcon, marketTempIcon } from '../../../../../assets/images/new';
import SeparationLine from '../../../../../components/base-components/separation-line/separation-line';
import { Carousel } from '../../../../../components/block-components/carousel';
import { formatNumber } from '../../../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../../../services/utils/request';
import { sampleParketplaceItems } from './marketplace-data';
import './marketplace.scss';

function MarketPlace(props: any) {


  const [currentMarketplaceList, setCurrenctMarketplaceList] = useState<any[]>([]);
  const [itemSlide, setItemSlide] = useState<any[]>([]);

  const goToItem = (item: any) => {
    window.open(`https://marketplace.sinverse.com/nft-details/${item.id}`);
  }

  const openMarket = (link: string) => {
    window.open(link);
  }
  
  const previewCount = (slideLength: number) => {
    const width = window.innerWidth;
    if(width > 1050) {
      return 4 <= slideLength ? 4 : slideLength;
    } else if(width > 850) {
      return 3 <= slideLength ? 3 : slideLength;
    } else if(width > 767) {
      return 2 <= slideLength ? 2 : slideLength;
    } else {
      return 1;
    }
  }
  
  const fetchMarketplaceItems = () => {
    setCurrenctMarketplaceList(sampleParketplaceItems);
    // sendRequest({
    //   url: 'https://sinverse-nodeapp.ediiie.com/api/getHomePageNFT',
    //   external: true,
    // }, (res: any) => {
    //   console.log({sampleParketplaceItems});
    //   // const selectedList: any[] = sampleParketplaceItems.map((item: any) => {
    //   //   const newItem = {
    //   //     id: item._id,
    //   //     image: item.image,
    //   //     title: item.topic,
    //   //     content: item.body.map((subItem: any) => {
    //   //       return {
    //   //         topic: subItem.sub_topic,
    //   //         point: subItem.writeup,
    //   //         subPoints: [],
    //   //       }
    //   //     }) || [],
    //   //     date: formatDate(item.datePosted),
    //   //   }
    //   //   if (item.brief) {
    //   //     newItem.content.unshift({
    //   //       topic: '',
    //   //       point: item.brief,
    //   //       subPoints: [],
    //   //     })
    //   //   }
    //   //   return newItem;
    //   // });
    //   setCurrenctMarketplaceList(sampleParketplaceItems);
    //   // console.log({selectedList, sampleParketplaceItems});
    // }, () => {});
  }

  const updateItemSlide = () => {
    setItemSlide(currentMarketplaceList.map((item, index) => {
      return <div className='marketplace-slide-holder' key={index}>
        <div className={'marketplace-slide ' + item.type} data-aos='fade-up'>
          {/* <div className='image-holder'> */}
          <div className="im-container">
            <div className='abs-holder'></div>
            {
              item.type === 'Land' ?
              <img src={landMarketIcon} alt="" /> :
              <img src={`https://ipfs.io/ipfs/${item.image}`} alt="" />
            }
          </div>
          <div className='text-holder'>
            <h6 className=''>{item.name}</h6>
              {
                item.type === 'Weapon' &&
                <div className='spread-info info-description'>
                  <p className=''>Type: <br /><span>{item.category_name}</span></p>
                  <p className='text-right'>Owner: <br /><span>{item.owner_name}</span></p>
                </div>
              }
              {
                item.type === 'Land' &&
                <div className='spread-info info-description'>
                  <p className=''>City: <br /><span>{item.city_name}</span></p>
                  <p className='text-right'>Owner: <br /><span>{item.owner_name}</span></p>
                </div>
              }
              {
                item.type === 'NFT' &&
                <div className='spread-info info-description'>
                  <p className=''>Royalty: <br /><span>{item.royalty_percent}%</span></p>
                  <p className='text-right'>Owner: <br /><span>{item.owner_name}</span></p>
                </div>
              }
            <p className='faint-font reduced-soft mb-2 font-weight-bold'>$SIN <span>{formatNumber(item.price)}</span></p>
            {/* <span className={'marketplace-button ' + item.Rarity}>{item.Rarity}</span> */}
            <button className="marketplace-button" onClick={() => goToItem(item)}>Buy Now</button>
            {/* <SinButton fill action={() => goToItem(item)}>Read More</SinButton> */}
          </div>
        </div>
      </div>
    }))
  }

  useEffect(() => {
    fetchMarketplaceItems();
    // updateItemSlide();
  },[props]);
  useEffect(() => {
    updateItemSlide();
  },[currentMarketplaceList]);

  return (
    <div className='market-place py-5 relative'>
      <SeparationLine stickBottom></SeparationLine>
      <div className='w96 max1200 py-4'>
        <h2 className='text-center'>Trending Items From The Marketplace</h2>
        {
          itemSlide.length > 0 ?
          <div className='market-items-sect'>
            <div className='w96 max1200 py-4'>
                <Carousel
                  loop
                  autoPlay
                  delay={6000}
                  freeMode
                  slidesPerView={previewCount(itemSlide.length)}
                  spaceBetween={0}
                  data={itemSlide}
                />
            </div>
          </div> :
          <></>
        }

        <div className='land-market-grid'>
          <div className='land-market-holder'>
            <div className='market-card land'>
              <div className='imh'>
                <img src={landMarketIcon} alt="" />
              </div>
              <h2>Browse our marketplace for Available Lands to Buy and sell</h2>
              <button onClick={() => openMarket('https://marketplace.sinverse.com/land-marketplace')}>Browse now</button>
            </div>
          </div>
          <div className='land-market-holder'>
            <div className='market-card other'>
              <div className='imh'>
                <img src={marketTempIcon} alt="" />
              </div>
              <h2>Trade in-game assets and other NFTs on our Marketplace</h2>
              <button onClick={() => openMarket('https://marketplace.sinverse.com/safenfts')}>Browse now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MarketPlace;
