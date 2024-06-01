
import React from 'react';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
  return (
   <>
     <div className="container text-center my-5">
      <h1>Welcome to My Portfolio</h1>
      <p className="lead">This is my personal portfolio site created with React, TypeScript, Vite, and Bootstrap.</p>
      <p className="my-4">
        <strong>Mission Statement:</strong> My mission is to leverage my skills and passion for technology to create innovative, efficient, and user-friendly web solutions that solve real-world problems.
      </p>
      <Link to="/about-me" className="btn btn-primary">
        Learn more about me
      </Link>
    </div>
   </>
  );
}

export default Home;