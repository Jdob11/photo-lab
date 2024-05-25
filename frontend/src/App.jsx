import { React, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const setDisplayModal = (photo) => {
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
        setDisplayModal={setDisplayModal}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          isOpen={!!selectedPhoto}
          onClose={closeModal}
          photo={selectedPhoto}
          photos={photos}
        />
      )}
    </div>
  );
};

export default App;
