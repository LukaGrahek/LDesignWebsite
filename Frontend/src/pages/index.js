// index
// Stores and displays the elements for the main (index) page

import React from "react" // Imports react framework

import Layout from '../components/layout' // Imports the layour element
import HomeSlide from '../components/homepage' // Imports the homepage slider element
import About from '../components/about' // Imports the about section element
import Services from '../components/services' // Imports the services section element
import Projects from '../components/projects' // Imports the projects section element
import Process from '../components/process' // Imports the process section element  
import Review from '../components/review' // Imports the review section slider element
import ReviewHeader from '../components/reviewHeader' // Imports the review section header element
import Contact from '../components/contact' // Imports the contact sedction element


import '../styles/indexStyle.css' // Imports styling

const IndexPage = () => {

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

export default IndexPage