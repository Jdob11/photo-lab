import React from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import useFavorites from 'hooks/useFavorite';

const HomeRoute = (props) => {
  const { photos, topics, favoriteStatus, toggleFavorite, setDisplayModal, isFavPhotoExist } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
      />
      <PhotoList
        photos={photos}
        favoriteStatus={favoriteStatus}
        toggleFavorite={toggleFavorite}
        setDisplayModal={setDisplayModal}
      />
    </div>
  );
};

export default HomeRoute;
