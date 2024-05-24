import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos } = props;
  const photosArray = photos.map(({ id, urls: { full, regular}, location: { city, country }, user:{username, name, profile} }) => (
    <PhotoListItem
      key={id}
      imageSource={regular}
      city={city}
      country={country}
      name={name}
      profile={profile}
    />
  ))

  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
};

export default PhotoList;
