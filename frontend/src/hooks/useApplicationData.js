import { useState, useMemo } from 'react';

const useApplicationData = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photo) => {
    if (!photo || !photo.id) return;
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((favPhoto) => favPhoto.id === photo.id);

      if (isFavorite) {
        return prevFavorites.filter((favPhoto) => favPhoto.id !== photo.id);
      } else {
        return [...prevFavorites, photo];
      }
    });
  };

  const isFavPhotoExist = useMemo(() => {
    return favorites.length > 0;
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

