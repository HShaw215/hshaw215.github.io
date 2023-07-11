import React, { useState } from 'react';
import '../stylesheet/styles.css'

const NavBar = () => {

    return (
        <>
        <div class='nav'>
            <a class='name' href='./index.html'>Hunter Shaw</a>
            <div class='menu'>
                <a class='menuItem' href='https://github.com/HShaw215'>Projects</a>
                <a class='menuItem' href='https://www.linkedin.com/in/hshaw215/'>LinkedIn</a>
                <a class='menuItem' href='mailto:hu.shaw215@gmail.com'>Email</a>
                <a class='menuItem' href='https://youtu.be/EvpbJDMiep4'>Tech Talk</a>
            </div>
        </div>
        </>
    )

}

export default NavBar