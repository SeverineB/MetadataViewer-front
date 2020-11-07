/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';

import pixelIcon from '../../assets/icons/alien-pixels.png';

// == Import styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Import Components
import Home from '../../containers/Home';
import NavBar from '../../containers/NavBar';
import LoginForm from '../../containers/LoginForm';
import RegisterForm from '../../containers/RegisterForm';
import UploadForm from '../../containers/UploadForm';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Page404 from '../Page404/Page404';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../../ErrorBoundary';

// == Composant
const App = ({ checkIfLogged }) => {
  // check if the user is connected
  useEffect(() => {
    checkIfLogged();
  }, []);

  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div className="app">
      <NavBar />
      <ErrorBoundary>
        <div className="app-title">
          <h1 className="app-title-text">The Metadata Viewer</h1>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute exact path="/login" component={LoginForm} />
          <PublicRoute exact path="/register" component={RegisterForm} />
          <PrivateRoute exact path="/upload" component={UploadForm} />
          <Route component={Page404} />
        </Switch>
      </ErrorBoundary>
      <div className="alien-image">
        <img src={pixelIcon} alt={pixelIcon} />
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  checkIfLogged: PropTypes.func.isRequired,
};

export default withRouter(App);
