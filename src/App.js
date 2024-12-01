import React from 'react';
import './styles.css'; // Importe o CSS aqui
import './animations.css'; // Importar o arquivo de animações
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe o Router, Routes, e Route
import { useLocation } from 'react-router-dom'; // Para verificar a rota atual

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Products from './components/Products';
import Location from './components/Location';
import Citycapela from './components/Citycapela';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Mostruario from './components/Mostruario';
import Arquitetos from './components/Arquitetos';
import ImageModal from './components/ImageModal';
import './App.css';

// Definir a função Home
function Home() {
  const location = useLocation(); // Usado para obter o caminho atual

  // Efeito para rolar automaticamente para a seção "Produtos" quando a rota for "/produtos"
  React.useEffect(() => {
    if (location.pathname === '/produtos') {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/galeria') {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/contato') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="citycapela">
        <Citycapela />
      </section>
      <section id="mostruario">
        <Mostruario />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="location">
        <Location />
      </section>
    </>
  );
}

// Função original App, que você já tem, sem conflitos
function App() {
  return (
    <Router>
    <div className="bg-gray-100 md:bg-gray-200 text-gray-800">
      <Banner />
      <Header />

      {/* Conteúdo principal com rolagem permitida */}
      <main className="container mx-auto py-10 custom-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
          <Route path="/arquitetos" element={<Arquitetos />} /> {/* Rota para a página de Arquitetos */}
          <Route path="/produtos" element={<Home />} /> {/* Rota para a página de Produtos */}
          <Route path="/galeria" element={<Home />} /> {/* Rota para a página da Galeria */}
          <Route path="/contato" element={<Home />} /> {/* Rota para a página de Contato */}
        </Routes>
      </main>

      <Footer />
      <ImageModal />
    </div>
  </Router>
  );
}

export default App;
