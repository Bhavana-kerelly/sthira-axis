import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PhilosophyPage from './pages/PhilosophyPage/PhilosophyPage';
import AboutPage from './pages/AboutPage/AboutPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/uma-sreenivas-lakeshore" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
