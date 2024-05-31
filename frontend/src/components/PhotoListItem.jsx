import React from "react";
import PropTypes from 'prop-types';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

/**
 * The PhotoListItem component responsible for rendering an individual photo item in the photo list.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {string} props.imageSource - The URL of the photo image.
 * @param {string} props.city - The city where the photo was taken.
 * @param {string} props.country - The country where the photo was taken.
 * @param {string} props.name - The name of the photographer.
 * @param {string} props.profile - The URL of the photographer's profile picture.
 * @param {boolean} props.favorite - Indicates whether the photo is favorited.
 * @param {Function} props.toggleFavorite - The function to toggle the favorite status of the photo.
 * @param {Function} [props.openModalWithPhoto] - The optional function to open a modal with the photo details.
 * @returns {JSX.Element} The JSX element representing the photo item.
 */

const PhotoListItem = (props) => {
  const { imageSource,
          city,
          country,
          name,
          profile,
          favorite,
          toggleFavorite,
          openModalWithPhoto
        } = props;
  const photo = {
    id: imageSource,
    urls: { regular: imageSource },
    location: { city, country },
    user: { name, profile }
  };
  const handleClick = () => {
    if (openModalWithPhoto) {
      openModalWithPhoto()
    }
  }

  return (
    <article className="photo-list__item">
      <PhotoFavButton favorite={favorite} photo={photo} toggleFavorite={toggleFavorite} />
      <img
        className="photo-list__image"
        src={imageSource}
        onClick={handleClick}
        alt={`Photo from ${city}, ${country}, taken by ${name}`}
      />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`${name}'s profile picture`} />
        <div className="photo-list__user-info">
          {name}
          <div className="photo-list__user-location">{city}, {country}</div>
        </div>
      </div>
    </article>
  );
};

PhotoListItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default PhotoListItem;

