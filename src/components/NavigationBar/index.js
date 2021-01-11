import React, {useState} from 'react'
import { navTabs } from '../../constants/const'
import styles from './style.module.css'
import buttonStyles from '../Buttons/style.module.css'
import LoginForm from '../LoginForm'
import Register from '../Register'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Col
  } from "reactstrap"
import { Link } from 'gatsby'
import Login from '../LoginForm'
import {myLocalStorage} from '../../helper'

const loggedIn = () => !!myLocalStorage.getItem('loggedIn')
const NavigationBar = ({ activeTab, useThisStyle, props }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return(
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
        <div className = {styles.razmak}>
            <button onClick={toggle} className ={buttonStyles.primary}> {loggedIn() ? 'Odjava' : 'Prijava'}</button>
        </div>
        <Modal size='lg' isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>
                    <p className={styles.modalpg}>PRIJAVA I REGISTRACIJA</p>
                  </ModalHeader>
                  <ModalBody>
                    <Container>
                        <Row>
                            <Col md="5"><Login /></Col>
                            <Col md="7"><Register /></Col>
                        </Row>
                    </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle} >
                            Odustani
                        </Button>
                  </ModalFooter>
                </Modal>      
    </nav>
)
}

export default NavigationBar


