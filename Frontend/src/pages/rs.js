// index
// Stores and displays the elements for the main (index) page

import React from "react" // Imports react framework

import Layout from '../rscomponents/rslayout' // Imports the layour element
import HomeSlide from '../rscomponents/rshomepage' // Imports the homepage slider element
import About from '../rscomponents/rsabout' // Imports the about section element
import Services from '../rscomponents/rsservices' // Imports the services section element
import Projects from '../rscomponents/rsprojects' // Imports the projects section element
import Process from '../rscomponents/rsprocess' // Imports the process section element  
import Review from '../rscomponents/rsreview' // Imports the review section slider element
import ReviewHeader from '../rscomponents/rsreviewHeader' // Imports the review section header element
import Contact from '../rscomponents/rscontact' // Imports the contact sedction element


import '../styles/indexStyle.css' // Imports styling

const rs = () => {

  return (
    <Layout>
      <HomeSlide/>
      <About/>
      <Services/>
      <Projects/>
      <Process />
      <ReviewHeader />
      <Review />
      <Contact />
    </Layout>
  )
}

export default rs