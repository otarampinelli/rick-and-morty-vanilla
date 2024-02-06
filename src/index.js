const BASE_URL = "https://rickandmortyapi.com/api/character";

fetchAndCreateCharacters();

async function fetchAndCreateCharacters() {
  const characters = await getCharacters();
  createContainer(characters);
}

function createContainer(characters) {
  const root = document.querySelector("#root");
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");
  characters.results.forEach((character) => {
    const containerCharacter = document.createElement("div");
    containerCharacter.classList.add("characters");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("character-image");

    const image = document.createElement("img");
    image.src = `${character.image}`;

    const characterInfosDiv = document.createElement("div");
    characterInfosDiv.classList.add("character-infos");

    const characterName = document.createElement("h1");
    characterName.innerText = `${character.name}`;

    const location = document.createElement("p");
    location.innerHTML = `<span class="location-label">Last known location:</span> ${character.location.name}`;

    imageDiv.append(image);

    characterInfosDiv.append(characterName);
    characterInfosDiv.append(location);

    containerCharacter.append(imageDiv);
    containerCharacter.append(characterInfosDiv);

    mainContainer.append(containerCharacter);
  });
  root.append(mainContainer);
}

async function getCharacters() {
  const response = await fetch(BASE_URL);
  const characters = await response.json();
  return characters;
}
