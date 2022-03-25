import React from 'react';
import Stacks from './Stacks/Stacks';

function Pres() {
    return (
        <div>
            <div className="blue text-center">
                <h1 className="p-5 text-light"><b>Hello World !</b></h1>
                <h2 className="text-light">Je m'appelle Dounya,</h2>
                <h3 className="h4 text-light texte">je suis designer UX/UI, développeuse et intégratrice web en formation depuis 1 an et je suis actuellement à la recherche d'un contrat d'alternance <b>ASAP</b>.</h3>
                <div className="white">
                    <Stacks />
                </div>
            </div>
        </div>
    )
}

export default Pres
