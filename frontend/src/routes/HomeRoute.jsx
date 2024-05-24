import { React, useState } from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics } = props;

  const [favoriteStatus, setFavoriteStatus] = useState({});

  const toggleFavorite = (photoId) => {
    setFavoriteStatus(prevStatus => {
      const updatedStatus = { ...prevStatus };
      updatedStatus[photoId] = !updatedStatus[photoId];
      return updatedStatus;
    });
  };

  const isFavPhotoExist = () => {
    const favoriteStatusArray = Object.values(favoriteStatus);
    return favoriteStatusArray.includes(true);
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoriteStatus={favoriteStatus} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} favoriteStatus={favoriteStatus} toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;
