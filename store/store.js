import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import mealsReducer from './reducers/meals'

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
