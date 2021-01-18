import React, { useState } from "react";
import buttonStyles from '../Buttons/style.module.css'
import styles from './style.module.css'
import {navigate} from 'gatsby'
import {myLocalStorage} from '../../helper'
 
const users = [
    {
      username: 'ana',
      password: '123'
    },
    {
      username: "ivan",
      password: "456"
    },
    {
        username: "petar",
        password: "aa22"
    },
    ]
 
const Login = () => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
 
    const submit = () => {
        setError(false)
        setLoading(true)
        setTimeout(() => {
          const loginSuccessful = !!users.find(user => user.username === username && user.password === password)
          console.log(loginSuccessful)
          setLoading(false)
          if (loginSuccessful) {
            myLocalStorage.setItem("loggedIn", username)
            setError('Uspješna prijava')
            return navigate('/profile')
          }
            setError('Pogrešno ime ili lozinka')
        }, 2000)
      }
        return (
            <main className={styles.background} onKeyDown={key => {
                if (key.key === "Enter")
                  return submit()
              }}>
            <div >
                <div className={styles.divlog}>
                    <h3>Prijava</h3>
                    <p >Za korisnike koji već imaju profil</p>
                </div>
                <div  className="form-group">
                    <label htmlFor="username" className={styles.formlog}>Korisničko ime</label>
                    <input type="username" className="form-control" placeholder="Unesite ime" onChange={e => setUserName(e.target.value)}/>
                </div>
 
                <div className="form-group">
                    <label htmlFor="password" className={styles.formlog}>Lozinka</label>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} placeholder="Unesite lozinku" />
                </div>
 
                <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
                <button className={buttonStyles.quaternary} disabled={loading} onClick={() => submit()}>{!loading ? "Prijavi se" : "U tijeku..."}</button>
                
            </div>
        </main>
        );
}
 
export default Login