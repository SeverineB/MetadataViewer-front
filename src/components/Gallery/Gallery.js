/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Picture from '../../containers/Picture';

import './Gallery.scss';

const Gallery = ({
  files,
  errors,
  fetchFiles,
  isLoading,
}) => {
  console.log('errors vaut ', errors);
  console.log('files vaut ', files);

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <>
      <div className="pictures-gallery-list">
        <div className={errors && errors.message ? 'error-message' : 'error-message--hidden'}>
          <p>{errors.message}</p>
        </div>
        {!isLoading && (files.length === 0) ? (
          <div className="error-message--empty">
            <p>Aucune image à afficher</p>
          </div>
        ) : ''}

        {files.map((file) => (
          <div key={file.image._id}>
            <Picture {...file} file={file} />
          </div>
        ))}
      </div>
    </>
  );
};

Gallery.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchFiles: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Gallery;
