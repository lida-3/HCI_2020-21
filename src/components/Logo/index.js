import React from 'react'
import styles from './style.module.css'
import logo from "../../images/logo.png"

const Logo = () => (
  <section className={styles.logo}>
    <img
          className={styles.logoImg}
          src={logo}
          alt="l"
          width="100%"
        />
  </section>
)

export default Logo