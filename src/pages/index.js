//react Imports
import React from "react"

//JS function imports
import Layout from '../components/layout'
import HomeSlide from '../components/homepage'
import About from '../components/about'


import '../styles/indexStyle.css'

const IndexPage = () => {

  return (
    <Layout>
      <HomeSlide/>
      <About/>
    </Layout>
  )
}

export default IndexPage