import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {photo} = props;
  return (
    <article className="photo-list__item">
      <img className="photo-list__image" src={photo.imageSource}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile}/>
        <div className="photo-list__user-info">
          {photo.username}
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
