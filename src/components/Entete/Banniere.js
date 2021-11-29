import React from 'react';
import Image from '../../assets/img/AV.png';
import Assets from '../../assets/img/pc.png';

function Banniere() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <img className="avatar" src={Image} alt="Avatar should be here"/>
            </div>
            <div  className="text-center mt-5" >
                <p style={{ fontStyle: 'italic' }}>"La liberté c'est de savoir danser avec ses chaines" F. Nietzsche</p>
            </div>
            <div className="d-flex justify-content-center">
                <img className="pc" src={Assets} alt="pc" />
            </div>
        </div>
    )
}

export default Banniere
