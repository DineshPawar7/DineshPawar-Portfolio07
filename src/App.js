import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import Resume from './pages/Resume';
import About from './pages/About';
import Grohubz from './pages/grohubz';

function AppContent() {
  const location = useLocation();
  const isGrohubzPage = location.pathname === '/grohubz';

  return (
    <>
      <Header />
      <Button />

      {/* 
          Yahan condition check ho rahi hai:
          Agar Grohubz page hai toh koi class nahi lagegi (ya aap 'grohubz-layout' de sakte hain),
          Nahi toh default 'app-main-section' lagegi.
      */}
      <div className={isGrohubzPage ? "" : "app-main-section"}>
        
        {/* Left Card sirf tab dikhega jab Grohubz page NAHO */}
        {!isGrohubzPage && (
          <div className="left-card">
            <Card />
          </div>
        )}

        {/* 
            Right content ki styling bhi sirf tabhi lagegi jab Grohubz page NAHO.
            Grohubz page par ye ek simple div rahega bina kisi extra padding/margin ke.
        */}
        <div className={isGrohubzPage ? "w-full" : "right-components mainBg"}>
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
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/grohubz" element={<Grohubz />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;