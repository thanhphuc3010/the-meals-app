export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
export const SET_FILTERS = 'SET_FILTER';

export const toggleFavorite = id => {
  return {
    type: TOGGLE_FAVORITES,
    mealId: id
  };
};

export const setFilters = filterSettings => {
  return {
    type: SET_FILTERS,
    payload: filterSettings
  };
};
