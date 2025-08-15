import "../css/components/Legal.scss";
import { MapPin, Smartphone, Mail, Globe } from "lucide-react";
import { useState } from "react";

function Legal() {
  const [openSections, setOpenSections] = useState({
    editeur: true,
    hebergeur: false,
    credits: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <main id="legal-container">
      <div className="hero-legal">
        <h1>MENTIONS LÉGALES</h1>
      </div>

      <article>
        <section className={`legal-section ${openSections.editeur ? 'open' : ''}`}>
          <div className={`section-header ${openSections.editeur ? 'active' : ''}`} onClick={() => toggleSection('editeur')}>
            <h4>Éditeur du site</h4>
            <i className={`bi ${openSections.editeur ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
          </div>
          {openSections.editeur && (
            <div className="section-content">
              <h5>John Doe</h5>
              <p><MapPin size={18}/> 40 Rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p><a href="tel:0620304050"><Smartphone color="black" size={18}/> 06 20 30 40 50</a></p>
              <p><a href="mailto:john.doe@gmail.com"><Mail color="black" size={18}/> john.doe@gmail.com</a></p>
            </div>
          )}
        </section>

        <section className={`legal-section ${openSections.hebergeur ? 'open' : ''}`}>
          <div className={`section-header ${openSections.hebergeur ? 'active' : ''}`} onClick={() => toggleSection('hebergeur')}>
            <h4>Hébergeur</h4>
            <i className={`bi ${openSections.hebergeur ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
          </div>
          {openSections.hebergeur && (
            <div className="section-content">
              <h2>Always Data</h2>
              <p> 91 rue de Faubourg Saint Honoré <br /> 75008 Paris, France</p>
              <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer"><Globe color="black" size={18}/> www.alwaysdata.com</a>
            </div>
          )}
        </section>

        <section className={`legal-section ${openSections.credits ? 'open' : ''}`}>
          <div className={`section-header ${openSections.credits ? 'active' : ''}`} onClick={() => toggleSection('credits')}>
            <h4>Crédits</h4>
            <i className={`bi ${openSections.credits ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
          </div>
          {openSections.credits && (
            <div className="section-content">
              <h2>Crédits</h2>
              <p>Site développé par John Doe, étudiant du CEF.</p>
              <p>Les images libres de droits sont issue du site <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
            </div>
          )}
        </section>
      </article>
    </main>
  );
}

export default Legal;