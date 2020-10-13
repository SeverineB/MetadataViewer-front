/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';

// == Import styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Import Components
import Home from '../../containers/Home';
import NavBar from '../../containers/NavBar';
import LoginForm from '../../containers/LoginForm';
import Register from '../../containers/Register';
import UploadForm from '../../containers/UploadForm';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Page404 from '../Page404/Page404';

// == Composant
const App = ({ checkIfLogged }) => {
  // check if the user is connected
  useEffect(() => {
    console.log('je checke si le user est bien connecté');
    checkIfLogged();
  }, []);

  return (
    <div className="app">
      <NavBar />
      <h1 className="app-title">Gestionnaire de métadonnées</h1>

      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={LoginForm} />
        <PublicRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/upload" component={UploadForm} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  checkIfLogged: PropTypes.func.isRequired,
};

export default withRouter(App);
