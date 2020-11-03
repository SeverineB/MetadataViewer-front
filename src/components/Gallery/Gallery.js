/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Picture from '../../containers/Picture';

import './Gallery.scss';
import deleteIcon from '../../assets/icons/cancel.png';

const Gallery = ({
  files,
  errors,
  fetchFiles,
  loading,
  isDeleted,
}) => {
  console.log('errors vaut ', errors);
  console.log('files vaut ', files);

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <>
      {/* <div className={isDeleted ? 'delete-success' : 'delete-success--hidden'}>
        <p className="delete-success-message">
          L'image a bien été supprimée
        </p>
        <button type="submit" className="picture-item-delete">
          <img src={deleteIcon} alt="cancel" />
          <p>x</p>
        </button>
      </div> */}
      <div className="pictures-gallery-list">
        <div className={errors && errors.message ? 'error-message' : 'error-message--hidden'}>
          <p>{errors.message}</p>
        </div>
        {!loading && (files.length === 0) ? (
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
  loading: PropTypes.bool.isRequired,
  isDeleted: PropTypes.bool.isRequired,
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
