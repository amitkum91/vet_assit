import React from 'react';
import chat from "../images/chat.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter-logo.png";
import payment from "../images/doggo.png";
import footerSymbol from "../images/loginsymbol.png";


const Footer = () => {
  return (
    <div className="contentfooter">
         {/* <img src={footerSymbol} class="container_footersymbol" alt="Norway"/> */}
        <ul className="list-social">
        <li><img src={facebook} class="social" alt="fb"/></li>
        <li><img src={chat} class="social1" alt="chat"/></li>
        <li><img src={twitter} class="social2" alt="twitter"/></li>
        </ul>
        <div className="contactfooter">
           <p className="footerPhone">+ 91 - 08865467541</p>
           <p className="footerEmail">vetassist@gmail.com</p>
        </div>
 </div>
  )
}

export default Footer