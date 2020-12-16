 import React from 'react'
 import { navTabs } from '../../constants/const'
import styles from './style.module.css'
 
 
  const NavigationBar = ({ activeTab, useThisStyle }) => (
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(tab => <li className={tab=== activeTab ? styles.active : ''}>
            {tab}</li>
        )}
    </nav>
)

  export default NavigationBar


