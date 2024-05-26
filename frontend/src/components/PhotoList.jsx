import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, toggleFavorite, favorites, openModalWithPhoto } = props;
  console.log('favorites: ', favorites);
  const photosArray = photos.map(({ id, urls: { regular, full }, location: { city, country }, user:{ name, profile}, similar_photos }) => (
    <PhotoListItem
      key={id}
      imageSource={regular}
      city={city}
      country={country}
      name={name}
      profile={profile}
      favorite={favorites.some((favPhoto) => favPhoto.id === id)}
      toggleFavorite={() => toggleFavorite({ id, regular, city, country, name, profile })} 
      openModalWithPhoto={() => openModalWithPhoto({ id, full, city, country, name, profile, similar_photos })}
    />
  ))

  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
};

export default PhotoList;
