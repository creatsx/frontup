import React from 'react'
import "../styles/Home.css";
import app from "../../static/phone.png"
import ScrollAnimation from "react-animate-on-scroll"


export default function Home() {
    return (
        <div className="home">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <div className="home__left" >
                <h2>Building Economy of Ideas</h2>
                <p>
                    Join Spancer, Annoymous Social Media Network for College Students.
                    <br />
                    And 
                    <br />
                   Build genuine relations on foundation of visions and ideas.                      
                </p>
                <button className="home__leftbtn">
                    <p>Download Spancer App!</p></button>
            </div>
            <div className="home__right">
                  <img src={app} alt="app" /> 
            </div>
           </ScrollAnimation>                
        </div>
    )
}
