

//async function
async function getRelevantJokes() {
  //search term
  const searchTerm = document.querySelector("#searchBox").value;
  //
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
    headers: {
      "Accept": "application/json"
    }
  });
  //console.log(response);
  const jsonData = await response.json();
  return jsonData;
  
} 

document.querySelector("#searchBtn").addEventListener("click", async (event) => {
  //console.log("button clicked");
  const jokes = await getRelevantJokes();

  for (joke of jokes.results.map((a) => a.joke)) {
    const jokesContainer = document.querySelector("#jokesContainer");

    const textNode = document.createTextNode(joke);
    const elementNode = document.createElement('p');

    elementNode.append(textNode);
    jokesContainer.append(elementNode);
  }
})