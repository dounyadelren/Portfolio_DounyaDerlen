import React from 'react'
import Pdf from '../../assets/img/cv.pdf'


function Cv() {
    return (
        <>
             <div className="d-flex justify-content-center">
                <a href={Pdf} download><button className="btn btn-lg btn-outline-secondary mt-3">Télécharger mon CV</button></a>
            </div>
        </>
    )
}

export default Cv
