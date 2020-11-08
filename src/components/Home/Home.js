/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import './Home.scss';

// import Components
import About from './About/About';
import Gallery from '../../containers/Gallery';

const Home = ({
  isLogged,
  isLoading,
}) => {
  // To display username
  const currentUsername = localStorage.getItem('username');

  return (
    <div className="home-page-container">
      {!isLogged && (
        <>
          <About />
          <Alert>
            <p>Connectez-vous pour accéder à votre galerie personnelle et au téléchargement</p>
          </Alert>
        </>
      )}
      {isLogged && !isLoading && (
        <Alert className="alert-welcome">
          <p>Bienvenue <span>{currentUsername}</span> !</p>
          <p>Vous pouvez maintenant télécharger des images</p>
        </Alert>
      )}
      <Gallery />
    </div>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Home;
