import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

// import styles
import './Picture.scss';

import deleteIcon from '../../../assets/icons/x-square.svg';
import { toggleModal } from '../../../actions';

const Picture = ({
  file,
  isLogged,
  changeFile,
  deletePicture,
  open,
  toggleModal,
}) => {
  const [deleteError, setDeleteError] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState('');
 
  console.log('FILE ID DANS PICTURE VAUT :', file.id);
  console.log('FILE DANS PICTURE VAUT :', file);

  const openDeleteModal = () => {
    toggleModal();
  };

  const handleDelete = () => {
    console.log('je soumets le delete');
  };

  return (
    <>
      <div className="picture-item">
        {isLogged
        && (
          <button type="submit" className="picture-item-delete" onClick={openDeleteModal} >
            <img src={deleteIcon} alt="croix" />
          </button>
        )}
        <img src={file.imageUrl} alt={file.imageUrl} />
        <div className="meta-datas">
          <p></p>
        </div>
      {/*   <Modal.Dialog className={open ? 'delete-modal delete-modal--opened' : 'delete-modal'}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Voulez-vous vraiment supprimer cette image ?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Non</Button>
            <Button variant="primary" onSubmit={handleDelete}>Oui</Button>
          </Modal.Footer>
        </Modal.Dialog> */}
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
