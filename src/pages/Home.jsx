import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";

function Home() {

  return (
    <>
    <Nav/>
    <main>
    <Hero /> 
    <About />
    </main>
    <Footer />
    </>
  )
}

export default Home