import React from 'react'

function Competences() {
    return (
        <div>
            <h1 className="h2 text-center">Skills</h1>
            <div  className="d-flex justify-content-center projets">
                <div className="row">
                    <div className="col-sm">
                        <div className="card m-4" style={{maxWidth: "30rem"}}>
                            <div className="card-header h5 text-center" id="entete">Expériences<i class="ml-3 fas fa-network-wired"></i></div>
                            <div className="card-body">
                                <p className="card-text"> 2014 - 2021 :</p>
                                <p className="card-text"> Danseuse professionnelle dans l'évenementiel sportif, également en compagnie de danse pro </p>
                                <p className="card-text"> 2014 - 2018 :</p>
                                <p className="card-text"> Chef de rang en restauration "haut de gamme"</p>
                                <p className="card-text"> 2012 - 2016 :</p>
                                <p className="card-text"> Baby-sitting à temps partiel en parallèle de mes études et de la restauration</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4" style={{maxWidth: "30rem"}}>
                            <div className="card-header h5 text-center" id="entete">Soft Skills<i class="ml-3 fas fa-dumbbell"></i></div>
                            <div className="card-body">
                                <ul>
                                    <li> - Le travail et coordination d'équipe</li>
                                    <li> - La communication</li>
                                    <li> - L'organisation</li>
                                    <li> - Le sang-froid</li>
                                    <li> - La patience</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card m-4" style={{maxWidth: "30rem"}}>
                            <div className="card-header h5 text-center" id="entete">Langues<i class="ml-3 fas fa-globe-europe"></i></div>
                            <div className="card-body">
                                <p className="card-text">Anglais: niveau C1 (bilingue)</p>
                                <p className="card-text">Espagnol: niveau B1 (niveau lycée)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4" style={{maxWidth: "30rem"}}>
                            <div className="card-header h5 text-center" id="entete">Hobbies<i class="ml-3 fab fa-buffer"></i></div>
                            <div className="card-body">
                                <p className="card-text font">Musique</p>
                                <p className="card-text"> Je suis chanteuse et guitariste</p>
                                <p className="card-text font">Danse</p>
                                <p className="card-text"> Même en n'étant plus mon activité professionnelle principale, la danse reste très présente dans mon quotidien</p>
                                <p className="card-text font">Voyage</p>
                                <p className="card-text">J'ai eu l'occasion de partir aux Etats-Unis ainsi qu'au Canada où j'ai pû perfectionner mon anglais</p>





                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Competences
