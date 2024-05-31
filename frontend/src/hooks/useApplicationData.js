import { useReducer, useEffect, useState } from 'react';

/**
 * Action types for the application.
 * @typedef {Object} ACTIONS
 * @property {string} FAV_PHOTO_ADDED - Action for adding a favorite photo.
 * @property {string} FAV_PHOTO_REMOVED - Action for removing a favorite photo.
 * @property {string} OPEN_MODAL_WITH_PHOTO - Action for opening modal with a specific photo.
 * @property {string} CLOSE_MODAL - Action for closing the modal.
 * @property {string} SET_PHOTO_DATA - Action for setting photo data.
 * @property {string} SET_TOPIC_DATA - Action for setting topic data.
 * @property {string} SET_CHOSEN_TOPIC - Action for setting the chosen topic.
 * @property {string} GET_PHOTOS_BY_TOPIC - Action for fetching photos by topic.
 * @property {string} SET_ERROR - Action for setting an error.
 * @property {string} CLEAR_ERROR - Action for clearing an error.
 */

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  OPEN_MODAL_WITH_PHOTO: 'OPEN_MODAL_WITH_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_CHOSEN_TOPIC: 'CHOSEN_TOPIC',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET_CHOSEN_TOPIC: 'RESET_CHOSEN_TOPIC',
};

/**
 * Reducer function to handle state changes based on dispatched actions.
 * @param {Object} state - Current state of the application.
 * @param {Object} action - Dispatched action to perform state changes.
 * @returns {Object} New state after performing the action.
 */

const reducer = (state, action) => {
  const {
    FAV_PHOTO_ADDED,
    FAV_PHOTO_REMOVED,
    OPEN_MODAL_WITH_PHOTO,
    CLOSE_MODAL,
    SET_PHOTO_DATA,
    SET_TOPIC_DATA,
    SET_CHOSEN_TOPIC,
    GET_PHOTOS_BY_TOPIC,
    SET_ERROR,
    CLEAR_ERROR,
    RESET_CHOSEN_TOPIC
  } = ACTIONS;

  switch (action.type) {
    case OPEN_MODAL_WITH_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        selectedPhoto: null,
      };
    case FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(photo => photo.id !== action.payload.id),
      };
    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
        error: null,
      };
    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
        error: null,
      };
    case SET_CHOSEN_TOPIC:
      return {
        ...state,
        chosenTopic: action.payload,
        error: null,
      };
    case GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case ACTIONS.RESET_CHOSEN_TOPIC:
      return {
        ...state,
        chosenTopic: null
      };
    default:
      throw new Error(`Error: ${action.type} does not exist`);
  }
};

/**
 * Initial state of the application.
 * @type {Object}
 */

const initialState = {
  favorites: [],
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  chosenTopic: null,
  error: null,
};

/**
 * Custom hook for managing application data and state.
 * @returns {Object} State and functions for manipulating the state.
 */

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [favoritesViewActive, setFavoritesViewActive] = useState(false);

  // useEffect(() => {   // Fetch initial photo data
  //   fetch('/api/photos')
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  //     .catch((err) => {
  //       dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to fetch photos.' });
  //       console.log('Error: ', err);
  //     })
  // }, []);

  const fetchInitialPhotoData = () => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((err) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to fetch photos.' });
        console.log('Error: ', err);
      });
  };

  useEffect(() => {
    fetchInitialPhotoData();
  }, []);


  useEffect(() => { // Fetch initial topic data
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((err) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to fetch topics.' });
        console.log('Error: ', err);
      })
  }, []);

  useEffect(() => { // Fetch photos based on chosen topic
    if (state.chosenTopic) {
      fetch(`/api/topics/photos/${state.chosenTopic}`)
        .then((res) => res.json())
        .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data }))
        .catch((err) => {
          dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to fetch photos for chosen topic.' });
          console.log('Error: ', err);
        })
    }
  }, [state.chosenTopic]);

    /**
   * Set the chosen topic.
   * @param {string} chosenTopic - The topic to set as chosen.
   */

  const setTopic = (chosenTopic) => {
    dispatch({ type: ACTIONS.SET_CHOSEN_TOPIC, payload: chosenTopic });
  };

  /**
   * Toggle favorite status of a photo.
   * @param {Object} photo - The photo object to toggle favorite status for.
   */

  const toggleFavorite = (photo) => {
    if (!photo || !photo.id) return;
    const isFavorite = state.favorites.some((favPhoto) => favPhoto.id === photo.id);
    if (isFavorite) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
    }
  };

    /**
   * Check if there are favorite photos.
   * @type {boolean}
   */

  const isFavPhotoExist = state.favorites.length > 0;

  const viewFavorites = (favoritePhotosArray) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: favoritePhotosArray });
    setFavoritesViewActive(true);
  }

  /**
   * Open modal with a specific photo.
   * @param {Object} photo - The photo object to open the modal with.
   */

  const openModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL_WITH_PHOTO, payload: photo });
  };

    /**
   * Close the modal.
   */

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const reloadInitialPhotoData = () => {
    fetchInitialPhotoData();
    dispatch({ type: ACTIONS.RESET_CHOSEN_TOPIC });
    setFavoritesViewActive(false);
  };

  return {
    ...state,
    toggleFavorite,
    isFavPhotoExist,
    openModalWithPhoto,
    closeModal,
    setTopic,
    viewFavorites,
    reloadInitialPhotoData,
    favoritesViewActive,
  };
};

export default useApplicationData;
