import characters_json from "../data/characters.json";

// helper function
function createCharacter(id){
    let character = characters_json.filter(c=>c.id===id);
    return character; 
}

export default createCharacter;