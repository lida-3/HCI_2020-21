import React, { useState } from "react"
import { Link } from "gatsby"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './style.module.css'
import dots from "../../images/iconDots.png"
import buttonStyles from '../Buttons/style.module.css'
import LoginForm from '../LoginForm'
import Register from '../Register'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  
  } from "reactstrap"
import {myLocalStorage} from '../../helper'
import {navigate} from 'gatsby'

const loggedIn = () => !!myLocalStorage.getItem('loggedIn')
const Header = () => {
  const [dropdownOpen, setOpen] = useState(false)
  const [modal, setModal] = useState(false)
 
    const [isLoggedIn] = useState(loggedIn())
    const toggle2 = () => !isLoggedIn ? setModal(!modal) : (myLocalStorage.removeItem("loggedIn"), navigate('/'))
  const toggle = () => setOpen(!dropdownOpen)
  const toggleAll = () => {
    setOpen(!dropdownOpen)
    setModal(!modal)
  }
  return (
    <div className={styles.nav}>
      
        <Link
          
          to="/naslovnica"
          activeStyle={{
            color: '#B4717B',
            fontWeight: 700
          }}
          className={styles.navbarName}
          activeclassname={styles.navbarName__active}
        >
          NASLOVNICA
        </Link>
        <Link
          to="/dogadaji"
          activeStyle={{
            color: '#B4717B',
            fontWeight: 700
          }}
          className={styles.navbarName}
          activeclassname={styles.navbarName__active}
        >
          DOGAĐAJI
        </Link>
        <Link
          to="/doniraj"
          activeStyle={{
            color: '#B4717B',
            fontWeight: 700
          }}
          className={styles.navbarName}
          activeclassname={styles.navbarName__active}
        >
          DONIRAJ
        </Link>
        <Link
                to="/naseprice"
                activeStyle={{
                  color: '#B4717B',
                  fontWeight: 700
                }}
                className={styles.navbarName}
                activeclassname={styles.navbarName__active}
              >
                NAŠE PRIČE
              </Link>

      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
        <DropdownToggle caret className={styles.button}>
          <img className={styles.iconDots} src={dots} alt="dots"></img>
        </DropdownToggle>
        <DropdownMenu>
          <div className={styles.dropUp}>
            <div className={styles.iconContainer}>
            <Link
            to="/kontakt"
            activeStyle={{
              color: '#B4717B',
              fontWeight: 700
            }}
            className={styles.navbarName}
            activeclassname={styles.navbarName__active}
          >
            KONTAKT
          </Link>
            </div>
            <div
              className={styles.iconContainer}
            >
              <a
                href="#"
                onClick={toggleAll}
                className={styles.navbarName}
                activeclassname={styles.navbarName__active}
              >
              </a>
              <div className={styles.navbarName}>
            <button onClick={toggle2} className ={buttonStyles.primaryM}> {isLoggedIn ? 'Odjava' : 'Prijava'}</button>
        </div>
              <Modal size='sm' isOpen={modal} toggle={toggle2}>
                  <ModalHeader toggle={toggle2}>
                    <p className={styles.modalpg}>PRIJAVA I REGISTRACIJA</p>
                  </ModalHeader>
                  <ModalBody>
                    <LoginForm />
                    <Register />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle2} >
                            Odustani
                        </Button>
                  </ModalFooter>
                </Modal>      
            </div>
            
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default Header

