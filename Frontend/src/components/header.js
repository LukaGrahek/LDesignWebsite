import React from 'react'

import '../styles/headerStyle.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

 const scrollAbout = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight*0.111, behavior: 'smooth'});
 };

 const scrollServices = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight*0.245, behavior: 'smooth'});
 };


const Header = () => {
    return (
        <header id='Header' >
            <h1 id= "clientTitle" onClick={scrollTop}>
                L E D A     L I T R I C I N
            </h1>
            <ul>
                <li>
                    <Link onClick={scrollTop} >
                        HOME
                    </Link>
                </li>
                <li>
                    <Link onClick={scrollAbout}>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link onClick={scrollServices}>
                        SERVICES
                    </Link>
                </li>
                <li>
                    PROJECTS
                </li>
                <li>
                    PROCESS
                </li>
                <li>
                    CONTACT
                </li>
                <li id="languageSelect">
                    EN
                </li>
                <li id="languageSelect">
                    |
                </li>
                <li id="languageSelect">
                    SR
                </li>
            </ul>
        </header>
    )
}


export default Header