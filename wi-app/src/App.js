import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages";
import Sustainability from "./pages/sustainability";
import FAQ from "./pages/FAQ";
import Contact from "./pages/contact";
import Lindsay from "./pages/lindsay";
import './App.css';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/sustainability":
      component = <Sustainability />
      break
    case "/FAQ":
      component = <FAQ />
      break
    case "/contact":
      component = <Contact />
      break
    case "/lindsay":
      component = <Lindsay />
      break
  }
  return (
    <div className="App">
        <Navbar/>
        {component}
        <Footer/>
    </div>
  );
}

export default App;
