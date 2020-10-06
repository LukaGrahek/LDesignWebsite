//react Imports
import React from "react"

//JS function imports
import Layout from '../components/layout'
import HomeSlide from '../components/homepage'
import About from '../components/about'
import Services from '../components/services'


import '../styles/indexStyle.css'

const IndexPage = () => {

  return (
    <Layout>
      <HomeSlide/>
      <About/>
      <Services/>
    </Layout>
  )
}

export default IndexPage