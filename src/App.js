
import React from 'react'
import './App.css';
import './assets/css/bootstrap.min(1).css'
import Navbar from './components/Nav/Navbar';
import Titre from './components/Entete/Title';
import Banniere from './components/Entete/Banniere';
import Texte from './components/Body/Pres';
import Projets from './components/Body/Projets/Projets';
import Contact from './components/Body/Contact/Contact';
import Competences from './components/Body/Competences/Competences';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div id="titre">
        <Titre />
      </div>
      <div id="banniere">
        <Banniere />
      </div>
      <div id="texte" style={{ height: "100vh"}}>
        <Texte />
      </div>
      <div className="projets">
        <Projets />
      </div>
      <div class="competences">
        <Competences />
      </div>
      <div className="contact-form">
        <Contact />
      </div>
      <div className="responsiv">
          <a style={{color: "#65c9FF"}} href="https://github.com/dounyadelren?tab=repositories" target="_blank" rel="noreferrer"><i style={{ fontSize: 50, padding:5}} class="fab fa-github"></i></a>
          <a style={{color: "#65c9FF"}} href="https://www.linkedin.com/in/dounya-derlen/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin" style={{ fontSize: 50, padding:5}}></i></a>
      </div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
