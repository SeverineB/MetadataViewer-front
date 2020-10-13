/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.scss';

import Picture from '../../containers/Picture';

const Gallery = ({ files }) => {
  console.log('files vaut ', files);
  return (
    <>
      <div className="pictures-gallery-list">
        { files.map((file) => (
          <>
            <Picture key={file.id} {...file} file={file} />
          </>
        ))}
      </div>
    </>
  );
};

Gallery.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Gallery;
