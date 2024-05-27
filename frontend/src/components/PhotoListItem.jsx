import React from "react";
import PropTypes from 'prop-types';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

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

  return (
    <article className="photo-list__item">
      <PhotoFavButton favorite={favorite} photo={photo} toggleFavorite={toggleFavorite} />
      <img
        className="photo-list__image"
        src={imageSource}
        onClick={() => openModalWithPhoto(photo)}
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
  openModalWithPhoto: PropTypes.func.isRequired
};

export default PhotoListItem;

