import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

/**
 * The PhotoFavButton component responsible for rendering a favorite button for a photo.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {boolean} props.favorite - Indicates whether the photo is favorited.
 * @param {Function} props.toggleFavorite - The function to toggle the favorite status of the photo.
 * @param {Object} props.photo - The photo object.
 * @returns {JSX.Element} The JSX element representing the favorite button.
 */

function PhotoFavButton(props) {
  const { favorite, toggleFavorite, photo } = props;

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavorite(photo)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;