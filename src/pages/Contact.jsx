import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Reviews } from '../components/Reviews';
import { Form } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/feedback', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the feedback!', error);
    }
  };

  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Contact</h1>
        </div>
      </header>

      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex align-items-center justify-content-center'>
            <ContactInfo />
          </div>
          <div className='col-lg-6 d-flex justify-content-center'>
            <Form onSubmit={handleSubmit}>
              <h2>Feedback</h2><br />
              <Form.Group className='row mb-3'>
                <div className='col-md-6'>
                  <Form.Label htmlFor='first-name'>First Name</Form.Label>
                  <Form.Control type='text' id='first-name' name='firstName' onChange={handleChange} />
                </div>
                <div className='col-md-6'>
                  <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                  <Form.Control type='text' id='last-name' name='lastName' onChange={handleChange} />
                </div>
              </Form.Group>
              <Form.Group className='row mb-3'>
                <div className='col-md-6'>
                  <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                  <Form.Control type='email' id='email-address' name='emailAddress' onChange={handleChange} />
                </div>
                <div className='col-md-6'>
                  <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                  <Form.Control type='tel' id='phone-number' name='phoneNumber' onChange={handleChange} />
                </div>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='comments'>Comments</Form.Label>
                <Form.Control as='textarea' id='comments' name='comments' onChange={handleChange} />
              </Form.Group>

              <button type='submit' className='btn btn-success btn-lg'>Submit</button>
            </Form>
          </div>
        </div>
      </div>

      <div className='bg-dark text-light py-5'>
        <Reviews />
      </div>
    </div>
  );
}

export default Contact;
