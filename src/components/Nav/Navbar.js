import React from 'react'
import { Link } from 'react-scroll';


function Navbar() {
    return (
        <div>
            <nav className="fixedElement d-flex justify-content-end mr-3">
                <Link to="contact" smooth={true}><button className="btn btn-lg btn-outline-secondary m-3">Say Hello</button></Link>   
            </nav>
        </div>
    )
}

export default Navbar
