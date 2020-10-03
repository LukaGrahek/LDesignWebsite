import React from 'react'

import '../styles/headerStyle.css'

const Header = () => {
    return (
        <header>
            <h1 id= "clientTitle">
                L E D A     L I T R I C I N
            </h1>
            <ul>
                
                <li>
                    HOME
                </li>
                <li>
                    ABOUT
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