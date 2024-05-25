import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PropTypes from 'prop-types';

const PhotoListItem = (props) => {
  const { imageSource, city, country, name, profile, favorite, toggleFavorite, setDisplayModal } = props;
  
  return (
    <article className="photo-list__item">
      <PhotoFavButton favorite={favorite} toggleFavorite={toggleFavorite}/>
      <img  className="photo-list__image"
            src={imageSource}
            onClick={() => setDisplayModal({ imageSource, city, country, name, profile })} 
            alt={`${city}, ${country}`} 
      />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <div className="photo-list__user-info">
          {name}
          <div className="photo-list__user-location">{city}, {country}</div>
        </div>
      </div>
    </article>
  )
};

PhotoListItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired
};

export default PhotoListItem;
