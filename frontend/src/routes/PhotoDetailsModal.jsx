import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

/**
 * The PhotoDetailsModal component responsible for displaying details of a selected photo in a modal.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {Function} props.onClose - The function to close the modal.
 * @param {Object} props.selectedPhoto - The selected photo object containing details such as image URL, photographer info, etc.
 * @param {Array} props.favorites - The array of favorite photos.
 * @param {boolean} props.favorite - Indicates whether the selected photo is in favorites.
 * @param {Function} props.toggleFavorite - The function to toggle the favorite status of a photo.
 * @returns {JSX.Element} The JSX element representing the photo details modal.
 */

const PhotoDetailsModal = (props) => {
  const {
    onClose,
    selectedPhoto,
    favorites,
    favorite,
    toggleFavorite,
    photoData,
  } = props;

  const {
    full: fullImage,
    profile: profileImage,
    name,
    city,
    country,
    similar_photos
  } = selectedPhoto;

  const similarPhotosArray = Object.values(similar_photos);
  
  if (!selectedPhoto) return null;
  
  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={onClose}>
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          favorite={favorite}
          photo={selectedPhoto}
          toggleFavorite={toggleFavorite}
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
          photoData={photoData}
          photos={similarPhotosArray}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

PhotoDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedPhoto: PropTypes.object.isRequired,
  favorites: PropTypes.array,
  favorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};


export default PhotoDetailsModal;
