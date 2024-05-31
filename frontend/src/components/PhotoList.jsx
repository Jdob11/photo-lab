import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

/**
 * The PhotoList component responsible for rendering a list of photos.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {Array} props.photos - An array of photo objects to be displayed.
 * @param {Function} props.toggleFavorite - The function to toggle the favorite status of a photo.
 * @param {Array} props.favorites - An array of favorite photos.
 * @param {Function} props.openModalWithPhoto - The function to open a modal with a specific photo.
 * @returns {JSX.Element} The JSX element representing the photo list.
 */

const PhotoList = (props) => {
  const { photos,
          toggleFavorite,
          favorites,
          openModalWithPhoto
        } = props;

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
        openModalWithPhoto={openModalWithPhoto ? () => openModalWithPhoto(photoObjectForModal) : undefined}
      />
    );
  });

  return <ul className="photo-list">{photosArray}</ul>;
};

export default PhotoList;


