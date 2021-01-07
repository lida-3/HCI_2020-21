import React from "react"
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import Homepage from "../components/Homepage"

const NaslovnicaPage = () => (
  <main>
    <NavigationHeader activeTab = "Naslovnica" />
    <Homepage />
    <Footer />
  </main>
)

export default NaslovnicaPage