import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { isOpen, onClose, photo, photos } = props;
  if (!isOpen) return null;
  const currentPhoto = photos[photo - 1];
  console.log('Id: ', currentPhoto.id);
  console.log('Full Image: ', currentPhoto.urls.full);
  console.log('Similar Photos: ', currentPhoto.similar_photos);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
