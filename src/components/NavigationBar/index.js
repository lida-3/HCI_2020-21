import React from 'react'
import { navTabs } from '../../constants/const'
import styles from './style.module.css'
import buttonStyles from '../Buttons/style.module.css'
 
 
import { Link } from 'gatsby'

const NavigationBar = ({ activeTab, useThisStyle }) => (
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
        <div className = {styles.razmak}>
            <button className ={buttonStyles.primary}>PRIJAVI SE</button>
        </div>
    </nav>
)

export default NavigationBar


