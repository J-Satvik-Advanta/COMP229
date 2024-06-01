import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactMe: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { firstName: '', lastName: '', contactNumber: '', email: '', message: '' };

    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact Number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact Number must be 10 digits';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email Address is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email Address is invalid';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      navigate('/');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '40%' }}>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                />
                {errors.firstName && <div className="text-danger mt-2" style={{ fontSize: '14px' }}>{errors.firstName}</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="form-label">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                />
                {errors.lastName && <div className="text-danger mt-2" style={{ fontSize: '14px' }}>{errors.lastName}</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="contactNumber" 
                  name="contactNumber" 
                  value={formData.contactNumber} 
                  onChange={handleChange} 
                />
                {errors.contactNumber && <div className="text-danger mt-2" style={{ fontSize: '14px' }}>{errors.contactNumber}</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                {errors.email && <div className="text-danger mt-2" style={{ fontSize: '14px' }}>{errors.email}</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message" 
                  rows={3} 
                  value={formData.message} 
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="text-danger mt-2" style={{ fontSize: '14px' }}>{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
