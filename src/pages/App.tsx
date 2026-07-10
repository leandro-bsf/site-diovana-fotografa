import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import Bio from "../components/Bio";
import ProductsPage from "./Products";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">

        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Portfolio />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Produtos */}
          <Route 
            path="/produtos" 
            element={<ProductsPage />} 
          />

          {/* Bio */}
          <Route 
            path="/bio" 
            element={<Bio />} 
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;