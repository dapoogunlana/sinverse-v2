import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { DashboardIconEmail, DashboardIconSubscribe, DashboardIconTimeLeft } from '../../../../../assets/images/new';
import PaginatedItems from '../../../../../components/base-components/pagination-component/pagination-component';
import MiniLoader from '../../../../../components/block-components/mini-loader/mini-loader';
import { apiLinks } from '../../../../../config/environment';
import { clipToLength, formatDate, stringifyFilter } from '../../../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../../../services/utils/request';
import './stats.scss';

function Stats(props: any) {

  const token = sessionStorage.getItem('token');
  const [tableSwitch, setTableSwitch] = useState('visitors');

  const [subscribers, setSubscribers] = useState([]);
  const [subscribersLoaded, setSubscribersLoaded] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState('...');
  const [subscriberPaginationInfo, setSubscriberPaginationInfo] = useState({limit: 50, page: 1, count: 0});

  const [visitors, setVisitors] = useState([]);
  const [visitorsLoaded, setVisitorsLoaded] = useState(false);
  const [visitorCount, setVisitorCount] = useState('...');
  const [visitorPaginationInfo, setVisitorPaginationInfo] = useState({limit: 50, page: 1, count: 0});

  const [subscriberEmails, setSubscriberEmails] = useState('...')
  const [visitorEmails, setVisitorEmails] = useState('...')

  const updateTableSwitch = (switcher: 'visitors' | 'whitelist') => {
    setTableSwitch(switcher);
    setTimeout(() => {
      changeVisitorPage(1, true);
      changeSubscriberPage(1, true);
    }, 10)
  }

  const activateVisitor = (id: number) => {
    setSubscribersLoaded(false);
    sendRequest({
        url: 'visitor/activate/' + id,
        method: 'DELETE',
    }, (res: any) => {
      loadVisitors();
    }, (err: any) => {});
  }
  const deactivateVisitor = (id: number) => {
    setSubscribersLoaded(false);
    sendRequest({
        url: 'visitor/deactivate/' + id,
        method: 'DELETE',
    }, (res: any) => {
      loadVisitors();
    }, (err: any) => {});
  }

  const downloadWhitelist = () => {
    window.open(`${apiLinks.url}metaverse-subscriber/download?access_token=${token}`);
  }
  const downloadVisitorlist = () => {
    // toast.error( 'Feature Under Development');
    window.open(`${apiLinks.url}visitor/download?access_token=${token}`);
  }

  const loadSubscribers = () => {
    const params = {
      limit: subscriberPaginationInfo.limit,
      page: subscriberPaginationInfo.page,
    }
    setSubscribersLoaded(false);
    sendRequest({
        url: 'metaverse-subscriber' + stringifyFilter(params),
    }, (res: any) => {
      setSubscribersLoaded(true);
      setSubscribers(res.data || []);
      setSubscriberCount(res.totalCount || 0);
    }, (err: any) => {
      setSubscribersLoaded(true);
      toast.error(err?.message || 'Unable to load');
      setSubscribers([]);
    });
  }
  const changeSubscriberPage = (newPage: any, force = false) => {
    if (newPage !== subscriberPaginationInfo.page || force) {
      setSubscriberPaginationInfo({...subscriberPaginationInfo, page: newPage});
    }
  }

  const loadVisitors = () => {
    const params = {
      limit: visitorPaginationInfo.limit,
      page: visitorPaginationInfo.page,
    }
    setVisitorsLoaded(false);
    sendRequest({
        url: 'visitor' + stringifyFilter(params),
    }, (res: any) => {
      setVisitorsLoaded(true);
      setVisitors(res.data || []);
      setVisitorCount(res.totalCount || 0);
    }, (err: any) => {
      setVisitorsLoaded(true);
      toast.error(err.message || 'Unable to load');
      setVisitors([]);
    });
  }
  const changeVisitorPage = (newPage: any, force = false) => {
    if (newPage !== visitorPaginationInfo.page || force) {
      setVisitorPaginationInfo({...visitorPaginationInfo, page: newPage});
    }
  }

  const loadSubscriberMails = () => {
    sendRequest({
      url: 'metaverse-mail'
    },
    (res: any) => {
      setSubscriberEmails(res.data.length || 0);
    }, (err: any) => {
      toast.error(err.message || 'Unable to load');
    });
  }
  const loadVisitorMails = () => {
    sendRequest({
      url: 'visitor-mail'
    },
    (res: any) => {
      setVisitorEmails(res.data.length || 0);
    }, (err: any) => {
      toast.error(err.message || 'Unable to load');
    });
  }

  useEffect(() => {
    loadSubscribers();
    loadSubscriberMails();
    loadVisitors();
    loadVisitorMails();
  },[props]);

  useEffect(() => {
    loadSubscribers();
  },[subscriberPaginationInfo]);
  useEffect(() => {
    loadVisitors();
  },[visitorPaginationInfo]);
  
  return (
    <div className='w90 max1000 py-5 stats-page'>
      <div className='row mb-4 mt-4'>
        <div className='col-lg-3 col-md-6 pb-3'>
          <div className='main-card' data-aos='zoom-in'>
            <div className='description-grid-50'>
              <div className='relative'>
                <div className='icon-holder'>
                  <img src={DashboardIconSubscribe} width={50} alt="" />
                </div>
              </div>
              <div className=''>
                <h6 className='text-right mb-0 mt-2'>Visitors</h6>
              </div>
            </div>
            <h1 className='pt-4 text-right'>{ visitorCount }</h1>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 pb-3'>
          <div className='main-card' data-aos='zoom-in'>
            <div className='description-grid-50'>
              <div className='relative'>
                <div className='icon-holder'>
                  <img src={DashboardIconEmail} width={50} alt="" />
                </div>
              </div>
              <div className=''>
                <h6 className='text-right mb-0 mt-2'>Messages</h6>
              </div>
            </div>
            <h1 className='pt-4 text-right'>{ visitorEmails }</h1>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 pb-3'>
          <div className='main-card' data-aos='zoom-in'>
            <div className='description-grid-50'>
              <div className='relative'>
                <div className='icon-holder'>
                  <img src={DashboardIconTimeLeft} width={50} alt="" />
                </div>
              </div>
              <div className=''>
                <h6 className='text-right mb-0 mt-2'>Whitelist</h6>
              </div>
            </div>
            <h1 className='pt-4 text-right'>{ subscriberCount }</h1>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 pb-3'>
          <div className='main-card' data-aos='zoom-in'>
            <div className='description-grid-50'>
              <div className='relative'>
                <div className='icon-holder'>
                  <img src={DashboardIconEmail} width={50} alt="" />
                </div>
              </div>
              <div className=''>
                <h6 className='text-right mb-0 mt-2'>Messages</h6>
              </div>
            </div>
            <h1 className='pt-4 text-right'>{ subscriberEmails }</h1>
          </div>
        </div>
      </div>

      <div className="switcher mb-3">
        <div className={'visitors ' + (tableSwitch === 'visitors' ? 'active' : 'dormant')} onClick={() => updateTableSwitch('visitors')}>
          <p>Visitors</p>
        </div>
        <div className={'whitelist ' + (tableSwitch === 'whitelist' ? 'active' : 'dormant')} onClick={() => updateTableSwitch('whitelist')}>
          <p>Whitelist</p>
        </div>
      </div>
      <div className="row">
      {
        tableSwitch === 'whitelist' ? 
        <div className='col-md-12 pt-3'>
          <div className='main-card' data-aos='fade-up'>
            <div className='spread-info mb-3'>
              <h6 className='mb-0'>Whitelist Subscribers</h6>
              <button className='blue-button' onClick={downloadWhitelist}>Download</button>
            </div>
            <div className='scroll-holder'>
              <div className='scrollable'>
                <table className='responsive-table'>
                  <thead>
                    <tr className='dark-row'>
                      <th className=''>Email</th>
                      <th className=''>Date</th>
                      <th className=''>Plots</th>
                      <th className=''>City</th>
                      <th className=''>NFT Code</th>
                      <th className=''>Subscribed</th>
                    </tr>
                  </thead>
                  {
                    subscribersLoaded && subscribers.map((item: any, index) => {
                      return <tbody key={index}>
                        <tr className={(index % 2) ? 'dark-row' : ''}>
                          <td title={item.email}>{clipToLength(item.email, 16)}</td>
                          <td>{formatDate(item.dateSubscribed)}</td>
                          <td>{item.plots}</td>
                          <td title={item.city}>{clipToLength(item.city, 16)}</td>
                          <td title={item.code}>{clipToLength(item.code, 13)}</td>
                          <td>{item.subscribed ? 'True' : 'False'}</td>
                        </tr>
                      </tbody>
                    })
                  }
                </table>
              </div>
              {
                subscribers.length > 0 && subscribersLoaded && 
                <PaginatedItems
                  itemsPerPage={subscriberPaginationInfo.limit}
                  activePage={subscriberPaginationInfo.page}
                  totalCount={subscriberCount}
                  changePage={changeSubscriberPage}
                />
              }
              {
                subscribers.length === 0 && subscribersLoaded && <h5 className='text-center pt-3'>No data Available</h5>
              }
              {
                !subscribersLoaded && <MiniLoader/>
              }
            </div>
          </div>
        </div>
        :
        <div className='col-md-12 pt-3'>
          <div className='main-card' data-aos='fade-up'>
            <div className='spread-info mb-3'>
              <h6 className='mb-0'>Website Visitors</h6>
              <button className='blue-button' onClick={downloadVisitorlist}>Download</button>
            </div>
            <div className='scroll-holder'>
              <div className='scrollable'>
                <table className='responsive-table mb-3'>
                  <thead>
                    <tr className='dark-row'>
                      <th className=''>Email</th>
                      <th className=''>Date Subscribed</th>
                      <th className=''>Subscribed</th>
                      <th className=''>Action</th>
                    </tr>
                  </thead>
                  {
                    visitorsLoaded && visitors.map((item: any, index) => {
                      return <tbody key={index}>
                        <tr className={(index % 2) ? 'dark-row' : ''}>
                          <td>{item.email}</td>
                          <td>{item.dateSubscribed ? new Date(item.dateSubscribed).toDateString() : ''}</td>
                          <td>{item.subscribed ? 'True' : 'False'}</td>
                          <td>
                            {
                              item.subscribed ? 
                              <button className='red-button' onClick={() => deactivateVisitor(item._id)}>Deactivate</button> :
                              <button className='blue-button' onClick={() => activateVisitor(item._id)}>&nbsp; Activate &nbsp;</button>
                            }
                          </td>
                        </tr>
                      </tbody>
                    })
                  }
                </table>
              </div>
              {
                visitors.length > 0 && visitorsLoaded && 
                <PaginatedItems
                  itemsPerPage={visitorPaginationInfo.limit}
                  activePage={visitorPaginationInfo.page}
                  totalCount={visitorCount}
                  changePage={changeVisitorPage}
                />
              }
              {
                visitors.length === 0 && visitorsLoaded && <h5 className='text-center pt-3'>No data Available</h5>
              }
              {
                !visitorsLoaded && <MiniLoader/>
              }
            </div>
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default Stats;
