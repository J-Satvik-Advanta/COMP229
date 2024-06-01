import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container my-5">
      <h2>Services</h2>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">Web Development</li>
            <li className="list-group-item">Mobile App Development</li>
            <li className="list-group-item">UI/UX Design</li>
          </ul>
        </div>
        <div className="col-md-6">
          <p>I offer a range of services to help you achieve the results you're after. Whether you need a new website, a mobile application, or a redesign of your current UI/UX, I have the skills and experience to help you succeed.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
