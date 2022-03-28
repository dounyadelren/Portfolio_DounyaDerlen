import React from 'react'
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const ModalPrevon = ({ setIsOpenPrevon }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpenPrevon(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Previously On</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpenPrevon(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Projet de fin d'année, réalisé en groupe, le front a été fait en React JS
            et le back en NodeJS. Il s'agit d'une API privée nommée BetaSeries, on peut suivre nos films, séries préférées
            marquer des épisodes comme vus, trouver nos amis inscrits au site etc.. Plus de précisions
            sur le ReadMe à cette <a href="https://github.com/dounyadelren/previously_on"target="_blank" rel="noreferrer">adresse</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalPrevon