import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  const { topics, favoriteStatus } = props;

  const isFavPhotoExist = () => {
    const favoriteStatusArray = Object.values(favoriteStatus);
    return favoriteStatusArray.includes(true);
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist()}/>
    </div>
  )
}

export default TopNavigationBar;