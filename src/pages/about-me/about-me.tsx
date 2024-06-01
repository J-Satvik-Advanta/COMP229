import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src="your-image-url.jpg" className="img-fluid rounded-circle" alt="Your Name" />
        </div>
        <div className="col-md-6">
          <h2>About Me</h2>
          <p>Hi, I'm [Your Name], a web developer with a passion for creating interactive and responsive web applications. I have experience in various technologies and love to learn and explore new trends in the tech world.</p>
          <a href="your-resume-url.pdf" target="_blank" className="btn btn-secondary" rel="noopener noreferrer">Download Resume</a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
