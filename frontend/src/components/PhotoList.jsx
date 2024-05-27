import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, toggleFavorite, favorites, openModalWithPhoto } = props;

  const photosArray = photos.map((photo) => {
    const {
      id,
      urls: { regular, full },
      location: { city, country },
      user: { name, profile },
      similar_photos,
    } = photo;
    const isFavorite = favorites.some((favPhoto) => favPhoto.id === id);
    const photoObjectForToggle = { id, regular, city, country, name, profile };
    const photoObjectForModal = { id, full, city, country, name, profile, similar_photos };

    return (
      <PhotoListItem
        key={id}
        imageSource={regular}
        city={city}
        country={country}
        name={name}
        profile={profile}
        favorite={isFavorite}
        toggleFavorite={() => toggleFavorite(photoObjectForToggle)}
        openModalWithPhoto={() => openModalWithPhoto(photoObjectForModal)}
      />
    );
  });

  return <ul className="photo-list">{photosArray}</ul>;
};

export default PhotoList;


