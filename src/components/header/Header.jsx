import React from "react";
import logo1 from "/public/logo1.png"
import tv2 from "/public/tv2.png"
import voman3 from "/public/voman3.png"

import "./Header.css";
function Header() {
  return (
    <>
    <div className="header">
    <header>
     <div className="container">
      <nav>
      <div className="nav-left">
      <img src={logo1} alt="" />
      </div>
      <div className="nav-right">
      <a href="#">Home</a>
      <a href="#">Careers</a>
      <a href="#">Blog</a>
      <a href="#">About Us</a>
      <div className="button-parent">
      <button>Login</button>
      <button>Sign Up</button>
      </div>
      </div>
      </nav>
     </div>

     <div className="header2">
      <div className="head1">
          <h1><span>Studying</span> Online is now much easier</h1>
          <p className='text1'>Skilline is an interesting platform that will teach you in more an interactive way</p>
          <div className="btn-parent">
          <button className="btn1">Join for free</button>
           <img src={tv2} alt="" className='img1'/>
          <p className='text2'>Watch how it works</p>
          </div>
      </div>
      <div className="head2">
          <img src={voman3} alt="" />
      </div>
     </div>


    </header>

    </div>
  </>
  )

}

export default Header;
