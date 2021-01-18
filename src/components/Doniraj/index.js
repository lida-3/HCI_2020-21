import React,{useState} from 'react'
import styles from './style.module.css'
import buttonStyles from '../Buttons/style.module.css'
import Autizam from "../DonirajImages/Autizam"
import Bestie from "../DonirajImages/Bestie"
import CrveniKriz from "../DonirajImages/CrveniKriz"
import Krijesnica from "../DonirajImages/Krijesnica"
import Most from "../DonirajImages/Most"
import Palcici from "../DonirajImages/Palcici"
import Pupoljci from "../DonirajImages/Pupoljci"
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  
  } from "reactstrap"


import Swal from "sweetalert2"

function ok() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    text:'Vaša donacija je zaprimljena',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
  
  })

}

 const Doniraj = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

 

  return (
    <div className={styles.background}>
      <div className = {styles.cardsContainer}>
        <div className={styles.cards}>
          <div className={styles.image}>
              <Autizam />
          </div>
            <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>SUZAH</div>
              <div className={styles.subtitle}>Savez udruga za autizam</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.primary} onClick={toggle}>Doniraj</button>
              </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={toggle}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle}>Odustani</button>
                   </div>  

                  </ModalBody>

            </Modal>

        </div>
        <div className={styles.cards}>
          <div className={styles.image}>
              <Bestie/>
          </div>
          <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>Beštie</div>
              <div className={styles.subtitle}>Zaklada za zaštitu životinja</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.primary} onClick={toggle1}>Doniraj</button>
              </div>
          </div>
          <Modal isOpen={modal1} toggle1={toggle1} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} className={buttonStyles.potvrdi} onClick={toggle1}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle1}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>
        <div className={styles.cards}>
          <div className={styles.image}>
              <CrveniKriz />
          </div>
          <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>Crveni križ</div>
              <div className={styles.subtitle}>Humanitarno društvo</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.primary} onClick={toggle2}>Doniraj</button>
                
              </div>
          </div>
          <Modal isOpen={modal2} toggle={toggle2} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={toggle2}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle2}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>
      


      </div>
    </div>
  );
 }


export default Doniraj

  