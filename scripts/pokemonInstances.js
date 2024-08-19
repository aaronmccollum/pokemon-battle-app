// Instances of Pokemon
import { Pokemon } from "./classes.js";

const bulbasaur = new Pokemon('BULBASAUR', 'grass', 40, ['Tackle', 'Growl', 'Vine Whip', 'Sleep Powder']);
const ivysaur = new Pokemon('IVYSAUR', 'grass', 80, ['Razor Leaf', 'Vine Whip', 'Tail Whip', 'Poison Powder']);
const venasaur = new Pokemon ('VENASAUR', 'grass', 120, ['Razor Leaf', 'Solar Beam', 'Sleep Powder', 'Poison Powder']);
const charmander = new Pokemon('CHARMANDER', 'fire', 40, ['Ember', 'Scratch', 'Growl', 'Tail Whip']);
const charmeleon = new Pokemon('CHARMELEON', 'fire', 80, ['Ember', 'Flamethrower', 'Scratch', 'Tail Whip']);
const charizard = new Pokemon('CHARIZARD', 'fire', 120, ['Fire Blast', 'Flamethrower', 'Fly', 'Scratch']);
const squirtle = new Pokemon('SQUIRTLE', 'water', 40, ['Water Gun', 'Growl', 'Tackle', 'Tail Whip']);
const wartortle = new Pokemon('WARTORTLE', 'water', 80, ['Bubblebeam', 'Water Gun', 'Growl', 'Tackle']);
const blastoise = new Pokemon('BLASTOISE', 'water', 120, ['Hydro Pump', 'Bubblebeam', 'Body Slam', 'Tackle']);

// Exporting all pokemon
export * from './pokemonInstances.js';
