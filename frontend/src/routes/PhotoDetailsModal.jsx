import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const extractPhotoDetails = (photo) => {
  const {
    id,
    urls: { full: fullImage },
    user: { profile: profileImage, name },
    location: { city, country },
    similar_photos
  } = photo;

  return { id, fullImage, profileImage, name, city, country, similarPhotosArray: Object.values(similar_photos) };
};

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhotoId, photos, favoriteStatus, toggleFavorite }) => {
  if (!isOpen) return null;

  const currentPhoto = photos[selectedPhotoId - 1];
  const { id, fullImage, profileImage, name, city, country, similarPhotosArray } = extractPhotoDetails(currentPhoto);

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={onClose}>
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          favorite={favoriteStatus[id] || false}
          photoId={id}
          toggleFavorite={() => toggleFavorite(id)}
        />
        <img className='photo-details-modal__image' src={fullImage} alt='Full size' />
        <header className='photo-details-modal__header'>
          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={profileImage} alt={`${name}'s profile`} />
            <div className='photo-details-modal__photographer-info'>
              <div>{name}</div>
              <div className='photo-details-modal__photographer-location'>
                {city}, {country}
              </div>
            </div>
          </div>
        </header>
        <div className='photo-details-modal__header'>Similar Photos</div>
        <PhotoList
          photos={similarPhotosArray}
          favoriteStatus={favoriteStatus}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;



