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

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModalWithPhoto = (photoId) => {
    setSelectedPhoto(photoId);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return {
    favorites,
    toggleFavorite,
    isFavPhotoExist,
    selectedPhoto,
    openModalWithPhoto,
    closeModal,
  };
};

export default useApplicationData;

