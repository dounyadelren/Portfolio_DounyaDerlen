import React from 'react'
import CurricullumVitae from '../../assets/img/cv.png'
import Pdf from '../../assets/img/cv.pdf'
import Av from '../../assets/img/avataaars(2).png';


function Cv() {
    return (
        <div className="d-flex justify-content-center flex-column">
            <h1 className="h2 mb-5 pb-3 text-center">Mon CV</h1>
            <div className="d-flex justify-content-evenly">
                <img src={Av} style={{ width: "35%", height: "50%", marginTop: 50}} alt="avatar" />
                <a href={ CurricullumVitae } target="_blank" rel="noreferrer"><img style={{width: "60vh", height: "80vh"}} className="shadow-sm p-3 mb-5 bg-white rounded move" src={ CurricullumVitae } alt="cv"/></a>
            </div>
            <div className="d-flex justify-content-center">
                <a href={ Pdf } download ><button className="btn btn-lg btn-warning mt-3">télécharger</button></a>
            </div>
        </div>
    )
}

export default Cv
