/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import { urlServer } from '../../../constants/constants';

// import styles
import './Picture.scss';

import deleteIcon from '../../../assets/icons/trash-can.png';
import defaultPicture from '../../../assets/images/defaultPicture.jpg';

const Picture = ({
  file,
  isLogged,
  saveFileToDelete,
  deleteFile,
  deletePictureOnScreen,
}) => {
  const { name, size, type } = file.metadata;

  // construct the url of the image
  const fileToUrl = () => {
    const imageUrl = `${urlServer}/${file.image.thumbnailPath}`;
    return imageUrl;
  };

  const handleDelete = () => {
    saveFileToDelete(file);
    deleteFile();
    deletePictureOnScreen(file.image._id);
  };

  // add style to the exifMetadata object
  const displayMetadata = (data) => {
    const stringData = JSON.stringify(data, null, 2);
    const styledData = stringData.replace(/"/g, '').replace(/^ +/gm, ' ').replace(/{/g, '').replace(/}/g, '');
    return styledData;
  };

  const convertInMo = (size) => {
    const sizeInMo = parseInt(size) / 1000000;
    const newSize = sizeInMo.toFixed(2);
    return newSize;
  }

  return (
    <>
      <div className="picture-item">
        {isLogged
          && (
            <button type="submit" className="picture-item-delete-btn" onClick={handleDelete}>
              <img src={deleteIcon} alt="trash" />
            </button>
          )}
        <div className="picture-item-image">
          {isLogged && <img src={fileToUrl()} alt={file.image.name} />}
          {!isLogged && <img src={defaultPicture} alt={defaultPicture} />}
        </div>
        <div className="picture-item-metadatas">
          <div className="picture-item-metadatas-name">
            <span>Nom :</span>
            <p>{name}</p>
          </div>
          <div className="picture-item-metadatas-size">
            <span>Taille :</span>
            <p>{convertInMo(size)} Mo</p>
          </div>
          <div className="picture-item-metadatas-type">
            <span>Type :</span>
            <p>{type}</p>
          </div>
          <div className="picture-item-metadatas-exif">
            {file.exifMetadata ? (
              <div className="picture-item-metadatas-exif-item">
                <pre>{displayMetadata(file.exifMetadata)}</pre>
              </div>
            ) : <p className="picture-item-metadatas-exif--noentry">Il n'y a pas de métadonnées pour cette image</p>}
          </div>
        </div>
      </div>
    </>
  );
};

Picture.propTypes = {
  file: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  deleteFile: PropTypes.func.isRequired,
  saveFileToDelete: PropTypes.func.isRequired,
  deletePictureOnScreen: PropTypes.func.isRequired,
};

export default Picture;
