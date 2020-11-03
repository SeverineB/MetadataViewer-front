/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import './Home.scss';

// import Components
import Gallery from '../../containers/Gallery';

const Home = ({
  fetchFiles,
  isLogged,
  isLoading,
}) => {
  useEffect(() => {
    console.log('je check les images en arrivant sur home');
    fetchFiles();
  }, []);

  // To display username
  const currentUsername = localStorage.getItem('username');

  return (
    <div className="home-page">
      {isLoading && (
        <Loader
          type="Circles"
          color="#c0ded6"
          height={40}
          width={40}
        />
      )}
      {isLogged && !isLoading && (
        <div className="home-page-message">
          <p className="home-page-message-welcome">Vous êtes bien connecté(e) {currentUsername}</p>
          <p className="home-page-message-text">Vous pouvez maintenant télécharger des images et les supprimer</p>
        </div>
      )}
      <Gallery />
    </div>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  fetchFiles: PropTypes.func.isRequired,
};

export default Home;
