import React from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {
          photos,
          topics,
          favorites,
          toggleFavorite,
          openModalWithPhoto,
          isFavPhotoExist,
          setTopic,
          chosenTopic,
        } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        setTopic={setTopic}
        chosenTopic={chosenTopic}
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

