import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import { toast } from 'react-toastify';
import { findConfigFile } from 'typescript';
import Loader from '../../../../../components/block-components/loader/loader';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { convertStringForUrl, filterUnsecureHTML, formatDate } from '../../../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../../../services/utils/request';
import { swal } from '../../../../../services/utils/swal-utils';
import './learn.scss';

function Learn(props: any) {
  
  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [submitMsg, setSubmitMsg] = useState('Send Post');
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [form, setForm] = useState<any>({
    topic: '',
    brief: '',
    body: [],
  });
  const [postId, setPostId] = useState<number>();

  const getBlogPosts = () => {
    sendRequest({
      url: 'learn',
    }, (res: any) => {
      setLoading(false);
      setBlogPosts(res.data || []);
      // const learn = res.data || [];
      // this.blogPosts = learn.map((item) => {
      //   if (item.image) {
      //     item.image = this.path + item.image;
      //   }
      //   return item;
      // });
    }, (err: any) => {});
  }

  const updateField = (change: any, field: string, index?: number) => {
    const value = change.target.value
    const newForm = {...form}
    if (index || index === 0) {
      newForm.body[index][field] = value;
    } else {
      newForm[field] = value;
    }
    // newForm.body = newForm.body.filter((item: any, itemIndex: number) => {
    //   return itemIndex !== index;
    // });
    setForm(newForm);
  }

  const removePostSection = (index: number) => {
    const newForm = {...form}
    newForm.body = newForm.body.filter((item: any, itemIndex: number) => {
      return itemIndex !== index;
    });
    setForm(newForm);
  }

  const addPostSection = () =>  {
    const newForm = {...form}
    newForm.body.push({
      sub_topic: '',
      writeup: '',
    });
    setForm(newForm);
  }

  const createBlogPost = (e: any) => {
    e.preventDefault();
    setSubmitMsg('processing');
    setPostLoading(true);
    sendRequest({
      url: `learn/`,
      method: 'POST',
      body: form,
    }
    , (res: any) => {
      toast.success(res.message);
      getBlogPosts();
      setForm({
        topic: '',
        brief: '',
        body: []
      });
      setSubmitMsg('Send Post');
      setPostLoading(false);
    }, (err: any) => {
      console.log({worth: err.error});
      toast.error(err.error?.message || err.message);
      setSubmitMsg('Send Post');
      setPostLoading(false);
    });
  }

  const removeImage = (id: number) => {
    setLoading(true);
    sendRequest({
      url: `learn/base-image/${id}`,
      method: 'DELETE'
    }
    , (res: any) => {
      toast.success(res.message);
      getBlogPosts();
    }, () => {
      setLoading(false);
    });
  }

  const editImage = (id: number) => {
    const uploader = document.getElementById('uploader');
    if (uploader) {
      uploader.click();
      setPostId(id);
    }
  }

  const processImage = (ev: any, id: number) => {
    const file = ev.target.files[0];
    const value = ev.target.value;
    if (value) {
      const dotPos = value.lastIndexOf('.');
      const extension = value.substring(dotPos);
      if (extension !== '.jpg' && extension !== '.jpeg' && extension !== '.png' && extension !== '.gif' && extension !== '.bmp') {
        toast.error('You are attempting to upload a wrong file format, only images are allowed');
        ev.target.value = '';
        return;
      }
      if ( file.size > 512000) {
        toast.error('The file you are trying to upload is too large, please upload an image below 512KB');
        ev.target.value = '';
        return;
      }
      const payload = {
        image: undefined
      };
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (image: any) => {
        payload.image = image.target.result;
        sendImage(payload, postId);
        ev.target.value = '';
      };
    } else {
      ev.target.value = '';
    }
  }

  const sendImage = (file: any, id: number | undefined) => {
    setLoading(true);
    sendRequest({
      url: `learn/base-image/${id}`,
      // method: 'PUT FILE',
      method: 'PUT',
      body: file
    }
    , (res: any) => {
      toast.success(res.message);
      getBlogPosts();
    }, () => {
      setLoading(false);
    });
  }

  const copyLink = (post: any) => {
    const textarea = document.createElement('textarea');
    textarea.value = `https://manilla-backend.herokuapp.com/api/v4/learn/link/${post._id}?qp=${convertStringForUrl(post.topic)}`;
    textarea.id = 'textId';
    textarea.style.opacity = '0';
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    if (document.execCommand('copy')) {
      toast.success('Learn link copied to clipboard!');
    } else {
      toast.error('Learn link could not be copied!');
    }
  }

  const deletePost = (id: number) => {
    swal.fire({
        title: 'Delete Post',
        text: `Are you sure you want to delete this learn post?`,
        icon: 'error',
    }).then((result: any) => {
        if (result.isConfirmed) {
          setLoading(true);
          sendRequest({
            url: `learn/base/${id}`,
            method: 'DELETE'
          }
          , (res: any) => {
            toast.success(res.message);
            getBlogPosts();
          }, () => {
            setLoading(false);
          });
        }
    })
  }

  useEffect(() => {
    getBlogPosts();
  }, [props]);

  return (
    <div className='visitor-post w90 max900 py-5'>
      
      <div className="row">
          <div className="col-lg-12" data-aos="zoom-in" data-aos-delay="400">
              <div className="">
                  <div className="db-card-body cover">
                      <div className="content-holder item-card">
                          <h5 className="mb-3 text-center">New Learn Article</h5>
                    
                    <form method="POST" className="register-form" name="news_form" onSubmit={createBlogPost} id="news_form">
                        <div className="input-grp">
                            <label className="mb-0">Title</label><br/>
                            <input
                              type="text"
                              required
                              name="blog_title"
                              maxLength={80}
                              value={form.topic}
                              onChange={(e) => updateField(e, 'topic')}
                              id="blog_title"
                              placeholder="Learn Title"
                            />
                        </div>
                        <div className="input-grp pt-1">
                            <label className="mb-0 ">Brief Description</label><br/>
                            <textarea
                              required
                              rows={2}
                              name="brief"
                              value={form.brief}
                              onChange={(e) => updateField(e, 'brief')}
                              id="brief"
                              placeholder="Brief Description"
                            ></textarea>
                        </div>
                        {
                          form.body.map((section: any, index: number) => (
                            <div className="post-section" key={index}>
                              <div className="remove-section" title="Remove Section" onClick={() => removePostSection(index)}>
                                  <i className="fas fa-times"></i>
                              </div>
                              <div className="input-grp">
                                  <label className="mb-0">Section SubTopic</label><br/>
                                  <input
                                    type="text"
                                    name="sub_topic"
                                    maxLength={90} 
                                    value={section.sub_topic}
                                    id={'sub_topic' + index}
                                    onChange={(e) => updateField(e, 'sub_topic', index)}
                                    placeholder="Enter section subtopic"
                                  />
                              </div>
                              <div className="input-grp pt-1">
                                  <label className="mb-0">Section Writeup</label><br/>
                                  <textarea
                                    rows={4}
                                    required
                                    value={section.writeup}
                                    onChange={(e) => updateField(e, 'writeup', index)}
                                    name={'writeup' + index}
                                    id={'writeup' + index}
                                    placeholder="Fill in section writeup"
                                  >
                                  </textarea>
                              </div>
                            </div>
                          ))
                        }
                        <div className="add-section pb-3 pt-2">
                            <button type="button" className='hollow-button rad-5-im reduced-im shadowed' onClick={addPostSection}><i className="fas fa-plus"></i> Add post section</button>
                        </div>
                        <div className="form-group form-button w100b max500 full-button">
                            <button type="submit" className='solid-button-2c rad-10 shadowed' disabled={postLoading}>{ submitMsg }</button>
                        </div>
                    </form>

                      </div>
                  </div>
              </div>
          </div>
      </div>

      <h3 className="mt-5">Saved Learn Articles</h3>
      <div className="row">
          <div className="col-lg-12">
              {
                blogPosts.map((post, index) => {
                  return <div className="db-table-card " key={index}>
                  <div className="db-card-body">
                      <div className="sizer">
                          <div className={"im-enclose-learn" + (post.image ? ' no-bg': '')}>
                              <div className="imh">
                                  <img src={post.image} alt=""/>
                              </div>
                              {
                                post.image &&
                                <div className="remove-img-box" onClick={() => removeImage(post._id)} title="Remove Post Image">
                                  <i className="fas fa-times"></i>
                                </div>
                              }
                          </div>
                      </div>
                      <div className="content-holder2">
                          <div className='spread-info pt-2'>
                            <h3>{ post.topic }</h3>
                            <p className="italic reduced-soft pl-3 pr-1">{formatDate(post.datePosted)}</p>
                          </div>
                          <p>{post.brief}</p>
                          <div className="post-container">
                              {
                                post.body.map((content: any, index2: number) => (
                                  <div className="post-content" key={index2}>
                                    <h5>{content.sub_topic}</h5>
                                    <p dangerouslySetInnerHTML={{ __html: filterUnsecureHTML(content.writeup)}}></p>
                                  </div>
                                ))
                              }
                          </div>
                      </div>
                      {
                        !loading &&
                        <div className="delete-box" onClick={() => deletePost(post._id)} title="Delete Post">
                          <i className="fas fa-trash-alt"></i>
                        </div>
                      }
                      {
                        !loading &&
                        <div className="edit-box" onClick={() => editImage(post._id)} title="Edit Post Image">
                          <i className="fas fa-edit"></i>
                        </div>
                      }
                      {
                        !loading &&
                        <div className="copy-box" onClick={() => copyLink(post)} title="Copy Post Link">
                          <i className="fas fa-copy"></i>
                        </div>
                      }
                      <input type="file" name="" className="full-hidden" id="uploader" onChange={(ev) => processImage(ev, post._id)} />
                      {
                        loading &&
                        <div className="loading-space">
                          <Loader/>
                        </div>
                      }
                  </div>
              </div>
                })
              }
          </div>
          <div className="col-lg-12" data-aos="zoom-in">
              {
                blogPosts.length === 0 && <div className='main-card pt-3 mt-4'>
                  <h5 className='text-center'>No learn posts sent yet</h5>
                </div>
              }
          </div>
      </div>
    </div>
  );
}

export default Learn;
