import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER, RESET_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

// filtering ids from the first list so that they shouldn't exist after click or removal

function characters(state = characters_json, action) {
  let characters;
  switch(action.type) {
    case ADD_CHARACTER:
      characters = state.filter(item => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      characters = [...state, createCharacter(action.id)];
      return characters;
    case RESET_CHARACTER:
      characters=characters_json;
     return characters;
    default:
      return state;
  }
}

export default characters;