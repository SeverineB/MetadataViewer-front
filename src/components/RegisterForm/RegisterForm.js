/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import * as EmailValidator from 'email-validator';

import './RegisterForm.scss';

import cautionIcon from '../../assets/icons/caution-sign.png';

const RegisterForm = ({
  changeUserFieldRegister,
  email,
  password,
  username,
  register,
  isSignedUp,
  isFailed,
  isLoading,
  error,
  errors,
  setErrors,
  clearErrors,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    clearErrors();
  }, []);

  console.log('IS FAILED', isFailed);
  console.log('IS SIGNED UP', isSignedUp);

  // Check data before submit form

  const checkUsername = (value) => {
    if (value.length < 1) {
      setErrors('username', 'Un nom d\'utilisateur doit être renseigné');
    }
    else if (value.length > 0 && value.length < 4) {
      setErrors('username', 'Le nom d\'utilisateur doit contenir au moins 4 caractères');
    }
    else if (value.length > 30) {
      setErrors('username', 'Le nom d\'utilisateur doit contenir au maximum 30 caractères');
    }
    else {
      setErrors('username', '');
    }
    return true;
  };

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
    changeUserFieldRegister(evt.target.value, evt.target.name);
    switch (evt.target.name) {
      case 'username':
        checkUsername(evt.target.value);
        break;
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
    if (checkUsername && checkEmail && checkPassword) {
      console.log('les champs renseignés sont valides');
      register();
    }
  };

  return (
    <div className="register">
      {isFailed && !isSignedUp && show && (
        <Alert onClose={() => setShow(false)} dismissible>
          <img src={cautionIcon} alt="caution" />
          <p>{error}</p>
          {/* <p>Veuillez vérifier les informations saisies</p> */}
        </Alert>
      )}
      {!isSignedUp && !isLoading && (
        <>
          <Form className="register-form" onSubmit={handleSubmit}>
            <h2 className="register-form-title">Créez votre compte</h2>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Pseudo</Form.Label>
              <Form.Control
                type="username"
                placeholder="Votre pseudo"
                name="username"
                value={username}
                onChange={handleChange}
                className={errors.username ? 'is-invalid' : ''}
              />
            </Form.Group>
            <div className="error-register-username">
              {errors.username}
            </div>
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
            <div className="error-register-email">
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
            <div className="error-register-password">
              <p>{errors.password}</p>
            </div>
            <Button variant="primary" type="submit" className="login-button-submit">
              S'enregistrer
            </Button>
            <div className="login-link">
              <p>Déjà inscrit ?</p>
              <Link to="/login">Connectez-vous</Link>
            </div>
          </Form>
        </>
      )}
      {isSignedUp && !isLoading && (
        <div className="success-message">
          <p><span>Le compte a bien été créé !</span></p>
          <p>Vous pouvez maintenant vous connecter</p>
          <Button type="button" className="login-button-submit">
            <Link to="/login">connexion</Link>
          </Button>
        </div>
      )}
      {isLoading && (
        <Loader
          type="Circles"
          color="#c0ded6"
          height={40}
          width={40}
          className="register-loader"
        />
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
  isLoading: PropTypes.bool.isRequired,
  isSignedUp: PropTypes.bool.isRequired,
  isFailed: PropTypes.bool.isRequired,
  setErrors: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.objectOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RegisterForm;
