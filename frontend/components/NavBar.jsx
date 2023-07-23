import React from 'react';
import '../stylesheet/styles.css'

const NavBar = () => {
    return (
        <>
        <header class='nav'>
            <a class='name' href='./index.html'>Hunter Shaw</a>
            <nav class='menu'>
                <a class='menuItem' href='https://github.com/HShaw215'>Portfolio</a>
                <a class='menuItem' href='https://www.linkedin.com/in/hshaw215/'>LinkedIn</a>
                <a class='menuItem' href='https://youtu.be/EvpbJDMiep4'>Talks</a>
                <a class='menuItem' href='mailto:hu.shaw215@gmail.com'>Contact</a>
            </nav>
        </header>
        </>
    )
}

export default NavBar