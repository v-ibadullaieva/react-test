import { handleActions } from 'redux-actions';
import { LOAD_USERS, ADD_USER, REMOVE_USER } from './actions';

const initState = {
  users: [],
  error: null
};

export default handleActions({
  [LOAD_USERS]: {
    next: (state, action) => {
      return { 
        ...state, 
        users: action.payload, 
        error: null 
      }
    },
    throw: (state, action) => {
      return {
        ...state,
        error: 'There was a problem loading users'
      }
    }
  },
  [ADD_USER]: {
    next: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null
      }
    },
    throw: (state, action) => {
      return {
        ...state,
        error: `There was a problem creating a user`
      }
    }
  },
  [REMOVE_USER]: {
    next: (state, action) => {
      const index = state.users.findIndex(e => e.id === action.payload);
      state.users.splice(index, 1);

      return {
        ...state,
        users: [...state.users],
        error: null
      }
    },
    throw: (state, action) => {
      return {
        ...state,
        error: `There was a problem deleting a user`
      }
    }
  }
}, initState);