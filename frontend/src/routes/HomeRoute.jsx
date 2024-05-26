import React from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, favorites, toggleFavorite, openModalWithPhoto, isFavPhotoExist } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        openModalWithPhoto={openModalWithPhoto}
      />
    </div>
  );
};

export default HomeRoute;
