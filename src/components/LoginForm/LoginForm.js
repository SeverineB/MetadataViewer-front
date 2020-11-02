/* eslint-disable no-console */
import React ,{ useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import * as EmailValidator from 'email-validator';

import './LoginForm.scss';

const LoginForm = ({
  changeUserField,
  email,
  password,
  login,
  loading,
}) => {
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleChange = (evt) => {
    evt.preventDefault();
    changeUserField(evt.target.value, evt.target.name);
  };

  // Check before sending data

  const checkEmail = (evt) => {
    const mail = evt.target.value;
    if (mail.length < 1) {
      setErrorEmail('L\'email doit être renseigné');
    }
    else if (!EmailValidator.validate(mail)) {
      setErrorEmail('Le format de l\'email n\'est pas valide');
    }
    else {
      setErrorEmail('');
    }
    return true;
  };

  const checkPassword = (evt) => {
    const pwd = evt.target.value;
    if (pwd.length < 1) {
      setErrorPassword('Le mot de passe doit être renseigné');
    }
    else if (pwd > 0 && pwd.length < 5) {
      setErrorPassword('Le mot de passe doit contenir au moins 5 caractères');
    }
    else if (!/[A-Z]/.test(pwd)) {
      setErrorPassword('Le mot de passe doit contenir au moins 1 majuscule');
    }
    else if (!/[0-9]/.test(pwd)) {
      setErrorPassword('Le mot de passe doit contenir au moins 1 chiffre');
    }
    else {
      setErrorPassword('');
    }
    return true;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkEmail && checkPassword) {
      console.log('les champs renseignés sont valides');
      login();
    }
  };

  return (
    <div>
      <h2 className="login-form-title">Connectez-vous à votre compte</h2>
      {!loading && (
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Votre email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={checkEmail}
            />
          </Form.Group>
          <div className="error-mail">
            {errorEmail}
          </div>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Votre mot de passe"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={checkPassword}
            />
          </Form.Group>
          <div className="error-password">
            {errorPassword}
          </div>
          <Button variant="primary" type="submit" className="login-button-submit">
            Valider
          </Button>
        </Form>
      )}
      {loading && (
        <Loader
          type="Circles"
          color="#00BFFF"
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
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
