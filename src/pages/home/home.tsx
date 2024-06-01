/* 
 * File name: home.tsx
 * Student's Name: Satvik Kumar Jain
 * StudentID: 301370624
 * Date: 2024-05-31
 */
/* home.tsx */
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <div className="container text-center my-6">
        <h1>Welcome to My Portfolio</h1>
        <p className="lead">This is my personal portfolio site created with React, TypeScript, Vite, and Bootstrap.</p>
        <p className="my-4">
          <strong>Mission Statement:</strong> My mission is to leverage my skills and passion for technology to create innovative, efficient, and user-friendly web solutions that solve real-world problems.
        </p>
        <Link to="/about-me" className="btn btn-primary">
          Learn more about me
        </Link>
      </div>
      <hr />
      <div className="container mt-6">
        <h2 className="text-center mb-5">Highlights</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h3>Projects</h3>
            <p>Explore my projects that showcase my skills in web development, mobile apps, and more.</p>
            <Link to="/projects" className="btn btn-secondary">View Projects</Link>
          </div>
          <div className="col-md-4">
            <h3>Services</h3>
            <p>Discover the range of services I offer, from web development to cloud solutions.</p>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <p>Get in touch with me for collaborations, projects, or any inquiries.</p>
            <Link to="/contact-me" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
