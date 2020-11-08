import React from 'react';
import { Link } from 'react-router-dom';

import './Page404.scss';

const Page404 = () => (
  <div className="notfound-container">
    <p className="notfound-error">Error 404  </p>
    <p>Are you lost in space..?</p>
    <Link to="/">Retour à l'accueil</Link>
  </div>
);

export default Page404;
