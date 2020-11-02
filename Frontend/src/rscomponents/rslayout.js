// layout
// acts as the 'template' the page:
// includes a header above all the other elements and a footer below all other elements

import React from 'react' // imports react framework

import Header from '../rscomponents/rsheader' // Imports the header element
import Footer from '../rscomponents/rsfooter' // Imports the footer element

// Renders the layout
const Layout = (props) => {
    return (
        <div>
            <Header />
            
            {props.children}

            <Footer />
    
        </div>
    )
}

export default Layout