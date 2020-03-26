import React from "../../frontend/node_modules/@types/react";
import axios from "../../frontend/node_modules/axios";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
//    {this.props.username}
    super(props);
    this.state = {
      password: "",
      email: "",
      username:"",
      err:''
    };
  }

  handlesubmit = event => {
    axios.post("http://localhost:8969/login", this.state).then(response => {
      console.log(response)
      console.log(response.data,"-----------")
      if ( response.data=="either email not exist or password not mathched") {
        console.log(response);
        console.log("incorrect details")
        this.setState({
          err:response.data
        })
        console.log("+++",this.state.err)
        console.log(response.data,"this is data of login")
       
       
      } else  {
        console.log("logged in");
        console.log("here are props",this.props)
        this.props.history.push("/timeline",{});

    const email = response.data.email;
    const password = response.data.password
    const _id=response.data._id
    const username=response.data.username
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
   localStorage.setItem("username",username);
   localStorage.setItem("user_id",_id);

        //  <Link to ='/timeline'>Logged in </Link>
      }
    });
  //  console.log("this is username in login",username)
  };
 
  handleemail = event => {
    this.setState({
      email: event.target.value
    });
  };
  handlepassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <div>
        
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
                    
                    <a href>Home</a>
                  </li>
                  <li className>
                    
                    <a href>E-Coupons</a>
                  </li>
                  <li className>
                    
                    <a href>E-Brands</a>
                  </li>
                  <li className>
                    
                    <a href>Resuse Market</a>
                  </li>
                  <li className>
                    
                    <a href>Lost and Found</a>
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
                  <a href="#"> Resuse Market </a>
                </li>
                <li>
                  <a href="#"> Lost and Found</a>
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
              <a href="#">
                <span className="msg_count">100</span>
              </a>
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
              <div className="login_sec">
                <h1>Log In</h1>
                <ul>
                  <li>
                    <span> Email-ID</span>
                    <input
                      type="email"
                      required
                      name="email"
                      onChange={this.handleemail}
                      id="email"
                      placeholder="Enter your email"
                    />
                  </li>

                  <li>
                    <span>Password</span>
                    <input
                      type="password"
                      required
                      name="password"
                      onChange={this.handlepassword}
                      id="password"
                      placeholder="Enter your password"
                    />
                    <span>{this.state.err}</span>

                  </li>

                  <li>
                    <input type="checkbox" />
                    Remember Me
                  </li>
                  <li>
                    <input
                      type="submit"
                      onClick={this.handlesubmit}
                      defaultValue="Log In"
                    />
                    <a href>Forgot Password</a>
                  </li>
    
                </ul>
                <div className="addtnal_acnt">
                  I do not have any account yet.
                  <Link to="/register"> Create My Account Now ! </Link>
                  {/* <a href></a>
                   */}
                </div>
              </div>
            </div>
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <img src="images/img_9.png" alt="" />
            </div>
          </div>
        </div>
        <div className="clear" />
        <div className="footr">
          <div className="footr_lft">
            <div className="footer_div1">
              Copyright © Pet-Socail 2014 All Rights Reserved
            </div>
            <div className="footer_div2">
              <a href="#">Privacy Policy </a>|
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
  }
}
