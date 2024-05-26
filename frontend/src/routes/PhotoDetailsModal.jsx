import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { isOpen, onClose, selectedPhotoId, photos, favoriteStatus, toggleFavorite } = props;
  if (!isOpen) return null;
  const currentPhoto = photos[selectedPhotoId - 1];
  const { urls: { full: fullImage }, user: { profile: profileImage, name }, location: { city, country }, similar_photos } = currentPhoto;

  const similarPhotosArray = Object.values(similar_photos);

  return (
    <>
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={onClose}>
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton favorite={favoriteStatus} toggleFavorite={toggleFavorite}/>
        <img className='photo-details-modal__image' src={fullImage}/>
        <header className='photo-details-modal__header'>
          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={profileImage}/>
            <div className='photo-details-modal__photographer-info'>
              {name}
              <div className='photo-details-modal__photographer-location'>
                {city}, {country}
              </div>
            </div>
          </div>
        </header>
        <div className="photo-details-modal__header">Similar Photos</div>
          <PhotoList
          photos={similarPhotosArray}
          favoriteStatus={favoriteStatus}
          toggleFavorite={toggleFavorite}
          />
      </div>
    </div>
    </>
  )
};

export default PhotoDetailsModal;


