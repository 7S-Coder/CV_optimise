import AboutJson from "../datas/About.json";
import "../css/components/About.scss";


function About () {
    return (
        <article id="about">
            <div className="container">

                <section>
                    <h1>A propos</h1>
                    {/* dangerouslySetInnerHTML pour permettre l'utilsiation de balises html dans le fichier JSON */}
                    <p dangerouslySetInnerHTML={{__html: AboutJson.description}}></p>
                    <p dangerouslySetInnerHTML={{__html: AboutJson.location}}></p>
                    <p>{AboutJson.philosophy}</p>

                </section>
                <section>
                    <img src="/public/web_developper2.jpg" alt="Un developpeur web entouré d'ordinateurs." />
                    <h2>Mes compétences</h2>
                    <div className="competences">
                        {AboutJson.competences.map((competence, index) => (
                            <div key={index} className="competence-item">
                                <span className="competence-name">{competence.name}</span>
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill" 
                                        style={{width: `${competence.level}%`}}
                                    ></div>
                                </div>
                                <span className="competence-level"> {competence.level}%</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </article>
    );
}

export default About;