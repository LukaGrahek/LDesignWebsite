//index
//Stores and displays the elements for the main (index) page

import React from "react" //imports react framework

import Layout from '../components/layout' //imports the layour element
import HomeSlide from '../components/homepage' //imports the homepage slider element
import About from '../components/about' // imports the about section element
import Services from '../components/services' //imports the services section element
import Projects from '../components/projects' // imports the projects section element
import Process from '../components/process' // imports the process section element  
import Review from '../components/review' // imports the review section slider element
import ReviewHeader from '../components/reviewHeader' // imports the review section header element
import Contact from '../components/contact' //imports the contact sedction element
import Footer from '../components/footer' // imports the footer element

import '../styles/indexStyle.css' //imports styling

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
      <Footer />
    </Layout>
  )
}

export default IndexPage