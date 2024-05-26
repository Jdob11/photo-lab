import { React, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { selectedPhotoId, openModalWithPhoto, closeModal, favorites, toggleFavorite, isFavPhotoExist } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        openModalWithPhoto={openModalWithPhoto}
        isFavPhotoExist={isFavPhotoExist}
      />
      {selectedPhotoId && (
        <PhotoDetailsModal
          isOpen={!!selectedPhotoId}
          onClose={closeModal}
          selectedPhotoId={selectedPhotoId}
          photos={photos}
          favorites={favorites}
          favorite={favorites.some((favPhoto) => favPhoto.id === selectedPhotoId.id)}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
