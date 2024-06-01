import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';


const App: React.FC = () => {
  return (
    <Router>
    <div className="page">
    <Header  />

    <div className="page-wrapper " style={{height: '80%'}}>
        <div className="page-body ">
          <div className="container-xl d-flex flex-column justify-content-center">
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          </div>
          </div>
      <Footer/>

        </div>

    </Router>
  );
}

export default App;
