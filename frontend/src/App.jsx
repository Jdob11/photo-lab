import { React, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useModal from 'hooks/useModal';
import useFavorites from 'hooks/useFavorite';

const App = () => {
  const { selectedPhoto, setDisplayModal, closeModal } = useModal();
  const { favoriteStatus, toggleFavorite } = useFavorites();
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setDisplayModal={setDisplayModal}
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
