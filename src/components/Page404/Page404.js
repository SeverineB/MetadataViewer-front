import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <p>Error 404 - Not found  </p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default Page404;
