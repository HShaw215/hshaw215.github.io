import React, { useState } from 'react';
import '../stylesheet/styles.css'

const NavBar = () => {

    return (
        <>
        <div class='nav'>
            {/* <button onClick = {() => location.href='https://github.com/HShaw215'}>Projects</button>
            <button onClick = {() => location.href='https://www.linkedin.com/in/hshaw215/'} >LinkedIn</button>
            <button onClick = {() => location.href='mailto:hu.shaw215@gmail.com'}>Email</button> */}
            <a class='name' href='./index.html'>Hunter Shaw</a>
            <div class='links'>
                <a href='https://github.com/HShaw215'>Projects</a>
                <a href='https://www.linkedin.com/in/hshaw215/'>LinkedIn</a>
                <a href='mailto:hu.shaw215@gmail.com'>Email</a>
                <a href='https://youtu.be/EvpbJDMiep4'>Tech Talk</a>
            </div>
            
        </div>
        </>
    )

}

export default NavBar