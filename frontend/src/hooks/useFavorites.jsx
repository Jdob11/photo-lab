import { useState, useMemo } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (photoId) => {
    setFavorites((prevStatus) => {
      const updatedStatus = { ...prevStatus };
      updatedStatus[photoId] = !updatedStatus[photoId];
      return updatedStatus;
    });
  };

  const isFavPhotoExist = useMemo(() => {
    const favoritesArray = Object.values(favorites);
    return favoritesArray.includes(true);
  }, [favorites]);

  return {
    favorites,
    toggleFavorite,
    isFavPhotoExist,
  };
};

export default useFavorites;