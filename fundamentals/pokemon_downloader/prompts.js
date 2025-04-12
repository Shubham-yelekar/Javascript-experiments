// import fetch
import fetch from "node-fetch";
// import inquirer
import inquirer from "inquirer";

// import saving

import { savingData } from "./saving.js";

// func fetchPokemon(pokemon)
const fetchPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Pokemon not found");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(`❌ ${error.message}`);
    return null;
  }
};

// prompt for pokemon
// prompt for info - stat, sprites, art
const promptForPokemon = async () => {
  const questions = [
    { type: "input", name: "pokemon_name", message: "Which pokemon?" },
  ];

  return await inquirer.prompt(questions);
};

const promptForOptions = async () => {
  const questions = [
    {
      type: "checkbox",
      name: "options",
      message: "What info?",
      default: ["Stats"],
      choices: ["Stats", "Sprites", "Artwork"],
    },
  ];

  return await inquirer.prompt(questions);
};

//prompt to continue
const propToContinue = async () => {
  const questions = [
    {
      type: "list",
      name: "continue",
      message: "Like to continue?",
      choices: ["Yes", "No"],
    },
  ];
  return await inquirer.prompt(questions);
};

const promptUsers = async () => {
  while (true) {
    const { pokemon_name } = await promptForPokemon();
    const pokemonObj = await fetchPokemon(pokemon_name);
    if (!pokemonObj) {
      console.log("⚠️ Try again with a valid Pokémon name.");
      continue;
    }
    console.log(`\n✅ Data for ${pokemonObj.name.toUpperCase()}:`);
    const { options } = await promptForOptions();
    savingData(pokemonObj, options);
    const { continue: keepgoing } = await propToContinue();
    if (keepgoing === "No") {
      console.log("\n👋 Exiting Pokédex. Bye!");
      break;
    }
  }
};
promptUsers();

export { promptUsers };
