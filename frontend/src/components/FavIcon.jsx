import React from 'react';
import PropTypes from 'prop-types';

/**
 * The FavIcon component responsible for displaying a heart icon indicating favorite status.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {boolean} props.displayAlert - Indicates whether to display an alert circle indicating new favorite.
 * @param {boolean} props.selected - Indicates whether the icon is selected (filled heart) or not (outlined heart).
 * @returns {JSX.Element} The JSX element representing the heart icon.
 */

const FavIcon = (props) => {
  const {
    displayAlert,
    selected
  } = props;

  return (
    <svg
      width="26"
      height="23"
      viewBox="1.6 -2 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={selected ? "#C80000" : "#EEEEEE"}
        d="M11 18C11 18 1 12.5909 1 6.02273C1 4.8616 1.41649 3.73633 2.17862 2.83838C2.94075 1.94043 4.00143 1.32526 5.1802 1.09755C6.35897 0.869829 7.58301 1.04363 8.64406 1.58938C9.70512 2.13512 10.5376 3.0191 11 4.09092C11.4624 3.0191 12.2949 2.13512 13.3559 1.58938C14.417 1.04363 15.641 0.869829 16.8198 1.09755C17.9986 1.32526 19.0593 1.94043 19.8214 2.83838C20.5835 3.73633 21 4.8616 21 6.02273C21 12.5909 11 18 11 18Z"
        stroke="#C80000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {displayAlert && (
        <circle
          cx="21"
          cy="4"
          r="2.75"
          fill="#24ce02"
          stroke="#EEEEEE"
          strokeWidth="0.5"
        />
      )}
    </svg>
  );
};

FavIcon.propTypes = {
  displayAlert: PropTypes.bool,
  selected: PropTypes.bool.isRequired,
};

export default FavIcon;

