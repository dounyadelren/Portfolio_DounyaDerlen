import React from 'react'
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";


const ModalCinema = ({ setIsOpenCinema }) => {
    return (
    <>
        <div className={styles.darkBG} onClick={() => setIsOpenCinema(false)} />
        <div className={styles.centered}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h5 className={styles.heading}>My Cinéma</h5>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpenCinema(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className={styles.modalContent}>
                    Premier véritable projet individuel de la formation. 
                    Il fallait créer un mini site où l'on pouvait rechercher des films, leurs critiques, horaires de projection, la liste des clients abonnés, pouvoir changer leur abonnement etc...
                    Tout était à faire en PHP natif, les librairies (CSS ou Framework PHP) étant interdites, il fallait tout coder à la main et se familiariser avec le templating, c'était mon tout premier CRUD opérationnel! 
                </div>
            </div>
        </div>
    </>
    )
};
  

export default ModalCinema
