import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";
// export class singlePost extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("props singlePost");
//     this.state = {
//       comment: [],
//       likes: []
//     };
//   }


const SinglePost = props => {
  console.log(props, "tiwari ji ke props");
  const [data, setData] = useState({
    
    likes: []
  });
  const[docomment,setComment]=useState({
    comment: [],

  })
  // componentDidMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("send in data", props.location.state._id);

    const post_id = props.location.state._id;
    localStorage.setItem("post_id", post_id);

    axios
      .post("http://localhost:8969/getComment", {
        _id: props.location.state._id
      })
      .then(result => {
        console.log("result coming from comment" + result.data);
      });
    axios
      .post("http://localhost:8969/getLikes", {
        _id: props.location.state._id
      })
      .then(result => {
        console.log("result from getLikes", result.data);
      });
    setComment({
      ...docomment,
      comment: props.location.state.comment
    });
    setData({
      ...data,
      likes: props.location.state.likes
    });
  }, []);
  const handlelike = event => {
    event.preventDefault();

    const _id = props.location.state._id;
    const _userid = localStorage.getItem("user_id");
    console.log("handle like", _id);
    console.log("handle userid", _userid);
    let user = {
      _userid,
      _id
    };
    axios.post("http://localhost:8969/likes", user).then(result => {
      console.log("result of likes", result.data);
      // this.setState({
      //   likes: result.data.likes
      // });
      setData({
        ...data,
        likes: result.data.likes
      });
    });
  };
  // const handleChange = event => {
  //   setData({
  //     //...data,
  //     comment: event.target.value
  //   });
  //   console.log("in set state comment", data.comment);
  // };
  const handleSubmit = event => {
    event.preventDefault();

    let formdata = new FormData(event.target);
    console.log(" this is formdata", formdata);
    formdata.append("_id", props.location.state._id);
    formdata.append("username", localStorage.getItem("username"));

    console.log("this is form data", formdata);
    axios.post("http://localhost:8969/comment", formdata).then(result => {
      console.log("result of comment", result.data.comment);
      // this.setState({
      //   comment: result.data.comment
      // });
      setComment({
        ...docomment,
        comment: result.data.comment
      });
    //  console.log("in post length comment", result.docomment.comment.length);
      console.log("data response", result.data);
      document.getElementById("clear").value = "";
    });
  };
  const signout = event => {
    localStorage.clear();
    props.history.push("/login");
  };
  const handleSignout = event => {
    event.preventDefault();
  };

  // render() {
  return (
    <div>
      {console.log(",,,", props)}

      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <button
              type="button"
              className="btn btn-navbar"
              data-toggle="collapse"
              data-target=".nav-collapse"
            >
              {" "}
              <span className="icon-bar" /> <span className="icon-bar" />{" "}
              <span className="icon-bar" />{" "}
            </button>
            <a className="brand" href>
              PPL
            </a>
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
                  <a tabIndex={-1} href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} href="#">
                    Message Box
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} href="#">
                    Change Language
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a tabIndex={-1} href="#">
                    <input type="text" placeholder="search" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-collapse collapse">
              <ul className="nav">
                <li className="active">
                  {" "}
                  <a href>Home</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>E-Coupons</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>E-Brands</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href onClick={signout}> sign out</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>Lost and Found</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header_lft">
          <div className="logo">
            <a href="#">
              <img src="images/logo.png" />
            </a>
          </div>
          <div className="navigatn">
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#"> E-Coupons </a>
              </li>
              <li>
                <a href="#">E-Brands </a>
              </li>
              <li>
                <a href="#" onClick={signout}> sign out </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="header_rgt">
          <div className="flag_div">
            <img src="images/flag.png" />
          </div>
          <input type="text" placeholder="Search" className="txt_box" />
          <div className="msg_box">
            <a href="#">
              <span className="msg_count">100</span>
            </a>
          </div>
          <div className="info_div">
            <div className="image_div">
              {" "}
              <img src="images/pic.png" />{" "}
            </div>
            <div className="info_div1">Me</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <div className="rght_btn">
              {" "}
              <span className="rght_btn_icon">
                <img src="images/btn_iconb.png" alt="up" />
              </span>{" "}
              <span className="btn_sep">
                <img src="images/btn_sep.png" alt="sep" />
              </span>{" "}
              <a href="#">Upload Post</a>{" "}
            </div>
            <div className="rght_btn">
              {" "}
              <span className="rght_btn_icon">
                <img src="images/btn_icona.png" alt="up" />
              </span>{" "}
              <span className="btn_sep">
                <img src="images/btn_sep.png" alt="sep" />
              </span>{" "}
              <a href="#">Invite Friends</a>{" "}
            </div>
            <div className="rght_cate">
              <div className="rght_cate_hd" id="rght_cat_bg">
                Categories
              </div>
              <div className="rght_list">
                <ul>
                  <li>
                    <a href="#">
                      <span className="list_icon">
                        <img src="images/icon_01.png" alt="up" />
                      </span>{" "}
                      CATS
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="list_icon">
                        <img src="images/icon_02.png" alt="up" />
                      </span>{" "}
                      Dogs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="list_icon">
                        <img src="images/icon_03.png" alt="up" />
                      </span>{" "}
                      Birds
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="list_icon">
                        <img src="images/icon_04.png" alt="up" />
                      </span>{" "}
                      Rabbit
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="list_icon">
                        <img src="images/icon_05.png" alt="up" />
                      </span>{" "}
                      Others
                    </a>
                  </li>
                </ul>
              </div>
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
            <div className="contnt_2">
              <div className="div_a">
                <div className="div_title">{props.location.state.title}</div>
                <div className="btm_rgt">
                  <div className="btm_arc">{props.location.state.category}</div>
                </div>
                <div className="div_top">
                  <div className="div_top_lft">
                    <img src="images/img_6.png" />
                    {props.location.state.username}
                  </div>
                  <div className="div_top_rgt">
                    <span className="span_date">
                      {props.location.state.date}
                    </span>
                    <span className="span_time">
                      {props.location.state.time}
                    </span>
                  </div>
                </div>
                {console.log("this is ---image", props.location.state.image)}
                <div className="div_image">
                  <img
                    src={
                      "http://127.0.0.1:8969/uploads/" +
                      props.location.state.image
                    }
                    alt="pet"
                  />
                </div>
                <div className="div_btm">
                  <div className="btm_list">
                    <ul>
                      <li>
                        <a href="#">
                          <span className="btn_icon">
                            <img src="images/icon_001.png" alt="share" />
                          </span>
                          Share
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="btn_icon">
                            <img src="images/icon_002.png" alt="share" />
                          </span>
                          Flag
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={handlelike}>
                          <span className="btn_icon" name="likes">
                            <img src="images/icon_003.png" alt="share" />
                          </span>
                          {data.likes.length} Likes
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <span className="btn_icon">
                            <img src="images/icon_004.png" alt="share" />
                          </span>
                          {docomment.comment.length} Comment
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="contnt_3">
              <ul>
                {docomment.comment.map((value, index) => {
                  console.log("aka", value);
                  return (
                    <li key={index}>
                      <div className="list_image">
                        <div className="image_sec">
                          <img src="images/post_img.png" />
                        </div>
                        <div className="image_name">{value.username}</div>
                      </div>
                      <div className="list_info">
                        {/* { value.comment||""} */}
                        {value.comment}
                      </div>
                      {/* <input type="button" defaultValue="Reply" className="orng_btn" /> */}
                    </li>
                  );
                })}

                <li>
                  <div className="cmnt_div1">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        required
                        
                        id="clear"
                        name="comment"
                        placeholder="Enter your Comment"
                        className="cmnt_bx1"
                      />
                      <input
                        type="submit"
                        className="sub_bttn1"
                        defaultValue="Submit Comment"
                      />
                    </form>
                  </div>
                </li>
              </ul>
              <div className="view_div">
                <a href="#">View more</a>
              </div>
            </div>
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
            <a href="#">Privacy Policy </a>|{" "}
            <a href="#"> Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="footr_rgt">
          <ul>
            <li>
              <a href="#">
                <img src="images/social_1.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/social_2.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/social_3.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/social_4.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
