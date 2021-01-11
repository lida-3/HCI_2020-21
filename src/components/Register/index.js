import React, { Component } from "react";
import styles from '../LoginForm/style.module.css'
import buttonStyles from '../Buttons/style.module.css'
const Register = () => {
    
        return (
            <form>
                <h3 className={styles.formlog}>Registracija</h3>

                <div className="form-group">
                    <label className={styles.formlog}>Ime</label>
                    <input type="text" className="form-control" placeholder="Ime" required />
                </div>

                <div className="form-group">
                    <label className={styles.formlog}>Prezime</label>
                    <input type="text" className="form-control" placeholder="Prezime" required />
                </div>

                <div className="form-group">
                    <label className={styles.formlog}>Email</label>
                    <input type="email" className="form-control" placeholder="Email adresa" required/>
                </div>
                <div className="form-group">
                    <label className={styles.formlog}>Korisničko ime</label>
                    <input type="username" className="form-control" placeholder="Korisničko ime" required />
                </div>

                <div className="form-group" >
                    <label className={styles.formlog}>Lozinka</label>
                    <input type="password" className="form-control" placeholder="Unesite lozinku" required />
                </div>

                <button type="submit" className={buttonStyles.quaternary}>Registriraj se</button>
  
            </form>
        )
    
}

export default Register