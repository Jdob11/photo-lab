import { React, useState, useMemo } from 'react';
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

  const isFavPhotoExist = useMemo(() => {
    const favoriteStatusArray = Object.values(favoriteStatus);
    return favoriteStatusArray.includes(true);
  }, [favoriteStatus]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} favoriteStatus={favoriteStatus} toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;
