import React from "react"
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import Homepage from "../components/Homepage"
import HeaderBottom from "../components/HeaderBottom"


const NaslovnicaPage = () => (
  <main>
    <NavigationHeader activeTab = "Naslovnica" />
    <Homepage /> 
    <Footer />
    <HeaderBottom/>
  </main>
)

export default NaslovnicaPage