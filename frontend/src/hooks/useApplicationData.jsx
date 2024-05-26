import { useState, useMemo } from 'react';

const useApplicationData = () => {
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

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const setDisplayModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return {
    favorites,
    toggleFavorite,
    isFavPhotoExist,
    selectedPhoto,
    setDisplayModal,
    closeModal,
  };
};

export default useApplicationData;
