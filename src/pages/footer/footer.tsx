
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-transparent d-print-none height-10">
    <div className="container-xl">
      <div className="row text-center align-items-center justify-content-center">
        <div className="col-12 col-lg-auto mt-3 mt-lg-0">
          <ul className="list-inline list-inline-dots mb-0">
            <li className="list-inline-item">
              Copyright © 2024 All rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;