import React from 'react'
import Php from '../../../assets/img/php.png'
import Symfony from '../../../assets/img/symfony.png'
import Mysql from '../../../assets/img/mysql.png';
import Html from '../../../assets/img/html.png';
import Jquery from '../../../assets/img/jquery.png';
import Laravel from '../../../assets/img/laravel.png';
import Node from '../../../assets/img/node.png';
import ReactLogo from '../../../assets/img/react.png';
import Github from '../../../assets/img/github.png';

function Stacks() {
    return (
        <div className="container">
            <h2 className="pt-5">Technologies utilisées:</h2>
            <img className="icon" src={Symfony} alt="symfony" />
            <img className="icon" src={Laravel} alt="laravel" />
            <img style={{ height: 90, width: 140, margin: 30 }} src={Node} alt="Node" />
            <img className="icon" src={ReactLogo} alt="ReactLogo" />
            <img className="icon" src={Php} alt="Php" />
            <img className="icon" src={Mysql} alt="Mysql" />
            <img className="icon" src={Html} alt="Html" />
            <img className="icon" src={Jquery} alt="Jquery" />
            <img className="icon" src={Github} alt="Github" />
            
        </div>
    )
}

export default Stacks
