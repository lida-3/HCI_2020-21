import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from './style.module.css';
import buttonStyles from '../Buttons/style.module.css'
import {Link} from "gatsby"

const Homepage =() =>( 
    <div>
        <div className={styles.boxone}>
            <div className={styles.introdiv}>
                <h1 className={styles.headings}>HUMAN SAPIENS</h1>
                <p className={styles.paragraphs}>
                    Dobrodošli na stranicu za humanitarne događaje i donacije! <br />
                    Želiš pomoći i činiti dobra djela, ali ne znaš gdje i kako početi? Na pravom si mjestu!
                </p>
                <div className={styles.buttonContainer}>
                <Link to ="#two"><button className ={buttonStyles.secondary}>UKLJUČI SE</button></Link>
                 <Link to="#three"><button className ={buttonStyles.secondary}>SAZNAJ VIŠE</button></Link></div>
        
            </div>
            <div className={styles.carouseldiv}>
            
           
            <Carousel>
                <Carousel.Item interval={2000}>
                 <Link to = "/dogadaji"><img className={styles.img} src="https://www.dinamikom.eu/images/blog/700-800/736/CL_Down-sindrom_naslovna.jpg"
        alt="downsindrom"
        /></Link>
            <Carousel.Caption className={styles.events}>
                <h3 className={styles.headingsCarousel}>Svjetski dan osoba s Downovim sindromom</h3>
                <p className={styles.date}>Sri, 21.ožujka, 11:00</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                 <Link to = "/dogadaji"><img
                className={styles.img}
                    src={require('../../images/WorldRun.jpg')} 
                    alt="72sata"
                /></Link>
            <Carousel.Caption className={styles.events}>
            <h3 className={styles.headingsCarousel}>Utrka Wings for life World Run</h3>
                <p className={styles.date}>Sub, 9.svibnja, 10:00</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                 <Link to = "/dogadaji"><img
                className={styles.img}
                src={require('../../images/boranka.jpg')} 
                alt="pomoc Petrinji"
                /></Link>
            <Carousel.Caption className={styles.events}>
                <h3 className={styles.headingsCarousel}>Pošumljavanja opožarenih područja</h3>
                <p className={styles.date}>Svake subote, 10:00 - 14:00</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       

        </div>


        </div>
        <div id="two" className={styles.boxtwo}>
            <div className={styles.imgdiv}>
            <Link to ="/dogadaji">
            <img
                className={styles.icon}
                src={require('../../images/events.png')} 
                alt="dogadaji"
                />
                <button className={buttonStyles.tertiary}
                >PREGLED SVIH HUMANITARHNIH DOGAĐAJA</button></Link>
            </div>
            <div className={styles.imgdiv}>
             <Link to ="/doniraj">
            <img
                className={styles.icon2}
                src={require('../../images/donate.png')} 
                alt="doniraj"
                />
                <button className={buttonStyles.tertiary}>PRONAĐI UDRUGE KOJE ŽELIŠ PODRŽATI I DONIRAJ</button></Link>
            </div>
            <div className={styles.imgdiv}>
             <Link to="/kontakt">
            <img
                className={styles.icon}
                src={require('../../images/info.png')} 
                alt="kontakt"
                />
                <button className={buttonStyles.tertiary}>KONTAKTIRAJ NAS I POSTANI VOLONTER/KA</button></Link>
            </div>
            </div>
        <div id="three" className={styles.boxthree}>
            <div className={styles.aboutus}>
                <h2 className={styles.onama}>O NAMA</h2>
                <p className={styles.onamatext}>Pozdrav! Ova stranica nastala je s idejom kako pomoći ljudima koji žele pomoći drugima. Ako si u potrazi za humanitarnim događajima u kojim želiš sudjelovati ili udrugama kojima želiš pomoći (novčanim donacijama ili volontiranjem), ovo je mjesto za tebe. Također, možeš pročitati priče i iskustva volontera s prethodnih događaja. Nadamo se da ćeš na našoj stranici pronaći sadržaj koji će i tebe potaknuti
da učiniš neko dobro djelo. Uživaj u boravku na stranici!</p>
            </div>
            <div>
                <img
                className={styles.usimg}
                src={require('../../images/team.png')} 
                alt="dogadaji"
                />
            </div>
        </div>
    </div>
);


export default Homepage;