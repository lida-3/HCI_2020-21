import React from 'react'

import styles from './style.module.css'
import Navigation from '../Navigation'

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
      <Navigation activeTab={activeTab} />
  </section>
)
export default NavigationHeader