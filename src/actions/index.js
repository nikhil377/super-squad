export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const RESET_CHARACTER= 'RESET_CHARACTER';

// action creator returns action

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id
  }
  return action;
}

export function removeCharacterById(id) {
  const action = {
    type: REMOVE_CHARACTER,
    id
  }
  return action;
}
export function resetCharacterBy(){
  const action={
    type:RESET_CHARACTER
  }
  return action;
}