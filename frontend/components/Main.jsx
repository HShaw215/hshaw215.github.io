import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

const Main = () => {
    return (
        <>
        <NavBar />
        <div class="pic">
            <p>Insert Picture Here</p>
        </div>
        <div>
            <p>
                Hello, my name is Hunter Shaw. I am a software engineer currently working at ReKuberate, a Kubernetes cluster visualizer
                 and health monitor. My responsibilities are across the entire stack but I am passionate about backend development.
            </p>
            <p>
                Outside of coding I am passionate about hockey, reading, skiing, and DJing.
            </p>
        </div>
        </>
    )
}

export default Main;