//LEARNING AND EXPERIMENTS HERE

//get pokemon
const getPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=40&offset=40", {
    headers: {
      "Accept": "application/json"
    }
  })
  // console.log("the response was");
  // console.log(response);
  // //
  // const data = await response.json();
  // console.log("response.json()");
  // console.log(data);



  const jsonData = await response.json();
  return jsonData;

  //console.log(jsonData.results)
  //jsonData.results is an array of 40 objects; pokemon name and url
};

//getPokemon();




async function getTypes(species) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`, {
    headers: {
      "Accept": "application/json"
    }
  })
  // console.log("the response was");
  // console.log(response);
  // //
  //const data = await response.json();
  //console.log("response.json()");
  //console.log(data);



  const pokemonData = await response.json();
  //console.log(pokemonData["types"]);
  // console.log(Object.values(pokemonData["types"]))

  //below works; use for checking
  //Object.values(pokemonData["types"]).forEach(val => console.log(val["type"]["name"]));
  
  //return Object.values(pokemonData["types"]).forEach(val => (val["type"]["name"]));

  let typesArr = [];

  Object.values(pokemonData["types"]).forEach(val => typesArr.push(val["type"]["name"]));
 
  //console.log(typesArr)
  return typesArr;
}
//getTypes("zubat");


//function to get img source
async function getImage(species) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`, {
    headers: {
      "Accept": "application/json"
    }
  })

  const pokemonData = await response.json();

  let pokemonImgSrc = pokemonData["sprites"]["front_default"];

  console.log(pokemonImgSrc);
  return pokemonImgSrc;
}
//getImage("zubat");

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

  //below adds types
  const typesLine = document.createElement("p")
  const pokemonType = document.createTextNode((await getTypes(species)).join("/"));
  //console.log(pokemonType)
  typesLine.append(pokemonType);
  cardNode.append(typesLine);

  //experiment below to add img
  const monImgWrapper = document.createElement("div");
  monImgWrapper.classList.add("mon-img-wrapper");
  const monImg = document.createElement("img");
  monImg.src = await getImage(species);
  monImgWrapper.append(monImg);
  cardNode.prepend(monImgWrapper);
  }
};
makeNameCards();

//creates dialog
// console.log(e.target);
    // const abilityDialog = document.createElement("dialog");
    // e.target.appendChild(abilityDialog);
    // abilityDialog.show();

    //
// function createsDialog() {
//   console.log('creating dialog');
//   const dialog = document.createElement("dialog");
//   document.body.appendChild(dialog);
//   dialog.showModal();
// }

// const pokemonCards = document.querySelectorAll(".card");

// pokemonCard.addEventListener("click", () => {
//   console.log('creating dialog');
//   const dialog = document.createElement("dialog");
//   document.body.appendChild(dialog);
//   dialog.showModal();
// })



////GETS ABILITIES
async function getAbilities(species) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`, {
    headers: {
      "Accept": "application/json"
    }
  })
  // console.log("the response was");
  // console.log(response);
  // //
  //const data = await response.json();
  //console.log("response.json()");
  //console.log(data);



  const pokemonData = await response.json();
  //console.log(pokemonData["types"]);
  // console.log(Object.values(pokemonData["types"]))

  //below works; use for checking
  //Object.values(pokemonData["types"]).forEach(val => console.log(val["type"]["name"]));
  
  //return Object.values(pokemonData["types"]).forEach(val => (val["type"]["name"]));

  let abilitiesArr = [];

  Object.values(pokemonData["abilities"]).forEach(val => abilitiesArr.push(val["ability"]["name"]));
 
  //console.log(typesArr)
  return abilitiesArr;
}
//getTypes("zubat");