import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { isOpen, onClose, selectedPhotoId, photos } = props;
  if (!isOpen) return null;
  const currentPhoto = photos[selectedPhotoId - 1];
  // console.log('Id: ', currentPhoto.id);
  const fullImage = currentPhoto.urls.full;
  const profileImage = currentPhoto.user.profile;
  const name = currentPhoto.user.name;
  const city = currentPhoto.location.city;
  const country = currentPhoto.location.country;
  const similarPhotos =  currentPhoto.similar_photos;

  return (
    <>
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={onClose}>
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <div className='photo-details-modal__images'>
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
      </div>
    </div>
    </>
  )
};

export default PhotoDetailsModal;


