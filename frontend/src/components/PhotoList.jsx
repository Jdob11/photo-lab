import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, toggleFavorite, favorites, setDisplayModal } = props;
  const photosArray = photos.map(({ id, urls: { regular }, location: { city, country }, user:{ name, profile} }) => (
    <PhotoListItem
      key={id}
      imageSource={regular}
      city={city}
      country={country}
      name={name}
      profile={profile}
      favorite={favorites[id] || false}
      toggleFavorite={() => toggleFavorite(id)}
      setDisplayModal={() => setDisplayModal(id)}
    />
  ))

  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
};

export default PhotoList;
