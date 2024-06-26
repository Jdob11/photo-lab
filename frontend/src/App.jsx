import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

/**
 * The main application component responsible for rendering the application layout and managing photo-related functionality.
 * @returns {JSX.Element} The JSX element representing the entire application.
 */

const App = () => {
  const {
    photoData,
    topicData,
    selectedPhoto,
    openModalWithPhoto,
    closeModal,
    favorites,
    toggleFavorite,
    isFavPhotoExist,
    setTopic,
    chosenTopic,
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
        setTopic={setTopic}
        chosenTopic={chosenTopic}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          onClose={closeModal}
          selectedPhoto={selectedPhoto}
          favorites={favorites}
          favorite={favorites.some((favPhoto) => favPhoto.id === selectedPhoto.id)}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;