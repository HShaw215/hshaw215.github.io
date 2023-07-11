import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import '../stylesheet/styles.css'
import hunter from '../assets/hunterWide.JPG'

const Main = () => {
    return (
        <div class="main">
            <NavBar />
            <hr class='line'></hr>
            <div class='text'>
                <img src={hunter} class="pic" alt="Hunter Shaw"></img>
                <div class="bio">
                    <p>
                        Hello, my name is Hunter Shaw. I am a software engineer currently working at 
                        <a id='rekuberate' href='https://rekuberate.org'> ReKuberate</a>
                        , a Kubernetes cluster visualizer
                        and health monitor. My responsibilities are across the entire stack but my true passion is in
                        backend development.
                    </p>
                    <p>
                        A list of my previous work can be found by going to the Projects link above. All of my portfolio projects
                        are starred at the top of my Github.
                    </p>
                    <p>
                        Outside of coding I am passionate about hockey, reading, skiing, and DJing. If you want to talk more about
                        coding or even any of my hobbies, feel free to reach out to me via email or on LinkedIn.
                    </p>
                </div>
            </div>
            
        </div> 
    )
}

export default Main;