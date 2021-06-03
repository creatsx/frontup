import React , {useEffect, useState} from 'react'
import "../styles/Header.css"
import logo from "../../static/logo.png";
import { Link } from 'react-router-dom';


export default function Header() {
    const [show, handleShow] =  useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    },[]);
    return (
        <div className={`header ${show && "header__purple"}`}>
            <div className="header__left">
              <img src={logo} alt="logo" />
              <h2>Spancer</h2>
              <div className="header__leftlinks">
                <h3>
                   <Link to="/tc" className="header__leftlinksH3" >Term of Use</Link> 
                </h3>
                <h3>
                   <Link to="/policies" className="header__leftlinksH3" >
                       Policies
                   </Link>
                </h3>
              </div>
            </div>
            <div className="header__right">
               <button className="header__btn">
                <p>
                    Download App
                </p>
                </button>
            </div>
        </div>
    )
}
