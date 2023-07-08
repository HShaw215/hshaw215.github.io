import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import '../stylesheet/styles.css'
import hunter from '../assets/hunterWide.JPG'

const Main = () => {
    return (
        <div class="main">
            <NavBar />
            <div class="pic">
                <img src={hunter} class="headshot"></img>
            </div>
            <div class="body">
                <p>
                    Hello, my name is Hunter Shaw. I am a software engineer currently working at ReKuberate, a Kubernetes cluster visualizer
                    and health monitor. My responsibilities are across the entire stack but I am passionate about backend development.
                </p>
                <p>
                    Outside of coding I am passionate about hockey, reading, skiing, and DJing.
                </p>
            </div>
        </div> 
    )
}

export default Main;