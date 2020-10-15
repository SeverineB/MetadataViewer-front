import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = ({ isLogged, logout }) => {
  const handleLogout = (evt) => {
    evt.preventDefault();
    logout();
    // reload page
    window.location.reload(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          {!isLogged
            ? (
              <>
                <Link to="/login">Connexion</Link>
              </>
            ) : (
              <>
                <Link to="/upload">Upload</Link>
                <Link to="/logout" onClick={handleLogout}>Déconnexion</Link>
              </>
            )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavBar;
