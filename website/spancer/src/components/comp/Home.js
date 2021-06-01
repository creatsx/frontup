import React from 'react'
import "../styles/Home.css";
import {Button} from "@material-ui/core";

export default function Home() {
    return (
        <div className="home">
            <div className="home__left" >
                <h2>Building Economy of Ideas</h2>
                <p>
                    Speaking Your Mind, Annoymous Social Media Networks for College Campuses
                    <br />
                    or
                    <br />
                    Virutal Campus of Your College                     
                </p>
                <Button color="default" variant="contained" >Download Spancer App</Button>
            </div>
            <div className="home__right">

            </div>
        </div>
    )
}
