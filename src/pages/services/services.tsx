import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications using the latest technologies like React, Angular, and TypeScript.',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly and high-performance mobile applications for both Android and iOS platforms.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces with a focus on user experience.',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Developing e-commerce functionalities including online store setup, payment integration, and product management.',
  },
  {
    title: 'API Development',
    description: 'Building robust and scalable REST APIs using Node.js, Express.js, and MongoDB.',
  },
  {
    title: 'Automated Testing',
    description: 'Implementing end-to-end testing using tools like Playwright and Selenium to ensure code quality and reliability.',
  },
  {
    title: 'WordPress Development',
    description: 'Customizing and maintaining WordPress themes and plugins, optimizing websites for performance and SEO.',
  },
  {
    title: 'Cloud Services',
    description: 'Utilizing AWS services for building and deploying scalable cloud applications.',
  },
  {
    title: 'Technical Documentation',
    description: 'Creating comprehensive technical documentation and training materials for developers and end-users.',
  },
];

const Services: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
