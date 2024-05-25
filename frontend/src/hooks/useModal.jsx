import { useState } from 'react';

const useModal = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const setDisplayModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return {
    selectedPhoto,
    setDisplayModal,
    closeModal,
  };
};

export default useModal;