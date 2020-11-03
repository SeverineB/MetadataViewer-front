/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import * as EmailValidator from 'email-validator';

import './LoginForm.scss';

const LoginForm = ({
  changeUserField,
  email,
  password,
  login,
  isLoading,
  errors,
  setErrors,
  clearErrors,
}) => {
  useEffect(() => {
    clearErrors();
  }, []);

  // Check data before submit form

  const checkEmail = (value) => {
    if (value.length < 1) {
      setErrors('email', 'L\'email doit être renseigné');
    }
    else if (!EmailValidator.validate(value)) {
      setErrors('email', 'Le format de l\'email n\'est pas valide');
    }
    else {
      setErrors('email', '');
    }
    return true;
  };

  const checkPassword = (value) => {
    if (value.length < 1) {
      setErrors('password', 'Le mot de passe doit être renseigné');
    }
    else if (value.length > 0 && value.length < 5) {
      setErrors('password', 'Le mot de passe doit contenir au moins 5 caractères');
    }
    else if (!/[A-Z]/.test(value)) {
      setErrors('password', 'Le mot de passe doit contenir au moins 1 majuscule');
    }
    else if (!/[0-9]/.test(value)) {
      setErrors('password', 'Le mot de passe doit contenir au moins 1 chiffre');
    }
    else {
      setErrors('password', '');
    }
    return true;
  };

  const handleChange = (evt) => {
    evt.preventDefault();
    changeUserField(evt.target.value, evt.target.name);
    switch (evt.target.name) {
      case 'email':
        checkEmail(evt.target.value);
        break;
      case 'password':
        checkPassword(evt.target.value);
        break;
      default:
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkEmail && checkPassword) {
      console.log('les champs renseignés sont valides');
      login();
    }
  };

  return (
    <div className="login">
      {!isLoading && (
        <Form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-form-title">Connectez-vous à votre compte</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Votre email"
              name="email"
              value={email}
              onChange={handleChange}
              className={errors.email ? 'is-invalid' : ''}
            />
          </Form.Group>
          <div className="error-email">
            {errors.email}
          </div>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Votre mot de passe"
              name="password"
              value={password}
              onChange={handleChange}
              className={errors.password ? 'is-invalid' : ''}
            />
          </Form.Group>
          <div className="error-password">
            {errors.password}
          </div>
          <Button variant="primary" type="submit" className="login-button-submit">
            Valider
          </Button>
          <div className="register-link">
            <p>Pas encore de compte ?</p>
            <Link to="/register">Inscrivez-vous</Link>
          </div>
        </Form>
      )}
      {isLoading && (
        <Loader
          type="Circles"
          color="#c0ded6"
          height={40}
          width={40}
        />
      )}
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUserField: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setErrors: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LoginForm;
