import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = ({ isLogged, logout }) => {
  const [expanded, setExpanded] = useState(false);
  
  const handleLogout = (evt) => {
    evt.preventDefault();
    logout();
    // reload page
    window.location.reload(false);
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" onClick={() => setExpanded(false)}>Home</Link>
          {!isLogged
            ? (
              <>
                <Link to="/login" onClick={() => setExpanded(false)}>Connexion</Link>
                <Link to="/register" onClick={() => setExpanded(false)}>Inscription</Link>
              </>
            ) : (
              <>
                <Link to="/upload" onClick={() => setExpanded(false)}>Upload</Link>
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
