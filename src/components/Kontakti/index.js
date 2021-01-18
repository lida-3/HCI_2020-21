import React, {useState} from 'react'
import styles from './style.module.css'
import buttonStyles from '../Buttons/style.module.css'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  
  } from "reactstrap"

  
const Kontakt =() =>{
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
    <div className={styles.full}>
            <div className={styles.leftdiv}>
                <p className={styles.adresa}><strong>HUMAN SAPIENS </strong><br/>
                Spinutska 37<br/>
                Split 21000</p>
                <p className={styles.tel}><strong>mob:</strong> +385-123456789 <br/>
                <strong>tel:</strong> +385-21123456</p>
                <p className={styles.email}><strong>e-mail:</strong> <br/>
                human.sapiens@gmail.com</p>
                <br/>
                <h3>ŽELIŠ NAM SE PRIDRUŽITI?</h3>
                <p className={styles.volontirajP}>
                    Voliš pomagati drugima?<br />
                    Imate slobodnog vremena?<br />
                    Imamo prijedlog za Vas: <br />Volontiraj!<br />
                    Popuni prijavu klikom na sljedeće:<br/>
                    <button className={buttonStyles.volontiraj} onClick={toggle}>Volontiraj</button>
                    
                </p>
                <Modal isOpen={modal} toggle={toggle} className={styles.modalic}>
                  <ModalHeader toggle={toggle}>
                      PRIJAVA ZA VOLONTIRANJE
                  </ModalHeader>
                  <ModalBody>
                      <p>Odaberite udrugu:</p>
                   <select className={styles.odabir}>
                   <option value="andeli">Anđeli</option>
                    <option value="bestie">Bestie</option>
                    <option value="moST">moST</option>
                    <option value="dica">Naša dica</option>
                    <option value="skacst">Skac ST</option>
                    <option value="sunce">Sunce</option>
                   </select>

                   <p>Koliko često ste u mogućnosti volonitari?</p>
                   <p className={styles.check}>
                   <label><input type="radio" value="tjedno"/>    Tjedno</label><br/>
                   <label><input type="radio" value="mjesecno"/>    Mjesečno</label><br/>
                   <label><input type="radio" value="jednom"/>   Jednokratno</label><br/>
                   </p>
                   <button type="submit" className={buttonStyles.submit} onClick={toggle}>Volontiraj</button>
                  </ModalBody>
                  <ModalFooter>
                  <Button onClick={toggle}>
                      Odustani
                    </Button>
                  </ModalFooter>
                </Modal>
            
              
            </div>
            <div className={styles.rightdiv}>
                <h3 className={styles.naslov}> ŽELIŠ DONIRATI MATERIJALNA DOBRA?</h3>
                <p className={styles.donirajP}>
                    <br/>
                    Imaš viška odjeće, obuće ili igračke koje nikom ne trebaju? 
                    Želiš pokloniti školski pribor ili stare knjige? Kontaktirajte nas porukom
                    i javit ćemo Vam se s informacijama koja je najbliža udruga kojoj možete donirati.   

                </p>
                <div className={styles.forma}>
                <div  className="form-group">
                    <label htmlFor="username" className={styles.formlog}>Ime i prezime</label>
                    <input type="username" className="form-control" placeholder="Unesite ime i prezime"/>
                </div>
                <div  className="form-group">
                    <label htmlFor="tel" className={styles.formlog}>Broj telefona</label>
                    <input type="tel" className="form-control" placeholder="Unesite broj"/>
                </div>
                <div className="form-group">
                    <p>Poruka</p>
                    <textarea type="message" id="message" className={styles.poruka} placeholder="Unesite poruku..."></textarea>
                </div>
                <button type="submit" className={buttonStyles.poruka}>Pošalji</button>
                </div>
            </div>
    </div>
    )
};

export default Kontakt
