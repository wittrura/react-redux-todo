// Things you should never do inside a reducer:
  // Mutate its arguments;
  // Perform side effects like API calls and routing transitions;
  // Call non-pure functions, e.g. Date.now() or Math.random()

import { combineReducers } from 'redux';

import {
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters
} from '../actions/actions';

// object destructuring
const { SHOW_ALL } = VisibilityFilters;

// todos accepts state in the form of an array of todos
// todoApp passes only a slice of the state to manage = reducer composition
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        });
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// not needed because of combineReducers utility
// function todoApp({}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
