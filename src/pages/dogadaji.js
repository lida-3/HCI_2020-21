import React from "react"
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import HeaderBottom from "../components/HeaderBottom"
import DogadajiContent from "../components/DogadajiContent"


const DogadajiPage = () => (
  <main>
    <NavigationHeader activeTab = "Događaji" />
    <DogadajiContent/>
    <Footer />
    <HeaderBottom/>
  </main>
)

export default DogadajiPage