import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import '../stylesheet/styles.css'
import hunter from '../assets/hunterWide.JPG'

const Main = () => {
    return (
        <div class="main">
            <hr class='line'></hr>
            <div class='text'>
                <img src={hunter} class="pic" alt="Hunter Shaw"></img>
                <div class="bio">
                    <p>
                        Hello, I'm Hunter. I am a software engineer living in New York. Currently I am working at 
                        <a class='project' href='https://rekuberate.org'> ReKuberate</a>
                        , an Open Source Kubernetes cluster monitoring tool with visualization capabilities.
                        My responsibilities are across the entire stack but my true passion is in
                        backend development.
                    </p>
                    <p>
                        My most recent project that I am still currently working on is 
                        <a class='project' href='https://conquest-7ffadf4c2da1.herokuapp.com/'> Conquest</a>
                        , a testing suite tracking tool used to promote test driven development across teams.
                    </p>
                    <p>
                        Outside of coding I am passionate about hockey, reading, skiing, and DJing. If you want to talk more about
                        coding or any of my hobbies, feel free to reach out to me via email or on LinkedIn.
                    </p>
                </div>
            </div>
            
        </div> 
    )
}

export default Main;