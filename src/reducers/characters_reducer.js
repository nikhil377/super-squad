import characters_json from "../data/characters.json";
import {ADD_CHARACTER} from '../actions/index';

// filtering ids from the first list so that they shouldn't exist after click or removal
function characters(state=characters_json, action){
    switch(action.type){
        case ADD_CHARACTER:
            let characters= state.filter(item=> item.id!==action.id);
            return characters;
        default:
            return state;
    }
}

export default characters;