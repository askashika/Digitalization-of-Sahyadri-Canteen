import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import LoginButton from './pages/LoginButton';  // Import the LoginButton component
import './App.css';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              SCEM Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to="/" className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link as={Link} to="/menu" className='text-uppercase'>Menu</Nav.Link>
              <Nav.Link as={Link} to="/about" className='text-uppercase'>About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className='text-uppercase'>Contact</Nav.Link>
              <Nav.Link as={Link} to="/booking" className='text-uppercase'>Book</Nav.Link>
            </Nav>
            <LoginButton /> {/* Add the LoginButton component */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/booking' element={<Booking />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <div className='footer-content'>
          <p className='footer-text'>&#169; 2024 Sahyadri College of Engineering and Management</p>
          <div className='social-icons'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="ms-3">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ms-3">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="ms-3">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="ms-3">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
