import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

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