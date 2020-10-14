import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

// import styles
import './Picture.scss';

import deleteIcon from '../../../assets/icons/x-square.svg';

const Picture = ({
  file,
  isLogged,
/*   deletePicture, */
}) => {
  const [deleteError, setDeleteError] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState('');

  const fileToUrl = () => {
    const imageUrl = `http://localhost:3001/${file.image.imagePath}`;
    return imageUrl;
  };

  const { name, size, type } = file.metadata;

  const deletePicture = () => {
    // axios request for deleting a picture
    axios.delete(`http://localhost:3001/api/images/delete/${file.image._id}`,
      {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('delete ok');
          setDeleteSuccess('L\'image a bien été supprimée');
          document.location.reload(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setDeleteError('Impossible de supprimer l\'image');
      });
  };

  const handleDelete = () => {
    deletePicture();
  };

  // add style to the exifMetadata object
  const displayMetadata = (data) => {
    const stringData = JSON.stringify(data, null, 2);
    const styledData = stringData.replace(/"/g, '').replace(/^ +/gm, ' ').replace(/{/g, '').replace(/}/g, '');
    return styledData;
  };

  return (
    <>
      <div className="picture-item">
        {isLogged
          && (
            <button type="submit" className="picture-item-delete" onClick={handleDelete}>
              <img src={deleteIcon} alt="croix" />
            </button>
          )}
        <div className="picture-item-image">
          <img src={fileToUrl()} alt={file.image.name} />
        </div>
        <div className="picture-item-metadatas">
          <div className="picture-item-metadatas-name">
            <span>Nom :</span>
            <p>{name}</p>
          </div>
          <div className="picture-item-metadatas-size">
            <span>Taille :</span>
            <p>{size} octets</p>
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

      {deleteError ? <div className="delete-error">{deleteError}</div> : ''}
      {deleteSuccess ? <div className="delete-success">{deleteSuccess}</div> : ''}
    </>
  );
};

Picture.propTypes = {
  file: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  deletePicture: PropTypes.func.isRequired,
};

export default Picture;
