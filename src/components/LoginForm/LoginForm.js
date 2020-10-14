/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import './LoginForm.scss';

const LoginForm = ({
  changeUserField,
  email,
  password,
  login,
}) => {
  const handleChange = (evt) => {
    evt.preventDefault();
    changeUserField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Connecter un user');
    login();
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Votre email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          placeholder="Votre mot de passe"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="login-button-submit">
        Valider
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUserField: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default LoginForm;
