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
  loading,
  session,
}) => {
  useEffect(() => {
    console.log('je check les images en arrivant sur home');
    fetchFiles();
  }, []);

  console.log('LOADING UPLOAD DANS HOME', loading);

  // To display username
  const currentUsername = localStorage.getItem('username');

  return (
    <div className="home-page">
      {loading && (
        <Loader
          type="Circles"
          color="#5bf8c9"
          height={40}
          width={40}
        />
      )}
      {isLogged && !loading && (
        <div className="home-page-message">
          <p className="home-page-message-text">Vous êtes bien connecté(e), bienvenu(e) <span>{currentUsername} </span>!</p>
          <p className="home-page-message-text">Vous êtes bien connecté(e), bienvenu(e) <span>{session.username} </span>!</p>
        </div>
      )}
      <Gallery />
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  fetchFiles: PropTypes.func.isRequired,
  session: PropTypes.objectOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Home;
