import React from "react"
import styles from '../layouts/notfound.module.css'
import {navigate} from 'gatsby'

const NotFoundPage = () => {
return (
  <div className={styles.container}>
    <div className={styles.txtdiv}>
    <h1>Upss.. stranica nije pronađena</h1>
    <p>Tražena stranica ne postoji, možete se vratiti na naslovicu.</p>
    </div>
    <div className={styles.buttondiv}>
      <button onClick={()=>navigate('/naslovnica')}>Povratak na naslovicu</button>
    </div>
    <div className={styles.imgdiv}>
      <img className={styles.img} src={require('../images/404error.jpg')}></img>
    </div>
    
  </div>
)
}
export default NotFoundPage



