import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
          photoData,
          topicData,
          selectedPhoto,
          openModalWithPhoto,
          closeModal,
          favorites,
          toggleFavorite,
          isFavPhotoExist
        } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        openModalWithPhoto={openModalWithPhoto}
        isFavPhotoExist={isFavPhotoExist}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          isOpen={!!selectedPhoto}
          onClose={closeModal}
          selectedPhoto={selectedPhoto}
          photos={photos}
          favorites={favorites}
          favorite={favorites.some((favPhoto) => favPhoto.id === selectedPhoto.id)}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;