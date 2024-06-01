import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-start">
          <img src="/src/assets/my-photo.jpeg" height="520px" alt="Satvik Kumar Jain" />
        </div>
        <div className="col-md-6">
          <h2>About Me</h2>
          <p>Hi, I'm Satvik Kumar Jain, a web developer with over 2 years of experience in designing and implementing web applications. My expertise spans various technologies, including JavaScript, ReactJS, Angular, and TypeScript. I am passionate about creating interactive and responsive web applications and continuously learning new trends in the tech world.</p>
          
          <h3>Skills</h3>
          <ul>
            <li>JavaScript, ReactJS, Angular, TypeScript</li>
            <li>Node.js, Express.js, MongoDB</li>
            <li>AWS services, Docker</li>
            <li>Playwright, Selenium</li>
            <li>Git, CI/CD, Redux, NGRX</li>
          </ul>
          
          <h3>Experience</h3>
          <p><strong>Front End Web Developer at Reorg360 (Feb 2022 – Current)</strong></p>
          <ul>
            <li>Developed a versatile communication app</li>
            <li>Created accounting software</li>
            <li>Conducted end-to-end testing using Playwright</li>
          </ul>

          <p><strong>Website Manager at ICEC (Jul 2021 – Jun 2022)</strong></p>
          <ul>
            <li>Maintained and updated WordPress-based website</li>
            <li>Authored and published engaging articles</li>
          </ul>

          <a href="/src/assets/satvik-resume.pdf" target="_blank" className="btn btn-secondary mt-3" rel="noopener noreferrer">Download Resume</a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
