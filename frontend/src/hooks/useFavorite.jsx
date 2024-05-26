import { useState, useMemo } from 'react';

const useFavorite = () => {
  const [favoriteStatus, setFavoriteStatus] = useState({});

  const toggleFavorite = (photoId) => {
    setFavoriteStatus((prevStatus) => {
      const updatedStatus = { ...prevStatus };
      updatedStatus[photoId] = !updatedStatus[photoId];
      return updatedStatus;
    });
  };

  const isFavPhotoExist = useMemo(() => {
    const favoriteStatusArray = Object.values(favoriteStatus);
    return favoriteStatusArray.includes(true);
  }, [favoriteStatus]);

  return {
    favoriteStatus,
    toggleFavorite,
    isFavPhotoExist,
  };
};

export default useFavorite;