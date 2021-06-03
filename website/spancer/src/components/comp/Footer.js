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
                          <a href="/about"><p>About</p></a>
                          <a href="/team"><p>Team</p></a>
                    <p className="footer__copyright">Copyright © Spancer. All rights reserved. </p>
              </div>
              <div className="footer__contact">
                 <h2>Contact</h2>
                 <a href="#"><p>Central Park, New Delhi, 112028</p></a>
                 <a href="#"><p>spancerapp@spancer.com</p></a>
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