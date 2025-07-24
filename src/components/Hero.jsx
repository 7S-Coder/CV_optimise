import { Button } from "bootstrap";
import BoutonMoreAdvice from "../ui/boutonMoreAdvice";
import "../css/components/Hero.scss";

function Hero () {
  return (
    <section className="hero">
        <div className="hero-content">
            <h2 className="hero-title">Bonjour je suis JOHN DOE</h2>
            <h3 className="hero-subtitle">Développeur web full stack</h3>
            <br />
             <BoutonMoreAdvice />
        </div>
      
    </section>
  );
}

export default Hero;