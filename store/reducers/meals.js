import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITES } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      console.log('Prev state', state.favoriteMeals);
      console.log('Dispatching', action.type);
      const existedIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (existedIndex !== -1) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existedIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.payload;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        return true;
      });
      return { ...state, filteredMeals: filteredMeals };
    default:
      return state;
  }
  console.log('Before state', state);
};

export default mealsReducer;
