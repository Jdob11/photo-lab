import { useReducer, useEffect } from 'react';

export const ACTIONS = {
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
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL_WITH_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        selectedPhoto: null,
      };
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(photo => photo.id !== action.payload.id),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
        error: null,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
        error: null,
      };
    case ACTIONS.SET_CHOSEN_TOPIC:
      return {
        ...state,
        chosenTopic: action.payload,
        error: null,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload,
        error: null,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      throw new Error(`Error: ${action.type} does not exist`);
  }
};

const initialState = {
  favorites: [],
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  chosenTopic: null,
  error: null,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((err) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to fetch photos.' });
        console.log('Error: ', err);
      })
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((err) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to fetch topics.' });
        console.log('Error: ', err);
      })
  }, []);

  useEffect(() => {
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

  const setTopic = (chosenTopic) => {
    dispatch({ type: ACTIONS.SET_CHOSEN_TOPIC, payload: chosenTopic });
  };

  const toggleFavorite = (photo) => {
    if (!photo || !photo.id) return;
    const isFavorite = state.favorites.some((favPhoto) => favPhoto.id === photo.id);
    if (isFavorite) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
    }
  };

  const isFavPhotoExist = state.favorites.length > 0;

  const openModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL_WITH_PHOTO, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    ...state,
    toggleFavorite,
    isFavPhotoExist,
    openModalWithPhoto,
    closeModal,
    setTopic,
  };
};

export default useApplicationData;
