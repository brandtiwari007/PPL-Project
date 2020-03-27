import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';

// export default  class Register extends React.Component{
//   constructor(props){

//     super(props)
//     {console.log(" hello",this.props)}
//     this.state={
//       username:'',
//       password:'',
//       email:'',
//       firstname:'',
//       lastname:'',
//       err:'',
//       responsegive:'',

//     };
//   }
const Register = props => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    err: "",
    responsegive: ""
  });

  const handlesubmit = event => {
    event.preventDefault();
    axios.post("http://localhost:8969/signup", data).then(response => {
      console.log(response);
      if (response.data == "user exists") {
        //  console.log("in ++",this.props)

        console.log("+--=---", response.data);
        // document.getElementById("emaill").innerHTML=" "
        //  this.setState({
        //     err:response.data
        //  })
        setData({
          ...data,
          err: response.data
        });
      //  console.log("in err", this.state.err);

        //  document.getElementById("emaill").innerHTML="email already exists"
      } else if (response.data == "user created") {
        // this.setState({
        //   responsegive:response.data
        // })
        setData({
          ...data,
          responsegive: response.data
        });

        console.log("--=", response.data);

        //  console.log("-=-",this.props)
        //   this.props.history.push('/login');
      }
    });
    //  this.user(response)
  };
  const handleuser = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  // handleusername = (event) =>{
  //   this.setState({
  //       username:event.target.value
  //   })
  // }
  // handlepassword =(event) =>{
  //   this.setState({
  //     password:event.target.value
  //   })
  // }
  // handleemail =(event)=>{
  //   this.setState({
  //     email:event.target.value
  // })
  // }
  // handlefirstname =(event)=>{
  //   this.setState({
  //     firstname:event.target.value
  //   })
  // }
  // handlelastname = (event)=>{
  //   this.setState({
  //  lastname:event.target.value
  //   })
  // }
  // user=(data)=>{
  //   data.username=localStorage.setItem("username",username);
  //         console.log("this is username in register",username)

  // }

  // render(){

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
                <li clacategoriessName>
                  {" "}
                  <a href>E-Coupons</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>E-Brands</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>Resuse Market</a>{" "}
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
            <div className="register_sec">
              <h1>Create An Account</h1>
              <ul>
                <form id="clear" onSubmit={handlesubmit}>
                  <li>
                    <span>Username</span>
                    <input
                      type="text"
                      name="username"
                      onChange={handleuser}
                      placeholder="Enter your username"
                      required
                    />
                  </li>
                  <li>
                    <span>Password</span>
                    <input
                      type="password"
                      required
                      name="password"
                      onChange={handleuser}
                      placeholder="Enter your password"
                    />
                  </li>
                  <li>
                    <span>Email</span>
                    <input
                      type="email"
                      required
                      name="email"
                      onChange={handleuser}
                      placeholder="Enter your email"
                    />

                    <span> {data.err} </span>
                  </li>
                  <li>
                    <span>First Name</span>
                    <input
                      name="firstname"
                      required
                      onChange={handleuser}
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </li>
                  <li>
                    <span>Last Name</span>
                    <input
                      name="lastname"
                      required
                      onChange={handleuser}
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </li>
                  <li>
                    <input type="checkbox" />I agree to Term &amp; Conditions
                  </li>
                  <li>
                    <input type="submit" required defaultValue="Register" />
                  </li>
                </form>
                <span>{data.responsegive}</span>
              </ul>
              <div className="addtnal_acnt">
                I already have an account.
                <Link to="/login"> Login have you a account ! </Link>
              </div>
              {/* <a href>Login My Account !</a> */}
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
              hidden in the middle of text.{" "}
            </p>
            <img src="images/img_9.png" alt="" />{" "}
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
export default Register;
