import React from "react";
import PropTypes from 'prop-types';
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

/**
 * The PhotoList component responsible for rendering a list of photos.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {Array} props.photos - An array of photo objects to be displayed.
 * @param {Function} props.toggleFavorite - The function to toggle the favorite status of a photo.
 * @param {Array} props.favorites - An array of favorite photos.
 * @param {Function} props.openModalWithPhoto - The function to open a modal with a specific photo.
 * @returns {JSX.Element} The JSX element representing the photo list.
 */

const PhotoList = (props) => {
  const {
    photoData,
    toggleFavorite,
    favorites,
    openModalWithPhoto
  } = props;

  if (photoData.length === 0) {
    return <p className="no-photos-message">No photos have been favorited...yet.</p>;
  }

  const photosArray = photoData.map((photo) => {
    const {
      id,
      urls: { regular, full },
      location: { city, country },
      user: { name, profile },
      similar_photos,
    } = photo;
    const isFavorite = favorites.some((favPhoto) => favPhoto.id === id);
    const photoObject = {
      id,
      urls: { regular, full },
      location: { city, country },
      user: { name, profile },
      similar_photos,
    };
    const photoObjectForModal = { id, full, city, country, name, profile, similar_photos };

    return (
      <PhotoListItem
        key={id}
        imageSource={regular}
        city={city}
        country={country}
        name={name}
        profile={profile}
        favorite={isFavorite}
        toggleFavorite={() => toggleFavorite(photoObject)}
        openModalWithPhoto={openModalWithPhoto ? () => openModalWithPhoto(photoObjectForModal) : undefined}
      />
    );
  });

  return <ul className="photo-list">{photosArray}</ul>;
};

PhotoList.propTypes = {
  photoData: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array,
  openModalWithPhoto: PropTypes.func
};

export default PhotoList;


