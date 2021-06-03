import React from 'react'
import "../styles/Mission.css"
import speak from "../../static/promotion.svg";
import future from "../../static/rocket.svg";
import protection from "../../static/laptop.svg";
import ScrollAnimation from "react-animate-on-scroll";

function Mission() {
    return (
        <div className="mission__section">
            <h1>Mission</h1>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="mission" >
          
            <div className="card__ideas">
               <div className="card__img">
                   <img src={speak} alt="speak your ideas" />  
               </div>
               <div className="card__text">
                   <h4>Build Community</h4>
                   <p>On Spancer you can  
                    <br />
                    build real community of 
                   <br />
                   peoples who are on same campus,
                   <br />
                    sharing same views and visions. 
                </p>
               </div>
            </div>
            <div className="card__protection">
               <div className="card__img">
                   <img src={protection} alt="protecting your identity" />  
               </div>
               <div className="card__text">
                   <h4>Protection</h4>
                   <p>Sometimes your views
                    <br />
                    may hurt others. 
                   <br />
                Spancer keep it's user's,
                   <br />
                   identity anonymous.
                   </p>
               </div>
            </div>
            <div className="card__future">
               <div className="card__img">
                   <img src={future} alt="buidling future" />  
               </div>
               <div className="card__text">
                   <h4>Sharing Ideas</h4>
                   <p>Not everyone going to ask
                    <br />
                    questions and share ideas 
                   <br />
                   in class.
                  <br />
                 But On Virutal Spancer, 
                  <br />
                 you can speak your 
                 <br />
                 ideas with showing
                 <br />
                  your identity.</p>
               </div>
            </div>
           </div>
            </ScrollAnimation>    
    
        </div>
    )
}

export default Mission
