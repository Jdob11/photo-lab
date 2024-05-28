import { useReducer, useMemo, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  OPEN_MODAL_WITH_PHOTO: 'OPEN_MODAL_WITH_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_CHOSEN_TOPIC: 'CHOSEN_TOPIC',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
};
//Revisit "Data Fetches with useEffect" AI feedback when time allows
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
        photoData: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
    case ACTIONS.SET_CHOSEN_TOPIC:
      return {
        ...state,
        chosenTopic: action.payload
      };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload,
        // chosenTopic: null,
      };
    default:
      return state;
  }
};

const initialState = {
  favorites: [],
  selectedPhoto: null,
  photoData: [],
  topicData:[],
  chosenTopic: null,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (state.chosenTopic) {
      fetch(`/api/topics/photos/${state.chosenTopic}`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data }))
        .catch((err) => console.log(err));
    }
  }, [state.chosenTopic]);

  const setTopic = (chosenTopic) => {
    dispatch({ type: ACTIONS.SET_CHOSEN_TOPIC, payload: chosenTopic });
  };

  const toggleFavorite = (photo) => {
    if (!photo || !photo.id) return;
    const isFavorite = state.favorites.some(favPhoto => favPhoto.id === photo.id);
    if (isFavorite) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
    }
  };

  const isFavPhotoExist = useMemo(() => {
    return state.favorites.length > 0;
  }, [state.favorites]);

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