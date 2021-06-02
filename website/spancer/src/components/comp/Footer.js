import React from 'react';
import "../styles/Footer.css";
import {IconButton, TextField} from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__item">
              <div className="footer__company">
                    <h2>Company</h2>
                          <a href="#"><p>About</p></a>
                          <a href="#"><p>Team</p></a>
                    <p className="footer__copyright">Copyright © Spancer. All rights reserved. </p>
              </div>
              <div className="footer__contact">
                 <h2>Contact</h2>
                 <a href="#"><p>Central Park, New Delhi, 112028</p></a>
                 <a href="#"><p>spancerapp@spancer.com</p></a>
                 <h5>Subscribe Us</h5>
                  <p>Get emails about our progress and feature us..</p>
                  <form >
                  <input className="footer__form" placeholder="Your Email" type="email" />
                  <IconButton>
                      <SendIcon fontSize="large" color="primary" />
                  </IconButton>
                  
                  </form>
                 
              </div>
              <div className="footer__subscribe">
                <h2>Policies</h2>
                <h5><Link to="/tc" className="footer__tc" >Terms of Use</Link></h5>
               <h5><Link to="/privacy_policy" className="footer__ppolicy" >Privacy Policy</Link></h5>
                <h5><Link to="/cookie_policy" className="footer__cookie">Cookie Policy</Link></h5>
              </div>
            </div>
        </div>
    )
}

export default Footer;