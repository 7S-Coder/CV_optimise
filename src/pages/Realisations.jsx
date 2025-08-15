
import "../css/components/Realisations.scss";
import realisationsData from "../datas/realisations.json";

function Realisations() {
  return (
    <main id="realisations-container">
      <div className="hero-section">
        <div className="hero-overlay">
          <div id="title-realisations">
            <h1>PORTFOLIO</h1>
            <span>Voici quelques-unes de mes réalisations.</span>
          </div>
        </div>
      </div>

      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="row">
            {realisationsData.map((realisation) => (
              <div key={realisation.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <img 
                    src={realisation.image} 
                    className="card-img-top" 
                    alt={realisation.altText} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{realisation.title}</h5>
                    <p className="card-text">{realisation.description}</p>
                    <button className="btn btn-primary">Voir</button>
                    <p className="card-tech">{realisation.technology}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Realisations;
