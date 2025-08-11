import "../css/components/contact.scss";
import Submit from "../ui/Submit";
import { MapPin, Smartphone } from "lucide-react";

function Contact() {
  return (
    <>
    <main id="contact-container">

      <article id="contact">
        <div id="title">
          <h1>
          ME CONTACTER
        </h1>
        <span>
          Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </span>

        </div>

        <section>
          <div>

        <h2> Formulaire de contact</h2>

          <form action="" id="contact-form">
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required />

        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" placeholder="Votre adresse email" required />

        <label htmlFor="phone"></label>
        <input type="tel" id="phone" name="phone" placeholder="Votre numéro de téléphone" required />

        <label htmlFor="subject"></label>
        <input type="text" id="subject" name="subject" placeholder="sujet" required />

        <label htmlFor="message"></label>
        <textarea id="message" name="message" placeholder="Votre message" required></textarea>

        <Submit />
      </form>
    </div>
      <div id="details">
        <h2>Mes coordonnées</h2>
        <p> <MapPin size={17}/>40 Rue Laure Diebold</p>
        <p> <Smartphone size={17}/>06 20 30 40 50</p>
        <img src="/maps.png" alt="Map location" width="100%" height="50%" />
      </div>
        </section>
        
      </article>

      
    </main>

    </>
  );
}

export default Contact;
