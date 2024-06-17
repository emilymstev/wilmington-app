import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages";
import Sustainability from "./pages/sustainability";
import FAQ from "./pages/FAQ";
import Contact from "./pages/contact";
import Lindsay from "./pages/lindsay";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/lindsay" element={<Lindsay/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
