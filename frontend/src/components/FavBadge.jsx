import React from 'react';
import PropTypes from 'prop-types';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

/**
 * The FavBadge component responsible for displaying a badge indicating whether a favorite photo exists.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {boolean} props.isFavPhotoExist - Indicates whether a favorite photo exists.
 * @returns {JSX.Element} The JSX element representing the favorite badge.
 */

const FavBadge = (props) => {
  const { isFavPhotoExist, onClick } = props;

  return (
    <div className='fav-badge' onClick={onClick}>
      <FavIcon
        displayAlert={!!isFavPhotoExist}
        selected={true}
      />
    </div>
  );
};

FavBadge.propTypes = {
  isFavPhotoExist: PropTypes.bool.isRequired,
};

export default FavBadge;