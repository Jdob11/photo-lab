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

  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const openModalWithPhoto = (photoId) => {
    setSelectedPhotoId(photoId);
  };

  const closeModal = () => {
    setSelectedPhotoId(null);
  };

  return {
    favorites,
    toggleFavorite,
    isFavPhotoExist,
    selectedPhotoId,
    openModalWithPhoto,
    closeModal,
  };
};

export default useApplicationData;

