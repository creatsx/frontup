import React from 'react'
import "../styles/Home.css";
import app from "../../static/phone.png"
import ScrollAnimation from "react-animate-on-scroll"
import Purpose from '../comp/Purpose';
import Contact from '../comp/Contact';


export default function Home() {
    return (
        <div className="home__section">
        <div className="home">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <div className="home__left" >
                <h2>Building Economy of Ideas</h2>
                <p>
                    Join Spancer, Anonymous Discussion Plateform for localised Communities.
                    <br />
                    Speak Your Ideas 
                    <br />
                    Be fledged , Be Transparent , Be Anonymous.                      
                </p>
                <button className="home__leftbtn">
                <a href="https://play.google.com/store" alt="android app"><p className="home__leftBtnP">Download Spancer App!</p></a></button>
            </div>
            </ScrollAnimation>  
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <div className="home__right">
                  <img src={app} alt="app" /> 
                </div>
            </ScrollAnimation>            
        </div>
        <Purpose />
        <Contact />
        </div>
    )
}
