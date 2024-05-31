import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

/**
 * The TopNavigationBar component responsible for rendering the top navigation bar of the application.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {Array} props.topics - An array of topic objects.
 * @param {Function} props.setTopic - The function to set the current topic.
 * @param {string} props.chosenTopic - The currently chosen topic.
 * @param {boolean} props.isFavPhotoExist - Indicates whether favorite photos exist.
 * @returns {JSX.Element} The JSX element representing the top navigation bar.
 */

const TopNavigationBar = (props) => {
  const {
    topics,
    isFavPhotoExist,
    setTopic,
    chosenTopic,
    onFavBadgeClick,
    reloadInitialPhotoData,
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={reloadInitialPhotoData}>PhotoLabs</span>
      <div className='top-nav-bar'>
        <TopicList topics={topics} setTopic={setTopic} chosenTopic={chosenTopic} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} onClick={onFavBadgeClick}/>
      </div>
    </div>
  );
};

TopNavigationBar.propTypes = {
  topics: PropTypes.array.isRequired,
  setTopic: PropTypes.func.isRequired,
  chosenTopic: PropTypes.number,
  isFavPhotoExist: PropTypes.bool.isRequired,
};

export default TopNavigationBar;