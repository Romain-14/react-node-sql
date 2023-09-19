import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTruck, faMoneyBill1, faPhone, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer>
        <div className={styles.footer_top}>
            <div>
                <div className={styles.icon}><FontAwesomeIcon icon={faLock} /></div>
                <p>paiement sécurisé</p>
            </div>
            <div>
                <div className={styles.icon}><FontAwesomeIcon icon={faTruck} /></div>
                <p>ma livraison offerte</p>
            </div>
            <div>
                <div className={styles.icon}><FontAwesomeIcon icon={faMoneyBill1} /></div>
                <p>carte de fidélité</p>
            </div>
            <div>
                <div className={styles.icon}><FontAwesomeIcon icon={faPhone} /></div>
                <p>service client</p>
            </div>
            <div>
                <div className={styles.icon}><FontAwesomeIcon icon={faCircleCheck} /></div>
                <p>garantie qualité</p>
            </div>

        </div>

        <div className={styles.footer_bottom}>
            <nav>
                <h2>cup of tea</h2>
                <Link to={"#"}>Notre histoire</Link>
                <Link to={"#"}>Nos boutiques</Link>
                <Link to={"#"}>Le thé de A à Z</Link>
                <Link to={"#"}>Espace client pro</Link>
                <Link to={"#"}>Recrutement</Link>
                <Link to={"#"}>Contactez-nous !</Link>
                <Link to={"#"}>L'école du Thé</Link>
            </nav>
            <nav>
                <h2>commandez en ligne</h2>
                <Link to={"#"}>Première visite</Link>
                <Link to={"#"}>Aide + FAQ</Link>
                <Link to={"#"}>Service client</Link>
                <Link to={"#"}>Suivre ma commande</Link>
                <Link to={"#"}>CVG</Link>
                <Link to={"#"}>Informations légales</Link>
                
            </nav>
            <nav>
                <h2>Suivez-nous</h2>
                <Link to={"#"}>Notre histoire</Link>
                <Link to={"#"}>Nos boutiques</Link>
                <Link to={"#"}>Le thé de A à Z</Link>
                <Link to={"#"}>Espace client pro</Link>
            </nav>
        </div>
    </footer>
  )
}

export default Footer