import {ADD_CHARACTER} from '../actions/index';
import  createCharacter from './helpers';
// super squad hero addition that's why taking state as empty at first
function heroes(state=[], action){
    switch(action.type){
        case ADD_CHARACTER:
            let heroes= [...state,createCharacter(action.id)];
            return heroes;
        default:
            return state;
    }
}
export default heroes;