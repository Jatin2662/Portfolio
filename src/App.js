import logo from './logo.svg';
import './App.css';
import HeroSection from './pages/HeroSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import {Nav} from './components/Nav';
import { useState } from 'react';

function App() {

  const [showNav, setShowNav] = useState(false)

  return (
    <ParallaxProvider>
      <Nav showNav={showNav} setShowNav={setShowNav} />
      <HeroSection showNav={showNav} setShowNav={setShowNav} />
    </ParallaxProvider>
  );
}

export default App;
