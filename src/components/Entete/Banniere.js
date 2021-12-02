import React from 'react';
import Image from '../../assets/img/AV.png';
import Assets from '../../assets/img/pc.png';
import Cv from './Cv';

function Banniere() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <img className="avatar" src={Image} alt="Avatar should be here" />
            </div>
            <div  className="text-center mt-5 h3" >
                <p style={{ fontStyle: 'italic' }}>"Un utilisateur sur un site web, c'est comme un client dans un hôtel, il faut rendre son séjour agréable."</p>
            </div>
            <Cv />
            <div className="d-flex justify-content-center">
                <img className="pc" src={Assets} alt="pc" />
            </div>
        </div>
    )
}

export default Banniere
