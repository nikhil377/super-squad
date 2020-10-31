import { ADD_CHARACTER, REMOVE_CHARACTER, RESET_CHARACTER } from '../actions';
import { createCharacter } from './helpers';
// super squad hero addition that's why taking state as empty at first

function heroes(state = [], action) {
  let heroes;
  switch(action.type) {
    case ADD_CHARACTER:
      heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_CHARACTER:
      heroes = state.filter(item => item.id !== action.id);
      return heroes;
    case RESET_CHARACTER:
      heroes=[];
      return heroes;
    default: 
      return state;
  }
}

export default heroes;