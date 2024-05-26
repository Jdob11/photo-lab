import { React, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useModal from 'hooks/useModal';
import useFavorite from 'hooks/useFavorite';

const App = () => {
  const { selectedPhoto, setDisplayModal, closeModal } = useModal();
  const { favoriteStatus, toggleFavorite, isFavPhotoExist } = useFavorite();
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favoriteStatus={favoriteStatus}
        toggleFavorite={toggleFavorite}
        setDisplayModal={setDisplayModal}
        isFavPhotoExist={isFavPhotoExist}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          isOpen={!!selectedPhoto}
          onClose={closeModal}
          selectedPhotoId={selectedPhoto}
          photos={photos}
          favoriteStatus={favoriteStatus}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
