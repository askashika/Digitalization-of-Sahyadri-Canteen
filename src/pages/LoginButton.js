import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function LoginButton() {
  return (
    <Link to="/login">
      <Button variant="outline-success" className="ms-auto">
        Login
      </Button>
    </Link>
  );
}

export default LoginButton;
