import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

import './RegisterForm.scss';

const RegisterForm = ({
  changeUserFieldRegister,
  email,
  password,
  username,
  register,
  isSignedUp,
  loading,
  error,
}) => {
  console.log('IS SIGNED UP DANS REGISTER FORM ', isSignedUp);
  // check the value of the field to update corresponding state
  const handleChange = (evt) => {
    evt.preventDefault();
    changeUserFieldRegister(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    register();
  };

  return (
    <div className="register">
      {!isSignedUp && (
        <>
          <h2 className="register-form-title">S'enregistrer</h2>
          <Form className="register-form" onSubmit={handleSubmit}>
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
        </>
      )}
      {isSignedUp && !loading && (
        <div className="success-message">
          <p>Vous êtes bien enregistré !</p>
          <p>Vous pouvez maintenant vous connecter</p>
          <Link to="/login">connexion</Link>
        </div>
      )}
    </div>
  );
};

RegisterForm.propTypes = {
  changeUserFieldRegister: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isSignedUp: PropTypes.bool.isRequired,
};

export default RegisterForm;
