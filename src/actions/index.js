export const ADD_CHARACTER ='ADD_CHARACTER';

// action creator return action
export function addCharacterById(id){
  const action={
      type:ADD_CHARACTER,
      id
  }
  return action;
}