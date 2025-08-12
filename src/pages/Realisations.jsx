
import "../css/components/Realisations.scss";

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
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="/public/fresh-food.jpg" className="card-img-top" alt="Fresh food" />
                <div className="card-body">
                  <h5 className="card-title">Fresh food</h5>
                  <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                  <button className="btn btn-primary">Voir</button>
                  <p className="card-tech">Site réalisé avec PHP et MySQL</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="/public/restaurant-akira.jpg" className="card-img-top" alt="Restaurant Akira" />
                <div className="card-body">
                  <h5 className="card-title">Restaurant Akira</h5>
                  <p className="card-text">Réalisation d'un site vitrine.</p>
                  <button className="btn btn-primary">Voir</button>
                  <p className="card-tech">Site réalisé avec WordPress</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="/public/espace-bien-etre.jpg" className="card-img-top" alt="Espace bien-être" />
                <div className="card-body">
                  <h5 className="card-title">Espace bien-être</h5>
                  <p className="card-text">Réalisation d'un site vitrine pour un patricien de bien-être.</p>
                  <button className="btn btn-primary">Voir</button>
                  <p className="card-tech">Site réalisé en HTML/CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Realisations;
