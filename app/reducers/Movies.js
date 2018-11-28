import {combineReducers} from 'redux';

export const movies = (state = [], action) => {
    switch (action.type){
      case 'ADD_MOVIES':
          return state.concat(action.payload);
      default:
          return state;
  }
};

export default combineReducers({
    movies: movies
})

