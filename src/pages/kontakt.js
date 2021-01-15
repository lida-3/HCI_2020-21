import React from "react"
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import HeaderBottom from "../components/HeaderBottom"
import Kontakt from "../components/Kontakti"

const KontaktPage = () => (
  <main>
    <NavigationHeader activeTab = "Kontakt" />
    <Kontakt />
    <Footer />
    <HeaderBottom/>
  </main>
)

export default KontaktPage