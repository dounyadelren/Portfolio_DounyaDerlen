import React from 'react';
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const ModalPinterest = ({ setIsOpenPinterest }) => {
    return (
    <>
        <div className={styles.darkBG} onClick={() => setIsOpenPinterest(false)} />
        <div className={styles.centered}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h5 className={styles.heading}>Pinterest</h5>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpenPinterest(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className={styles.modalContent}>
                    Petit clône tout simple de Pinterest fait avec le framework Symfony et Boostrap en suivant partiellement un tutoriel Youtube.
                    L'architecture respecte le MVC. 
                    J'ai travaillé sur ce projet en dehors de ceux qui étaient prévus en formation car je voulais absolument me familiariser avec Doctrine et les migrations.
                    Le site final est assez simple, responsive, CRUD fonctionnel, ainsi que l'authentification. Petit bonus: j'ai trouvé un bundle qui permet de lire, stocker, télécharger les images (côté utilisateur) ainsi que les redimmensionner automatiquement sans qu'elles soient déformées (<a href="https://github.com/liip/LiipImagineBundle" target="_blank" rel="noreferrer">Liip Filter Imagine</a>); malheureusement je n'arrive pas à garder la qualité de l'image originale qui perd en netteté. A poursuivre !!
                    <br />
                    <a href="https://github.com/dounyadelren/Pinterest---PHP-Symfony" target="_blank" rel="noreferrer">Lien vers github</a>
                </div>
            </div>
        </div>
    </>
    )
}

export default ModalPinterest
