import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    console.log("favorite switched");
    setFavorite(isFavorite => !isFavorite);
  }

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;