import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {photos} = props;
  return (
    <>
      <img src={photos.imageSource} />
      <img src={photos.profile} />
      <h3>{photos.username}</h3>
      <h5>{photos.location.city}, {photos.location.country}</h5>
    </>
  )
};

export default PhotoListItem;
