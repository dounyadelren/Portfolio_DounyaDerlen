import React from 'react'
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const ModalSnapchat = ({ setIsOpenSnapchat }) => {
    return (
        <>
        <div className={styles.darkBG} onClick={() => setIsOpenSnapchat(false)} />
        <div className={styles.centered}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h5 className={styles.heading}>My Snapchat</h5>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpenSnapchat(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className={styles.modalContent}>
                    Ce projet a été réalisé en groupe de 3 personnes en React Native, on nous avait fourni une API pré-faite ainsi que certaines requêtes (notamment l'inscription, connexion et création du token utilisateur) qu'il fallait reproduire grâce à l'application POSTMAN.
                    Le plus challengeant a été de trouver le fonctionnement des Routes avec comme contrainte de ne pas travailler en Programmation Orienté Objet... 
                </div>
            </div>
        </div>
    </>
    )
}

export default ModalSnapchat
