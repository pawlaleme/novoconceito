// App.js
import React from 'react';
import './styles.css'; // Importe o CSS aqui
import './animations.css'; // Importar o arquivo de animações

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

import ImageModal from './components/ImageModal';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 md:bg-black text-gray-800">
      <Banner />
      <Header />

      <main className="container mx-auto py-10">
        <About />
        <Products />
        <Citycapela />
        <Mostruario />
        <Gallery />
        <Contact />
        <Location />
      </main>
      
      <Footer />
      <ImageModal />
    </div>
  );
}

export default App;
