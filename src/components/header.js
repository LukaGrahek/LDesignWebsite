import React from 'react'

import '../styles/headerStyle.css'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

 const scrollAbout = () =>{
    window.scrollTo({top: 1700, behavior: 'smooth'});
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
                    SERVICES
                </li>
                <li>
                    PORTFOLIO
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