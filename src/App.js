import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Youtube from './pages/Youtube';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import SkillsAndTools from './pages/SkillsAndTools';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />

      <div className="app-main-section">
        <div className="left-card">
          <Card />
        </div>

        <div className="right-components">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/SkillsAndTools" element={<SkillsAndTools />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
