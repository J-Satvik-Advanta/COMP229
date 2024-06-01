/* 
 * File name: projects.tsx
 * Student's Name: Satvik Kumar Jain
 * StudentID: 301370624
 * Date: 2024-05-31
 */
/* projects.tsx */
import React from 'react';

const projects = [
  {
    image: '/advanta-rapid-erp.png',
    title: 'Rapid ERP',
    description: 'Rapid ERP is a comprehensive ERP solution for schools and colleges, encompassing everything from administrative tasks to student management, financial operations, and more. It aims to streamline and automate various processes within educational institutions, making management more efficient and effective.',
    role: 'Front End and Back End Developer',
    outcome: 'The project successfully integrated multiple modules into a single platform, improving administrative efficiency and providing real-time data insights.'
  },
  {
    image: '/advanta-witty.jpeg',
    title: 'Advanta Witty',
    description: 'Advanta Witty is an advanced accounting software designed to simplify financial management for businesses of all sizes. It offers features such as invoicing, expense tracking, payroll management, and financial reporting, helping businesses maintain accurate financial records and streamline their accounting processes.',
    role: 'Front End and Back End Developer',
    outcome: 'The software significantly reduced the time spent on financial management tasks, provided accurate financial reports, and improved overall business operations.'
  },
  {
    image: '/advanta-portal.png',
    title: 'Advanta Portal',
    description: 'Advanta Portal is a robust platform for managing student and parent data, providing tools for communication, performance tracking, attendance management, and more. It helps educational institutions keep track of student information and enhance parent-teacher interactions, ensuring a collaborative environment for student success.',
    role: 'Front End and Back End Developer',
    outcome: 'The portal enhanced communication between parents and teachers, improved student performance tracking, and streamlined administrative tasks.'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="container my-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 p-4">
              <img src={project.image} className={`card-img-top ${project.title === 'Rapid ERP' ? 'erp' : ''}`}  alt={project.title} />
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><strong>Role:</strong> {project.role}</p>
                <p className="card-text"><strong>Outcome:</strong> {project.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
