import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from './style.module.css';
/*
da bi mogla pokrenut kod vjv ces morat npm install bootstrap i npm install react-bootstrap u terminalu
ovo className = {styles.nesto} mi je pozivanje css-a jer drugacije nije radio i na nekim mjestima sam u css fileu morala dodat ono 
!important da bi mi primjenilo stil
*/
const Homepage =() =>( 
    <div>
        <div className={styles.boxone}>
            <div className={styles.introdiv}>
                <h1 className={styles.headings}>HUMAN SAPIENS</h1>
                <p className={styles.paragraphs}>
                    Dobrodošli na stranicu za humanitarne događaje i donacije! <br />
                    Želiš pomići i činiti dobra djela, ali ne znaš gdje i kako početi? Na pravom si mjestu!
                </p>
                <button className ={styles.button}>Uključi se</button>
                <button className ={styles.button}>Saznaj više</button>
        
            </div>
            <div className={styles.carouseldiv}>   
            <Carousel>
                <Carousel.Item interval={1200}>
                <img className={styles.img} src="https://www.dinamikom.eu/images/blog/700-800/736/CL_Down-sindrom_naslovna.jpg"
        alt="downsindrom"
        />
            <Carousel.Caption className={styles.events}>
                <h3 className={styles.headings}>Svjetski dan osoba s Down sindromom 2021</h3>
                <p>21. ožujak 2021.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1200}>
                <img
                className={styles.img}
                    src="https://www.globalnovine.eu/wp-content/uploads/2018/10/Webp.net-resizeimage-4.jpg"
                    alt="72sata"
                />
            <Carousel.Caption className={styles.events}>
            <h3 className={styles.headings}>72 sata bez kompromisa</h3>
                <p>proljeće, 2021.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1200}>
                <img
                className={styles.img}
                src="https://m.vecernji.hr/media/img/31/3f/a7ac5cebf74d98025f8c.jpeg"
                alt="pomoc Petrinji"
                />
            <Carousel.Caption className={styles.events}>
                <h3 className={styles.headings}>Prikupljanje pomoći za potresom pogođena područja</h3>
                <p>siječanj, 2021.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>


        </div>
    </div>
);


export default Homepage;