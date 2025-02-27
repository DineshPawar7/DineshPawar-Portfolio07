import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import Experience from './pages/Experience';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <Router>
      <Header />  {/* Only include Header here */}
      <div className="app-container">
        <Card />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
      <Footer />  {/* Only include Footer here */}
    </Router>
  );
}

export default App;
