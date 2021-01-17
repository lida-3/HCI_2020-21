import React from "react"
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import HeaderBottom from "../components/HeaderBottom"
import Doniraj from "../components/Doniraj"


const DonirajPage = () => (
  <main>
    <NavigationHeader activeTab = "Doniraj" />
    <Doniraj/>
    <Footer />
    <HeaderBottom/>
  </main>
)

export default DonirajPage