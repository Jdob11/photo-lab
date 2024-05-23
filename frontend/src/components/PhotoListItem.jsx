import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { imageSource, city, country, username, profile } = props;
  return (
    <article className="photo-list__item">
      <img className="photo-list__image" src={imageSource}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">{city}, {country}</div>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
