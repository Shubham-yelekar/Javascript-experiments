import path from "path";
import fs from "fs/promises";
import fetch from "node-fetch";

const savingData = async (pokemon, options) => {
  const dirPath = await createFolder(pokemon);
  if (options.includes("Stats")) {
    await savePokemonStats(pokemon.stats, dirPath);
  }

  if (options.includes("Sprites")) {
    await savePokemonSprites(pokemon.sprites, dirPath);
  }

  if (options.includes("Artwork")) {
    await savePokemonArtwork(pokemon.sprites, dirPath);
  }
};

const createFolder = async (pokemon) => {
  const dirPath = path.join("data", pokemon.name.toLowerCase());
  try {
    await fs.access(dirPath);
    // folder exist
  } catch {
    // folder does not exist
    await fs.mkdir(dirPath, { recursive: true });
  }

  return dirPath;
};

const savePokemonStats = async (pokemonStats, dirPath) => {
  let statsString = "";
  for (const stat of pokemonStats) {
    statsString += `${stat.stat.name} : ${stat.base_stat} \n`;
  }

  const filePath = path.join(dirPath, "stats.txt");
  await fs.writeFile(filePath, statsString);
};

const savePokemonArtwork = async (pokemonSprites, dirPath) => {
  const url = pokemonSprites.other["official-artwork"].front_default;
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const filePath = path.join(dirPath, "artwork.png");
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));
};

const savePokemonSprites = async (pokemonSprites, dirPath) => {
  const spriteDir = path.join(dirPath, "sprites");
  await fs.mkdir(spriteDir, { recursive: true });
  for (const [key, url] of Object.entries(pokemonSprites)) {
    if (typeof url === "string" && url.startsWith("http")) {
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const filePath = path.join(spriteDir, `${key}.png`);
      await fs.writeFile(filePath, Buffer.from(buffer));
    }
  }
};

export { savingData };
