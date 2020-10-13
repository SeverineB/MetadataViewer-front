import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const Register = ({
  email,
  password,
  username,
  setState,
}) => {
  const handleSubmit = () => {
    console.log('je soumets le formulaire');
    // axios request
  };

  // check the value of the field to update corresponding state
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="register-form-title">S'enregistrer</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Form.Control
            type="username"
            placeholder="Votre nom d'utilisateur"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
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
    </div>
  );
};

Register.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Register;
