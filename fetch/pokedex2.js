//get pokemon
const getPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0", {
    headers: {
      "Accept": "application/json"
    }
  })
  const jsonData = await response.json();
  return jsonData;

};

////GETS ABILITIES
async function getAbilities(species) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`, {
    headers: {
      "Accept": "application/json"
    }
  })

  const pokemonData = await response.json();
  
  let abilitiesArr = [];

  Object.values(pokemonData["abilities"]).forEach(val => abilitiesArr.push(val["ability"]["name"]));

  return abilitiesArr;
}

//get types works
async function getTypes(species) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`, {
    headers: {
      "Accept": "application/json"
    }
  })
  const pokemonData = await response.json();

  let typesArr = [];

  Object.values(pokemonData["types"]).forEach(val => typesArr.push(val["type"]["name"]));
 
  return typesArr;
}

//function to get img source
async function getImage(species) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`, {
    headers: {
      "Accept": "application/json"
    }
  })

  const pokemonData = await response.json();

  let pokemonImgSrc = pokemonData["sprites"]["front_default"];

  return pokemonImgSrc;
}

//rendering cards
const cardGallery = document.querySelector("#cardGallery");

async function makeNameCards() {
  const pokemonToDisplay = await getPokemon();

  //makes cards and adds names
  for (species of pokemonToDisplay.results.map((pokemon) => pokemon.name)) {
  const nameLine = document.createElement("p");
  const nameNode = document.createTextNode(species);
  const cardNode = document.createElement("div");
  cardNode.classList.add("card");
  nameLine.append(nameNode);
  cardNode.append(nameLine);
  cardGallery.appendChild(cardNode);

  //adds types
  const typesLine = document.createElement("p")
  const pokemonType = document.createTextNode((await getTypes(species)).join("/"));
  typesLine.append(pokemonType);
  cardNode.append(typesLine);

  //creates dialog
  const abilityDialog = document.createElement("dialog");
  const abilitiesLine = document.createElement("p");
  const closeDialogBtn = document.createElement("button");
  closeDialogBtn.innerText = "X";
  closeDialogBtn.classList.add("close-dialog-btn");
  //close dialog btn event listener
  closeDialogBtn.addEventListener("click", () => {
    console.log("working");
    abilityDialog.close();
  })
  const pokemonAbilities = document.createTextNode((await getAbilities(species)).join(", "));
  //appending
  abilitiesLine.append(pokemonAbilities);
  abilityDialog.append(abilitiesLine);
  abilityDialog.appendChild(closeDialogBtn);
  cardNode.appendChild(abilityDialog);
  
  //eventlistner
  cardNode.addEventListener("click", () => {
    console.log('cliked cardnode')
    abilityDialog.showModal();
  })

  //adds img
  const monImgWrapper = document.createElement("div");
  monImgWrapper.classList.add("mon-img-wrapper");
  const monImg = document.createElement("img");
  monImg.src = await getImage(species);
  monImgWrapper.append(monImg);
  cardNode.prepend(monImgWrapper);
  }
};
makeNameCards();

//get all pokemon
const getAllPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1025", {
    headers: {
      "Accept": "application/json"
    }
  })
  const jsonData = await response.json();
  console.log(jsonData);

  let allPokemonArr = [];
  ////Object.values
  console.log(allPokemonArr);
  return allPokemonArr;

};
getAllPokemon();

//Filter Functionality