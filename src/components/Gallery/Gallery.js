/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import Picture from '../../containers/Picture';
import data from '../../data/Data.json';

import './Gallery.scss';

const Gallery = ({
  files,
  errors,
  fetchUserFiles,
  isLoading,
  isLogged,
}) => {
  if (isLogged) {
    useEffect(() => {
      fetchUserFiles();
    }, []);
  }

  return (
    <>
      {isLoading && isLogged && (
        <Loader
          type="Circles"
          color="#c0ded6"
          height={40}
          width={40}
        />
      )}
      <div className="pictures-gallery">
        {errors && (
        <div className={errors && errors.message ? 'error-message' : 'error-message--hidden'}>
          <p>{errors.message}</p>
        </div>
        )}

        {!isLogged && (
          <div className="pictures-gallery-list">
            {data.map((file) => (
              <div key={file.image._id}>
                <Picture {...file} file={file} />
              </div>
            ))}
          </div>
        )}

        {isLogged && (
          <div className="pictures-gallery-list">
            {files.map((file) => (
              <div key={file.image._id}>
                <Picture {...file} file={file} />
              </div>
            ))}
          </div>
        )}

        {!isLoading && isLogged && (files.length === 0) ? (
          <div className="error-message--empty">
            <p>Aucune image à afficher pour l'instant...</p>
          </div>
        ) : ''}
      </div>
    </>
  );
};

Gallery.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchUserFiles: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Gallery;
