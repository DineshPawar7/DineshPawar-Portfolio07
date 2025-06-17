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
import Education from './pages/Education';
import Testimonials from './pages/Testimonials';
import Button from './pages/Button';
import GithubCalendar from './pages/GithubCalendar';

function App() {
  return (
    <Router>
      <Header />
      <Button />

      <div className="app-main-section">
        <div className="left-card">
          <Card />
        </div>

        <div className="right-components mainBg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/SkillsAndTools" element={<SkillsAndTools />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/github" element={<GithubCalendar />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
