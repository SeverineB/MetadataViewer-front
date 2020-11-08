/* eslint-disable max-len */
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

import './About.scss';

const About = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="about-container">
      {show && (
      <Alert onClose={() => setShow(false)} dismissible>
        <p>Cette application permet de visualiser les métadonnées EXIF contenues dans une photo (si elle en contient).</p>
        <p>Les métadonnées <span className="span-bold">EXIF</span> (Exchangeable Image File) définissent les informations techniques d'une photo telles que l'<span className="span-italic">orientation</span>, l'<span className="span-italic">ISO</span>, ou encore le <span className="span-italic">mode d'exposition</span>.</p>
      </Alert>
      )}
    </div>
  );
};

export default About;
