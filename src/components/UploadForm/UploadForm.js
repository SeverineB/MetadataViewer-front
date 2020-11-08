/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Form, Alert } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

import './UploadForm.scss';

const UploadForm = ({
  changeFile,
  fileUrl,
  changeUrl,
  isLoading,
  isLoaded,
  uploadFile,
}) => {
  const [show, setShow] = useState(false);

  const handleChange = (evt) => {
    evt.preventDefault();
    const fileToUpload = evt.target.files[0];
    const newFileUrl = URL.createObjectURL(evt.target.files[0]);
    if (evt.target.files[0]) {
      changeFile(fileToUpload);
      changeUrl(newFileUrl);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    uploadFile();
    setShow(true);
    changeUrl('');
  };

  console.log('IS LOADED', isLoaded);
  console.log('SHOW', show);

  return (
    <div className="upload-image">
      {isLoaded && show && (
      <Alert onClose={() => setShow(false)} dismissible>
        <p>Image téléchargée avec succès !</p>
        <Link to="/">Revenir à l'accueil</Link>
      </Alert>
      )}
      {isLoading && (
      <Loader
        type="Circles"
        color="#a9df93"
        height={40}
        width={40}
      />
      )}
      <Form className="upload-image-form" onSubmit={handleSubmit}>
        <h2 className="upload-image-form-title">Téléchargez une image pour afficher ses métadonnées</h2>
        <Form.Group>
          <div className="upload-btn-container upload-image-form-btn">
            <label htmlFor="inputFile" className="label-file">Choisir une image</label>
            <input type="file" name="image" id="inputFile" onChange={handleChange} />
          </div>
        </Form.Group>
        <Button
          type="submit"
        >
          Télécharger
        </Button>
      </Form>
      <div className="upload-image-preview-container">
        {fileUrl ? (
          <div className="upload-image-preview-item">
            <img src={fileUrl} alt={fileUrl} />
          </div>
        )
          : ''}
      </div>
    </div>
  );
};

UploadForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  changeFile: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  changeUrl: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
};

export default UploadForm;
