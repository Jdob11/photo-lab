import React from 'react';
import PropTypes from 'prop-types';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

/**
 * The HomeRoute component responsible for rendering the main layout of the home route, including the top navigation bar and the photo list.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {Array} props.photos - The array of photo data to be displayed.
 * @param {Array} props.topics - The array of topic data for filtering photos.
 * @param {Array} props.favorites - The array of favorite photos.
 * @param {Function} props.toggleFavorite - The function to toggle the favorite status of a photo.
 * @param {Function} props.openModalWithPhoto - The function to open a modal with a specific photo.
 * @param {Function} props.isFavPhotoExist - The function to check if a photo is in favorites.
 * @param {Function} props.setTopic - The function to set the current topic.
 * @param {string} props.chosenTopic - The currently chosen topic.
 * @returns {JSX.Element} The JSX element representing the home route layout.
 */

const HomeRoute = (props) => {
  const {
    photoData,
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
        photoData={photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        openModalWithPhoto={openModalWithPhoto}
      />
    </div>
  );
};

HomeRoute.propTypes = {
  photoData: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  openModalWithPhoto: PropTypes.func.isRequired,
  isFavPhotoExist: PropTypes.bool.isRequired,
  setTopic: PropTypes.func.isRequired,
  chosenTopic: PropTypes.number,
};

export default HomeRoute;

