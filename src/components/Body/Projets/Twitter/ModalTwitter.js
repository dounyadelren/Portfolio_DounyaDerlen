import React from 'react'
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";


const ModalCinema = ({ setIsOpenTwitter }) => {
    return (
    <>
        <div className={styles.darkBG} onClick={() => setIsOpenTwitter(false)} />
        <div className={styles.centered}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h5 className={styles.heading}>My Twitter</h5>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpenTwitter(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className={styles.modalContent}>
                    Projet réalisé en groupe de 3. Il s'agissait de clôner Twitter en n'utilisant que PHP natif et MySQL avec l'aide de Skeleton en respectant une architecture MVC.
                    Le groupe s'est divisé les tâches de manière efficace. J'étais sur la partie front et interactions avec le back, mes deux co-équipiers étaient respectivement l'un sur la sécurité, l'autre sur la publication de tweets avec AJAX.
                    Nous avons réussi à rendre un twitter propre et responsive. L'utilisateur peut follow, unfollow, tweeter, ajouter des hashtags qui renvoient sur la page google des mots ciblés et le 'like'. 
                    L'authentification et l'ouverture de session (qui sauvegarde les données de l'utilisateur connecté) sont également présentes, l'utilisateur peut également choisir le thème qu'il préfère entre 3 couleurs. Ce thème sera sauvegardé dans son localStorage et modifié quand il le veut. 
                </div>
            </div>
        </div>
    </>
    )
};
  

export default ModalCinema
