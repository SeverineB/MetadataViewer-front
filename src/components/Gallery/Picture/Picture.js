import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

// import styles
import './Picture.scss';

import deleteIcon from '../../../assets/icons/x-square.svg';
import { toggleModal } from '../../../actions';

const Picture = ({
  file,
  isLogged,
  changeFile,
 /*  deletePicture, */
  open,
  toggleModal,
}) => {
  const [deleteError, setDeleteError] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState('');

  const { name, size, type } = file.metadata;

  const openDeleteModal = () => {
    toggleModal();
  };

  const deletePicture = () => {
    // axios request for deleting a picture
    axios.delete(`http://localhost:3001/api/images/delete/${file.id}`,
      {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('delete ok');
          setDeleteSuccess('L\'image a bien été supprimée');
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
          <img src={file.imageUrl} alt={file.imageUrl} />
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
        </div>
      </div>

      {deleteError ? <div className="delete-error">{deleteError}</div> : ''}
      {deleteSuccess ? <div className="delete-success">{deleteSuccess}</div> : ''}
    </>
  );
};

Picture.propTypes = {
  open: PropTypes.bool.isRequired,
  file: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeFile: PropTypes.func.isRequired,
  deletePicture: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Picture;
