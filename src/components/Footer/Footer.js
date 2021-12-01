import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="d-flex justify-content-start">
                    <a className="text-light" href="https://github.com/dounyadelren?tab=repositories" target="_blank" rel="noreferrer"><i style={{ fontSize: 50, padding:5}} class="fab fa-github"></i></a>
                    <a className="text-light" href="https://www.linkedin.com/in/dounya-derlen/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin" style={{ fontSize: 50, padding:5}}></i></a>
                    <div className="d-flex">
                        <p className="text-light p-2 mt-2" style={{ fontSize: 20}}>derlen.dounya@gmail.com</p>
                        <p className="text-light p-2 mt-2" style={{ fontSize: 20}}>+33 (0)6 63 15 81 31</p>
                    </div>
                </div>
            
            </footer>
        </div>
    )
}

export default Footer
