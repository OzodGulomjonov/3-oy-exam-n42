let elPokemon = document.querySelector(".pokemon");
let elMovie = document.querySelector(".movie");
let elBoth = document.querySelector(".both");
let elClear = document.querySelector(".clear");
let elPokemonLogo = document.querySelector(".imgpokemon");
let elMovieLogo = document.querySelector(".imgmovie");

elPokemon.addEventListener("click", function () {
  elList.innerHTML = null;
  renderArray(pokemons);
  elPokemonLogo.style = "display: block";
  elMovieLogo.style = "display: none;";
});

elMovie.addEventListener("click", function () {
  elList.innerHTML = null;
  renderArray(movies);
  elPokemonLogo.style = "display: none;";
  elMovieLogo.style = "display: block";
});

elBoth.addEventListener("click", function () {
  elList.innerHTML = null;
  let concat = pokemons.concat(movies);
  renderArray(concat);
  elMovieLogo.style = "display: block";
  elPokemonLogo.style = "display: block";
});

elClear.addEventListener("click", function () {
  elList.innerHTML = null;
  elPokemonLogo.style = "display: none";
  elMovieLogo.style = "display: none;";
});

let elList = document.querySelector(".list");

function renderArray(array) {
  elList.innerHTML = null;

  for (let item of array) {
    let newLi = document.createElement("li");
    newLi.setAttribute("style", "max-width:300px;flex-flow:column;");
    newLi.setAttribute("class", "card p-3 bg-light d-flex");
    let newImg = document.createElement("img");
    let newH3 = document.createElement("h4");
    let newh5 = document.createElement("h5");
    let newA = document.createElement("a");

    if (item.img) {
      newH3.textContent = item.name;
      newImg.src = item.img;
      newLi.style =
        "display:flex;padding:0px; flex-direction:column; justify-content:space-between; align-items: center;max-width:300px; cursor: pointer;";
      newImg.style = "height: 200px;object-fit:contain;";
      newLi.classList.add("item");
      newh5.innerHTML = `Type: ${item.type} <br>
            Height: ${item.height} <br> Weight: ${item.weight}`;
      newh5.style = "text-align: center;";
      
      newLi.appendChild(newImg);
      newLi.appendChild(newH3);
      newLi.appendChild(newh5);
    } else {
      let newA = document.createElement("a");
      newA.textContent = "Watch now";
      newA.href = `https://www.imdb.com/title/${item.imdbID}`;
      newH3.textContent = item.Title;

      newLi.appendChild(newImg);
      newLi.appendChild(newH3);
      newLi.appendChild(newh5);
      newLi.appendChild(newA);
      newLi.style =
        "display:flex;padding:0px; flex-direction:column; justify-content:space-between; align-items: center;max-width:300px;cursor: pointer;";
      newImg.src = item.Images;
      newLi.classList.add("item");
      newImg.style = "height: 180px;object-fit:cover;";
      newImg.setAttribute("alt", "movie");
      newh5.innerHTML = `${item.Year} <br>${item.Genre} <br>${item.imdbRating}`;
      newh5.style = "text-align: center;";
    }


    elList.appendChild(newLi);
  }
}

// render(splicedPokemon)
