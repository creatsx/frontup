import React from 'react';
import "../styles/Footer.css";
import {IconButton} from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll"

function Footer() {
    return (
        <div className="footer">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <div className="footer__item">
              <div className="footer__company">
                    <h2>Company</h2>
                          <Link to="/about"><p>About</p></Link>
                          <Link to="/faq"><p>FAQs</p></Link>
                   
              </div>
              <div className="footer__contact">
                 <h2>Contact</h2>
                  <p>Central Park, New Delhi, 112028</p>
                  <p>spancerapp@spancer.com</p>
                 <p className="footer__copyright">Copyright © Spancer. All rights reserved. </p>
              </div>
              <div className="footer__subscribe">
              <h5>Subscribe Us</h5>
                  <p>Get emails about our progress and feature us..</p>
                  <form >
                  <input className="footer__form" placeholder="Your Email" type="email" required />
                  <IconButton>
                      <SendIcon fontSize="large" color="primary"  />
                  </IconButton>
                  
                  </form>
              </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default Footer;