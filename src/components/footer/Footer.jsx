import React from "react";
import "./Footer.css";
function Footer() {

  return (
    <footer>
      <div className="contaier">
        <div className="footer-top">
          <img className="img" src="public/Group 111 (1).png" alt="" />
          <div className="divider"></div>
          <div className="text">Virtual Class <br/> for Zoom</div>
        </div>

        <div className="orta">
          <h3 className="h3">Subscribe to get our Newsletter</h3>
          <div className="inbt">
            <input className="in" type="text" placeholder="Your Email" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
        

        <div className="pas">
          <ul>
            <li><a href="#">Careers</a></li>
            <span class="spa">|</span>
            <li><a href="#">Privacy Policy</a></li>
            <span class="spa">|</span>
            <li><a href="#"> Terms & Conditions</a></li>
          </ul>
        </div>
        <p className="pde">© 2021 Class Technologies Inc. </p>
      </div>
    </footer>
)
}

export default Footer;
