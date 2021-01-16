import React from 'react'
import styles from './style.module.css'
import email from '../../images/email.png'          //jedan nacin ucitavanja slika

//drugi nacin za phone i ostale
  const Footer = () => (
    <footer className={styles.footer}>
          
        <span><img src={email} alt="mail icon"></img>human.sapiens@email.com</span>
                
        <span><img src={require('../../images/phone.png')} ></img>  +0385911122334</span>
        <span>Pratite nas na društvenim mrežama:
          <a href ='https://www.facebook.com/' target="_blank"><img src={require('../../images/facebook.png')} ></img></a>
          <a href='https://www.instagram.com/' target="_blank"><img src={require('../../images/instagram.png')} ></img> </a>
          <a href='https://twitter.com/' target="_blank"> <img src={require('../../images/twitter.png')} ></img> </a>
        </span>
        
    </footer>
  )
 
  export default Footer
  /*

 <ul>
 <li><img src={email} alt="mail icon"></img></li>
 <li>human.sapiens@email.com</li>
 <li><img src={require('../../images/phone.png')} ></img></li>
 <li>+0385911122334</li>
 <li>Pratite nas na društvenim mrežama:</li>
 <li><img src={require('../../images/facebook.png')} ></img> </li>
 <li><img src={require('../../images/instagram.png')} ></img> </li>
 <li><img src={require('../../images/twitter.png')} ></img> </li>
</ul>
*/

// mogu se footer elementi dodat i kao elementi liste ali mi je onda css problem