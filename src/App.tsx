/* 
 * File name: app.tsx
 * Student's Name: Satvik Kumar Jain
 * StudentID: 301370624
 * Date: 2024-05-31
 */
/* app.tsx */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import AboutMe from './pages/about-me/about-me';
import Projects from './pages/projects/projects';
import Services from './pages/services/services';
import ContactMe from './pages/contact-me/contact-me';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="page">
        <Header />
        <div className="page-wrapper height-80">
          <div className="page-body">
            <div className="container-xl d-flex flex-column justify-content-center">
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
