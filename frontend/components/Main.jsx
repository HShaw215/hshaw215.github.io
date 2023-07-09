import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import '../stylesheet/styles.css'
import hunter from '../assets/hunterWide.JPG'

const Main = () => {
    return (
        <div class="main">
            <NavBar />
            <div class='text'>
                <img src={hunter} class="pic" alt="Hunter Shaw"></img>
                <hr></hr>
                <div class="bio">
                    <p>
                        Hello, my name is Hunter Shaw. I am a software engineer currently working at 
                        <a id='rekuberate' href='https://rekuberate.org'> ReKuberate</a>
                        , a Kubernetes cluster visualizer
                        and health monitor. My responsibilities are across the entire stack but I am passionate about backend development.
                    </p>
                    <p>
                        A list of my previous work can be found by going to the projects link on the left. All of my most recent projects
                        are starred at the top at the top of my Github.
                    </p>
                    <p>
                        Outside of coding I am passionate about hockey, reading, skiing, and DJing.
                    </p>
                </div>
            </div>
            
        </div> 
    )
}

export default Main;