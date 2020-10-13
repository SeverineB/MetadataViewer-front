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
  session,
  loading,
}) => {
  useEffect(() => {
    fetchFiles();
  }, []);

  // TO DISPLAY USERNAME
  const currentUsername = localStorage.getItem('username');

  return (
    <div className="home-page">
      {loading && (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={50}
          width={50}
        />
      )}
      {isLogged && (
        <div className="home-page-message">
          <p className="home-page-message-text">Vous êtes bien connecté(e), bienvenu(e) <span>{currentUsername} </span>!</p>
        </div>
      )}
      <Gallery />
    </div>
  );
};

Home.propTypes = {
  session: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  fetchFiles: PropTypes.func.isRequired,
};

Home.defaultProps = {
  session: '',
};

export default Home;
