import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = [
    {
      id: "1",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    {
      id: "2",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    {
      id: "3",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    }
  ]

  return (
    <div className="App">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          imageSource={photo.imageSource}
          city={photo.location.city}
          country={photo.location.country}
          username={photo.username}
          profile={photo.profile}
        />
      ))}
    </div>
  );
};

export default App;
