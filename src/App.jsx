import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      {/* <Skills /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
