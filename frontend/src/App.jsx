import { React, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          isOpen={!!selectedPhoto}
          onClose={closeModal}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
