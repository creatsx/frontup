import React from 'react';
import "../styles/Purpose.css";
import ScrollAnimation from "react-animate-on-scroll";

function Purpose() {
    return (
        <div className="purpose__section">
            <h1>Purpose</h1>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="purpose">
            We allow our users to make some really mature discussion, free speech and geniune criticism.
            <br />
            It's our warm request to every of our user to not make this app garbage like others.
            <br />
            Make it a place where people really appericate each other's abilities and ideas.
            <br />
            Your Karma Points should sign of how beautiful your mind is ?
            
           </div>
            </ScrollAnimation>    
    
        </div>
    )
}

export default Purpose;
