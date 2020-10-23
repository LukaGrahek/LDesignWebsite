import React from 'react'

import '../styles/headerStyle.css'
import { Link } from 'react-scroll'

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

 const scrollProjects = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight*0.46, behavior: 'smooth'});
 };

 const scrollProcess = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight*0.66, behavior: 'smooth'});
 };

 const scrollContact = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight, behavior: 'smooth'});
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
                    <Link onClick={scrollProjects}>
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <Link onClick={scrollProcess}>
                        PROCESS
                    </Link>
                </li>
                <li>
                    <Link onClick={scrollContact}>
                        CONTACT
                    </Link>
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