import React from 'react'
import styles from './style.module.css'
import Navigation from '../Navigation'
import Logo from '../Logo'

const NavigationHeader = ({ activeTab }) => (
  <section  className={styles.Section}>
     <div>
       <Logo/>
     </div>

      <div className={styles.navigationHeader}>
        <Navigation activeTab={activeTab} />
      </div>  
  </section>
)
export default NavigationHeader