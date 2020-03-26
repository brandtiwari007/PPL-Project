import React from "react";
import Upload from "./uploadpost";
import Moment from "react-moment";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import singlePost from "./singlepost";
import AddCategory from "./addCategory";
import { relativeTimeThreshold } from "moment";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: false,
      cat: false,
      email: "",
      username: "",
      img: [],
      categories: [],
      likes:[],
      comment:[],
    };
  }
  uploadpost = event => {
    console.log("upload", this.state.count);
    this.setState({
      count: true,
      picSrc: "/upload/"
      // email:'',
      //password:''
    });
    console.log("upload after", this.state.count);
  };
  addCategory1 = event => {
    console.log("ok");
    console.log("hello", this.event);
    console.log(" prev cat", this.state.cat);

    this.setState(
      {
        cat: true
      },
      () => console.log("after cat", this.state.cat)
    );
  };

  getCategory = () => {
    console.log("asdasdadads>>>>>>>>>>>");
    Axios.get("http://localhost:8969/getcats").then(response => {
      if (response.data) {
        this.setState({
          categories: response.data
        });
      }
    });
  };
  handleImg = value => {
    console.log("this is value",value)
    this.props.history.push({ pathname: "/singlepost", state: value });

    console.log("in po", this.props);
  };

  getPost = () => {
    Axios.post("http://localhost:8969/getImage", this.state).then(response => {
      if (response.data) {
        this.setState({
          img: response.data.reverse()
        });
        console.log(response.data, "abc");
      } else {
        console.log("response of img", response.data);
      }
    });
  };
  changeCount = event => {
    this.setState({
      count: false
    });
    this.getPost();
  };
  componentDidMount = () => {
    this.getPost();
    this.getCategory();
  };
  signout =event=>{
    localStorage.clear()
    this.props.history.push('/login')
  }

  render() {
    {
      console.log(this.state.count);
      if(localStorage.length == 0)
      {
        this.props.history.push('/login');
      }
      // ( localStorage.length === 0 && (this.props.history.push('/login'))  ) 
      return (
        <div>
          {console.log(this.state.img[0])}
              
         
          <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="navbar-inner">
              <div className="container">
                <button
                  type="button"
                  className="btn btn-navbar"
                  data-toggle="collapse"
                  data-target=".nav-collapse"
                >
                  <span className="icon-bar" /> <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link className="brand" href>
                  PPL
                </Link>
                <div className="pro_info pull-right">
                  <div className="pro_icn">
                    <img src="images/pic_small.png" />
                  </div>
                  <div className="pro_txt">
                    Me
                    <b className="caret" />
                  </div>
                  <ul
                    className="dropdown-menu"
                    role="menu"
                    aria-labelledby="dLabel"
                  >
                    <li>
                      <Link tabIndex={-1} href="#">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link tabIndex={-1} href="#">
                        Message Box
                      </Link>
                    </li>
                    <li>
                      <Link tabIndex={-1} href="#">
                        Change Language
                      </Link>
                    </li>
                    <li className="divider" />
                    <li>
                      <Link tabIndex={-1} href="#">
                        <input type="text" placeholder="search" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-collapse collapse">
                  <ul className="nav">
                    <li className="active">
                      <Link to>Home</Link>
                    </li>
                    <li className>
                      <Link to>E-Coupons</Link>
                    </li>
                    <li className>
                      <Link to>E-Brands</Link>
                    </li>
                    <li className>
                      <Link to>Resuse Market</Link>
                    </li>
                    <li className>
                      <Link to>Lost and Found</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header">
            <div className="header_lft">
              <div className="logo">
                <Link to="#">
                  <img src="images/logo.png" />
                </Link>
              </div>
              <div className="navigatn">
                <ul>
                  <li>
                    <Link to="#" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#"> E-Coupons </Link>
                  </li>
                  <li>
                    <Link to="#">E-Brands </Link>
                  </li>
                  <li>
                    <Link to="#"> Resuse Market </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={this.signout}> Sign out</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header_rgt">
              <div className="flag_div">
                <img src="images/flag.png" />
              </div>
              <input type="text" placeholder="Search" className="txt_box" />
              <div className="msg_box">
                <Link to="#">
                  <span className="msg_count">100</span>
                </Link>
              </div>
              <div className="info_div">
                <div className="image_div">
                  <img src="images/pic.png" />
                </div>
                <div className="info_div1">Me</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content">
              <div className="content_rgt">
                <div className="rght_btn">
                  <span className="rght_btn_icon">
                    <img src="images/btn_iconb.png" alt="up" />
                  </span>
                  <span className="btn_sep">
                    <img src="images/btn_sep.png" alt="sep" />
                  </span>
                  <Link to="#" onClick={this.uploadpost}>
                    Upload Post
                  </Link>
                </div>
                <div className="rght_btn">
                  <span className="rght_btn_icon">
                    <img src="images/btn_icona.png" alt="up" />
                  </span>
                  <span className="btn_sep">
                    <img src="images/btn_sep.png" alt="sep" />
                  </span>
                  <Link to="#" onClick={this.addCategory1}>
                    Add Categories
                  </Link>
                  {this.state.cat ? (
                    <AddCategory
                      changeCatState={()=>this.setState({ cat: false })}
                      getCategory={this.getCategory}
                    />
                  ) : null}
                </div>
                <div className="rght_cate">
                  <div className="rght_cate_hd" id="rght_cat_bg">
                    Categories
                  </div>
                  {this.state.categories.map(category => (
                    <div className="rght_list">
                      <ul>
                        <li>
                          <Link to="#">
                            <span className="list_icon">
                              <img
                                src={
                                  "http://127.0.0.1:8969/uploads/" +
                                  category.image
                                }
                                alt="up"
                              />
                            </span>
                            {category.name}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="rght_cate">
                  <div className="rght_cate_hd" id="opn_cat_bg">
                    Featured
                  </div>
                  <div className="sub_dwn">
                    <div className="feat_sec">
                      <div className="feat_sec_img">
                        <img src="images/feat_img1.png" alt="image" />
                      </div>
                      <div className="feat_txt">Lorem Ipusum Text</div>
                    </div>
                    <div className="feat_sec">
                      <div className="feat_sec_img">
                        <img src="images/feat_img2.png" alt="image" />
                      </div>
                      <div className="feat_txt">Lorem Ipusum Text</div>
                      <div className="btm_rgt">
                        <div className="btm_arc">Dogs</div>
                      </div>
                    </div>
                    <div className="feat_sec">
                      <div className="feat_sec_img">
                        <img src="images/feat_img3.png" alt="image" />
                      </div>
                      <div className="feat_txt">Lorem Ipusum Text</div>
                      <div className="btm_rgt">
                        <div className="btm_arc">Rabbits</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content_lft">
                <div className="contnt_1">
                  <div className="list_1">
                    <ul>
                      <li>
                        <input type="checkbox" className="chk_bx" />
                        Friends
                      </li>
                      <li>
                        <input type="checkbox" className="chk_bx" />
                        Flaged
                      </li>
                    </ul>
                  </div>
                  <div className="timeline_div">
                    <div className="timeline_div1">
                      <div className="profile_pic">
                        <img src="images/timeline_img1.png" />
                        <div className="profile_text">
                          <Link to="#">Change Profile Pic</Link>
                        </div>
                      </div>
                      <div className="profile_info">
                        <div className="edit_div">
                          <Link to="#">
                            Edit <img src="images/timeline_img.png" />
                          </Link>

                          <div className="profile_form">
                            <ul>
                              <li>
                                <div className="div_name1">Name :</div>
                              <div className="div_name2">{localStorage.getItem("username")}</div>
                              </li>
                              <li>
                                <div className="div_name1">Sex :</div>
                                <div className="div_name2">male</div>
                              </li>
                              <li>
                                <div className="div_name1">Description :</div>
                                <div className="div_name3">
                                  {this.state.count ? (
                                    <Upload changeCount={this.changeCount} />
                                  ) : null}
                                  This is an example of Link comment. You can
                                  create as many comments like this one or sub
                                  comments as you like and manage all of your
                                  content inside Account.
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="timeline_div2">
                        <ul>
                          <li>
                            <Link to="#" className="active">
                              Timeline
                            </Link>
                          </li>
                          <li>
                            <Link to="#">About </Link>
                          </li>
                          <li>
                            <Link to="#">Album</Link>
                          </li>
                          <li>
                            <Link to="#"> Pets</Link>
                          </li>
                          <li>
                            <Link to="#">My Uploads </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {this.state.img.map((value, index) => {
                    return (
                      <div className="contnt_2">
                        <div className="div_a">
                          <div className="div_title">{value.title}</div>
                          <div className="btm_rgt">
                            <div className="btm_arc">{value.category}</div>
                          </div>
                          <div className="div_top">
                            <div className="div_top_lft">
                              <img src="images/img_6.png" />
                              {value.username}
                              {/* Steave Waugh */}
                            </div>
                            <div className="div_top_rgt">
                              {/* <span className="span_date">02 Jan 2014</span> */}
                              <span className="span_date">{value.date}</span>

                              {/* <span className="span_time">11:15am</span> */}
                              <span className="span_time">{value.time}</span>
                            </div>
                          </div>
                          <div
                            className="div_image"
                            onClick={() => this.handleImg(value)}
                          >
                            <img
                              src={
                                "http://127.0.0.1:8969/uploads/" + value.image
                              }
                            />

                            {console.log("id is", value._id, "this is id")}

                            {console.log("this is title", value.title)}
                          </div>
                          <div className="div_btm">
                            <div className="btm_list">
                              <ul>
                                <li>
                                  <Link to="#">
                                    <span className="btn_icon">
                                      <img src="images/" alt="share" />
                                    </span>
                                    Share
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <span className="btn_icon">
                                      <img
                                        src="images/icon_002.png"
                                        alt="share"
                                      />
                                    </span>
                                    Flag
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <span className="btn_icon">
                                      <img
                                        src="images/icon_003.png"
                                        alt="share"
                                      />
                                    </span>
                                    0 Likes
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <span className="btn_icon">
                                      <img
                                        src="images/icon_004.png"
                                        alt="share"
                                      />
                                    </span>
                                    4 Comments
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="clear" />
            </div>
            <div className="footr">
              <div className="footr_lft">
                <div className="footer_div1">
                  Copyright © Pet-Socail 2014 All Rights Reserved
                </div>
                <div className="footer_div2">
                  <Link to="#">Privacy Policy </Link>|
                  <Link to="#"> Terms &amp; Conditions</Link>
                </div>
              </div>
              <div className="footr_rgt">
                <ul>
                  <li>
                    <Link to="#">
                      <img src="images/social_1.png" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="images/social_2.png" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="images/social_3.png" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="images/social_4.png" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
