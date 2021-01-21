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
import Maestral from "../DonirajImages/Maestral"
import {
    Modal,
    ModalBody,
  } from "reactstrap"


import Swal from "sweetalert2"

function ok() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor: '#cc9ea5',
    text:'Vaša donacija je zaprimljena',
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

const [modal3, setModal3] = useState(false);
const toggle3 = () => setModal3(!modal3);

const [modal4, setModal4] = useState(false);
const toggle4 = () => setModal4(!modal4);

const [modal5, setModal5] = useState(false);
const toggle5 = () => setModal5(!modal5);

const [modal6, setModal6] = useState(false);
const toggle6 = () => setModal6(!modal6);

const [modal7, setModal7] = useState(false);
const toggle7 = () => setModal7(!modal7);




 

  return (
    <div className={styles.background}>
      <div className = {styles.cardsContainer}>
        <div className={styles.cards}>
          <div className={styles.image}>
              <Autizam ></Autizam>
          </div>
            <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>SUZAH</div>
              <div className={styles.subtitle}>Savez udruga za autizam</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.doniraj} onClick={toggle}>Doniraj</button>
              </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={() => {
                        toggle();
                        ok();}}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle}>Odustani</button>
                   </div>  

                  </ModalBody>

            </Modal>

        </div>
        <div className={styles.cards}>
          <div className={styles.image}>
              <Bestie></Bestie>
          </div>
          <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>Beštie</div>
              <div className={styles.subtitle}>Zaklada za zaštitu životinja</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.doniraj} onClick={toggle1}>Doniraj</button>
              </div>
          </div>
          <Modal isOpen={modal1} toggle={toggle1} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} className={buttonStyles.potvrdi} onClick={() => {
                        toggle1();
                        ok();}}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle1}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>
        <div className={styles.cards}>
          <div className={styles.image}>
              <CrveniKriz ></CrveniKriz>
          </div>
          <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>Crveni križ</div>
              <div className={styles.subtitle}>Humanitarno društvo</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.doniraj} onClick={toggle2}>Doniraj</button>
                
              </div>
          </div>
          <Modal isOpen={modal2} toggle={toggle2} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={() => {
                        toggle2();
                        ok();}}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle2}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>
        <div className={styles.cards}>
           <div className={styles.image}>
              <Palcici ></Palcici>
           </div>
           <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>Palčići</div>
              <div className={styles.subtitle}>Klub roditelja nedonoščadi</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.doniraj} onClick={toggle3}>Doniraj</button>
              </div>
          </div>
          <Modal isOpen={modal3} toggle={toggle3} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={() => {
                        toggle3();
                        ok();}}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle3}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>
        <div className={styles.cards}>
           <div className={styles.image}>
              <Pupoljci ></Pupoljci>
           </div>
           <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>Brački pupoljci</div>
              <div className={styles.subtitle}>Udruga za djecu s teškoćama u razvoju</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.doniraj} onClick={toggle4}>Doniraj</button>
              </div>
          </div>
          <Modal isOpen={modal4} toggle={toggle4} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={() => {
                        toggle4();
                        ok();}}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle4}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>
        <div className={styles.cards}>
           <div className={styles.image}>
              <Krijesnica ></Krijesnica>
           </div>
           <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>Krijesnica</div>
              <div className={styles.subtitle}>Udruga za pomoć djeci s malignim bolestima</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.doniraj} onClick={toggle5}>Doniraj</button>
              </div>
          </div>
          <Modal isOpen={modal5} toggle={toggle5} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={() => {
                        toggle5();
                        ok();}}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle5}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>
        <div className={styles.cards}>
           <div className={styles.image}>
              <Most ></Most>
           </div>
           <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>moST</div>
              <div className={styles.subtitle}>Centar za beskućnike i smanjenje siromaštva</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.doniraj} onClick={toggle6}>Doniraj</button>
              </div>
          </div>
          <Modal isOpen={modal6} toggle={toggle6} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati (u kunama):</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={() => {
                        toggle6();
                        ok();}}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle6}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>
        <div className={styles.cards}>
           <div className={styles.image}>
              <Maestral ></Maestral>
           </div>
           <div className={styles.cardMediaContainer}>
              <div className={styles.cardMediaHeading}>Maestral</div>
              <div className={styles.subtitle}>Dom za djecu bez odgovarajuće roditeljske skrbi</div>
              <div className={styles.buttonContainer}>
                <button className={buttonStyles.doniraj} onClick={toggle7}>Doniraj</button>
              </div>
          </div>
          <Modal isOpen={modal7} toggle={toggle7} className={styles.modalic}>
                  <ModalBody>
                      <p className={styles.textPop}>Upišite iznos koji želite donirati:</p>
                       <div className={styles.input}><input type="text" className={styles.textField}></input></div>
                    <div className={styles.modalButtons}> 
                        <button  type="button"  className={buttonStyles.potvrdi} onClick={() => {
                        toggle7();
                        ok();}}>Potvrdi</button>
                        <button type="submit" className={buttonStyles.odustani} onClick={toggle7}>Odustani</button>
                   </div>  
                  </ModalBody>

            </Modal>
            
        </div>


      </div>
    </div>
  );
 }


export default Doniraj

  