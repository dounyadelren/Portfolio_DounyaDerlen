
import React from 'react'
import './App.css';
import './assets/css/bootstrap.min(1).css'
import Navbar from './components/Nav/Navbar';
import Titre from './components/Entete/Title';
import Banniere from './components/Entete/Banniere';
import Texte from './components/Body/Pres';
import Projets from './components/Body/Projets/Projets';
import Contact from './components/Body/Contact/Contact';
import Cv from './components/Body/Cv';
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
      <div id="texte" style={{ height: "120vh"}}>
        <Texte />
      </div>
      <div className="projets" style={{ height: "100vh"}}>
        <Projets />
      </div>
      <div style={{ marginTop: "30vh", height: "70vh"}}>
        <Competences />
      </div>
      <div className="d-flex justify-content-center" style={{ height: "120vh"}}>
        <Cv />
      </div>
      <div className="contact-form" style={{ height: "110vh"}} id="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;