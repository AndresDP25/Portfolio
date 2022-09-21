import { useState, useEffect } from 'react';
import './App.css';
import About from './components/about/About';
import Carrousel from './components/carrousel/Carrousel';
import Cover from "./components/cover/Cover";
import Navbar from './components/navbar/Navbar';
import Certificates from './components/certificates/Certificates';
import Works from './components/works/Works';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import CarouselCertificates from './components/carouselCertificates/CarouselCertificates';



function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScorll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScorll);
  },[scrollHeight]);
  // cada vez que scrollHeight cambie, se ejecuta el useEffect

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Carousel />
      <Works />
      <CarouselCertificates />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
