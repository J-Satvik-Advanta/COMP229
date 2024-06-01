import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="navbar navbar-expand-md d-print-none height-10">
      <div className="container-xl">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <Link to="/">
            <img src="/src/assets/my-logo.jpeg" alt="my-logo" width="32" height="32" />
          </Link>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          <div className="d-none d-md-flex">
            <a href="?theme=dark" className="nav-link px-0 hide-theme-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable dark mode" data-bs-original-title="Enable dark mode">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>
            </a>
            <a href="?theme=light" className="nav-link px-0 hide-theme-light" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable light mode" data-bs-original-title="Enable light mode">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>
            </a>
            <div className="nav-item dropdown d-none d-md-flex me-3">
              <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" aria-label="Show notifications">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg>
                <span className="badge bg-red"></span>
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
              <span className="avatar avatar-sm" style={{ backgroundImage: `url(/src/assets/my-photo.jpeg)` }}></span>
              <div className="d-none d-xl-block ps-2">
                <div>Satvik Kumar Jain</div>
                <div className="mt-1 small text-secondary">Web Developer</div>
              </div>
            </a>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul className="navbar-nav">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/">
                  <span className="nav-link-title">Home</span>
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/about-me' ? 'active' : ''}`}>
                <Link className="nav-link" to="/about-me">
                  <span className="nav-link-title">About Me</span>
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>
                <Link className="nav-link" to="/projects">
                  <span className="nav-link-title">Projects</span>
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
                <Link className="nav-link" to="/services">
                  <span className="nav-link-title">Services</span>
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact-me' ? 'active' : ''}`}>
                <Link className="nav-link" to="/contact-me">
                  <span className="nav-link-title">Contact Me</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
