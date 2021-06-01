import React from 'react'
import "../styles/Header.css"
import logo from "../../static/laptop.svg" 
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
              <img src={logo}  alt="logo" />
              <h3>Spancer 🌟 </h3>
            </div>
            <div className="header__right">
               <h4><Link to="/content" className="headerRight__content" >Content</Link></h4>
               <h4><Link to="/faq" className="headerRight__faq" >FAQ</Link></h4>
               <h4><Link to="/privacypolicy" className="headerRight__ppolicy" >Privacy-Policy</Link></h4>
               <h4><Link to="/tc" className="headerRight__tc" >Terms&Conditions</Link></h4>
               
            </div>
        </div>
    )
}
