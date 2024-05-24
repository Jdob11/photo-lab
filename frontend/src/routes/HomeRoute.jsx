import { React, useState } from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics } = props;

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    console.log("favorite switched");
    setFavorite(isFavorite => !isFavorite);
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos} favorite={favorite} toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;
