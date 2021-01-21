import React from 'react'
import styles from './style.module.css'
import logo from "../../images/logo.png"
import {Link} from "gatsby"

const Logo = () => (
  <section className={styles.logo}>
    <Link to = '/naslovnica'><img
          className={styles.logoImg}
          src={logo}
          alt="l"
          width="100%"
        /></Link>
  </section>
)

export default Logo