import React, { useState } from 'react';
import '../stylesheet/styles.css'

const NavBar = () => {

    return (
        <>
        <nav>
            <button onClick = {() => location.href='https://github.com/HShaw215'}>Projects</button>
            <button onClick = {() => location.href='https://www.linkedin.com/in/hshaw215/'} >LinkedIn</button>
            <button onClick = {() => location.href='hu.shaw215@gmail.com'}>Email</button>
        </nav>
        </>
    )

}

export default NavBar