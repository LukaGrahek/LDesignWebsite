//react Imports
import React from "react"

//JS function imports
import Layout from '../components/layout'
import HomeSlide from '../components/homepage'
import About from '../components/about'
import Services from '../components/services'
import Projects from '../components/projects'
import Process from '../components/process'
import Review from '../components/review'
import ReviewHeader from '../components/reviewHeader'
import Contact from '../components/contact'
import Footer from '../components/footer'

import '../styles/indexStyle.css'

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