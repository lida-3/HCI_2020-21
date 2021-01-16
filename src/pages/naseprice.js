import React from "react"
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import HeaderBottom from "../components/HeaderBottom"
import BlogContainers from "../modules/BlogContainer"



const NasePricePage = () => (
  <main>
    <NavigationHeader activeTab = "Naše priče" />
    <BlogContainers />
    <Footer />
    <HeaderBottom/>

  </main>
)

export default NasePricePage