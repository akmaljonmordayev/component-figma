import React from "react";
import "./Footer.css";
function Footer() {
  return
   <>
   <footer>
    <div className="contaier">
      <div className="footer-top">
        <img src="public/rasm1.png" alt="" />
        <div className="divider">|</div>
        <div className="text">
          Virtual Class for Zoom
        </div>

        <div className="orta">
          <h3>Subscribe to get our Newsletter</h3>
          <div className="inbt">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>


        <div className="pas">
          <ul>
            <li><a href="">Careers</a></li>
            <span>|</span>
            <li><a href="">Privacy Policy</a></li>
            <span>|</span>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </>;
}

export default Footer;
