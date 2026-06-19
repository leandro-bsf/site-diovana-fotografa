import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Bio from "./components/Bio"; // Importação correta (sem chaves pois é export default)

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Rota Home */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Portfolio />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* Rota Bio */}
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;