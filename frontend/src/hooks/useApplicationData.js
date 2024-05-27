import { useReducer, useMemo } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  OPEN_MODAL_WITH_PHOTO: 'OPEN_MODAL_WITH_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL'
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
    default:
      return state;
  }
};

const initialState = {
  favorites: [],
  selectedPhoto: null,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  };
};

export default useApplicationData;