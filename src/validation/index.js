/* eslint-disable import/prefer-default-export */
import * as EmailValidator from 'email-validator';

import {
  setErrors,
} from '../actions';

/* export const checkFields = (fieldName, value) => {
  switch (fieldName) {
    case 'email':
      if (value.length < 1) {
        setErrors('email', 'L\'email doit être renseigné');
      }
      else if (!EmailValidator.validate(value)) {
        setErrors('email', 'Le format de l\'email n\'est pas valide');
      }
      else {
        setErrors('');
      }
      break;
    case 'password':
      console.log('je suis dans le case password');
      if (value.length < 1) {
        setErrors('password', 'Le mot de passe doit être renseigné');
      }
      else if (value > 0 && value.length < 5) {
        setErrors('Le mot de passe doit contenir au moins 5 caractères');
      }
      else if (!/[A-Z]/.test(value)) {
        setErrors('Le mot de passe doit contenir au moins 1 majuscule');
      }
      else if (!/[0-9]/.test(value)) {
        setErrors('Le mot de passe doit contenir au moins 1 chiffre');
      }
      else {
        setErrors('');
      }
      break;
    default:
      break;
  }
}; */

export const checkEmail = (value) => {
  const state = store.getState();
  console.log('je suis dans le checkEmail');
  console.log('value', value);
  if (value.length < 1) {
    setErrors('email', 'L\'email doit être renseigné');
  }
  else if (!EmailValidator.validate(value)) {
    console.log('email non valide');
    console.log(setErrors());
    setErrors('email', 'Le format de l\'email n\'est pas valide');
    console.log(setErrors());
  }
  else {
    setErrors('email', '');
  }
  return true;
};

export const checkPassword = (value) => {
  if (value.length < 1) {
    setErrors('password', 'Le mot de passe doit être renseigné');
  }
  else if (value > 0 && value.length < 5) {
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
