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
  const handleChange = (evt) => {
    evt.preventDefault();
    const fileToUpload = evt.target.files[0];
    const newFileUrl = URL.createObjectURL(evt.target.files[0]);
    changeFile(fileToUpload);
    changeUrl(newFileUrl);
  };

  const history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    uploadFile();
    changeUrl('');
    history.push('/');
  };

  return (
    <div className="upload-image-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Choisissez une image à télécharger</Form.Label>
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

      {fileUrl ? (
        <div className="upload-image-preview">
          <img src={fileUrl} alt={fileUrl} />
        </div>
      )
        : ''}
    </div>
  );
};

UploadForm.propTypes = {
  changeFile: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  changeUrl: PropTypes.func.isRequired,
  addFile: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
};

export default UploadForm;
