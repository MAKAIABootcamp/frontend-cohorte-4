let pokemons = [];

const URL_API = "https://pokeapi.co/api/v2/pokemon";
const boxButtons = document.querySelector(".main__buttons");
const containerPokemon = document.getElementById("pokemonDetail");
//Nos obtiene los pokemones de la API
const getPokemonsFromApi = async (url) => {
  try {
    const { data } = await axios.get(url); //desestructuración de objetos
    return data.results;
  } catch (error) {
    console.log(error);
    alert("Usuario, ocurrio un error");
    return [];
  }
};

const getAllInfoPokemons = async (url) => {
  const allInfoPokemons = [];
  try {
    const { data } = await axios.get(url); //desestructuración de objetos

    for (const pokemon of data.results) {
      const urlPokemon = pokemon.url;
      const response = await axios.get(urlPokemon);
      const poke = {
        id: response.data.id,
        name: response.data.name,
        height: response.data.height,
        image: response.data.sprites.front_default,
        abilities: response.data.abilities.map((item) => item.ability.name),
        types: response.data.types.map((item) => item.type.name),
      };
      allInfoPokemons.push(poke);
    }
    return allInfoPokemons;
  } catch (error) {
    console.log(error);
    return [];
  }
};

//Nos obtiene un pokemon de la API
const getPokemonFromApi = async (url) => {
  try {
    const { data } = await axios.get(url); //desestructuración de objetos
    return data;
  } catch (error) {
    console.log(error);
    alert("Usuario, ocurrio un error");
    return {};
  }
};

//Función que nos pinta los botones con los nombres de los pokemons

const printPokemonsButtons = (pokemonList, container) => {
  container.innerHTML = "";
  pokemonList.forEach((poke) => {
    container.innerHTML += `
        <button class="btn btn-success" data-url=${poke.url}>${poke.name}</button>
        `;
  });
};

const printDetailsPokemons = (pokemon, container) => {
  container.innerHTML = `
    <article>
        <figure>
            <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
        </figure>
        <h3>${pokemon.name}</h3>
    </article>
    `;
};

document.addEventListener("DOMContentLoaded", async () => {
  //Ejecutamos la funcion que nos obtiene los pokemones
  pokemons = await getPokemonsFromApi(URL_API);
  printPokemonsButtons(pokemons, boxButtons);

  const allInfo = await getAllInfoPokemons(URL_API);
  console.log(allInfo);
});

document.addEventListener("click", async (e) => {
  const urlPokemon = e.target.getAttribute("data-url");
  if (urlPokemon) {
    const pokemon = await getPokemonFromApi(urlPokemon);
    printDetailsPokemons(pokemon, containerPokemon);
    //console.log(pokemon);
  }
});
