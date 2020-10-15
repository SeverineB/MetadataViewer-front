/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import './UploadForm.scss';

const UploadForm = ({
  changeFile,
  fileUrl,
  changeUrl,
  uploadFile,
}) => {
  const history = useHistory();

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
    changeUrl('');
    history.push('/');
  };

  return (
    <div className="upload-image">
      <div className="upload-image-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Téléchargez une image pour afficher ses métadonnées</Form.Label>
            <Form.File
              id="exampleFormControlFile1"
              name="image"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            type="submit"
          >
            Valider
          </Button>
        </Form>
      </div>
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
  changeFile: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  changeUrl: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
};

export default UploadForm;
