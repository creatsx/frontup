import React from 'react';
import "../styles/Mission.css";
import ScrollAnimation from "react-animate-on-scroll";

function Mission() {
    return (
        <div className="mission__section">
            <h1>Mission</h1>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="mission">
           </div>
            </ScrollAnimation>    
    
        </div>
    )
}

export default Mission
