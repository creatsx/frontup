import React from 'react';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__item">
               <h1>2021 &copy; Copyright Spancer App  </h1>
               <div className="footer__social">
                <a href="https://www.twitter.com/xadhrit" className="fa fa-twitter"><p>Twitter</p></a>
                <a href="https://www.instagram.com/xdhrit" className="fa fa-instagram"><p>Instagram</p></a>
                <a href="https://www.youtube.com/channel/UCHxiMoQCO0vl2ridhw4KDIw" className="fa fa-youtube"><p>Twitter</p></a>  
               </div>
            </div>

        </div>
    )
}

export default Footer;