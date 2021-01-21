import React from 'react'
import styles from './style.module.css'
import email from '../../images/emailB.png'          //jedan nacin ucitavanja slika

//drugi nacin za phone i ostale
  const Footer = () => (
    <footer className={styles.footer}>
          
        <span><img src={email} alt="mail icon"></img>human.sapiens@email.com</span>
                
        <span><img src={require('../../images/phoneB.png')} ></img>  +0385911122334</span>
        <span>Pratite nas na društvenim mrežama:
          <a href ='https://www.facebook.com/' target="_blank"><img src={require('../../images/facebookB.png')} ></img></a>
          <a href='https://www.instagram.com/' target="_blank"><img src={require('../../images/instagramB.png')} ></img> </a>
          <a href='https://twitter.com/' target="_blank"> <img src={require('../../images/twitterB.png')} ></img> </a>
        </span>
        
    </footer>
  )
 
  export default Footer