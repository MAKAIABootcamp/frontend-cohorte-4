//1. Elementos del DOM (Es nuestro modelo del objeto documento)
//2. Eventos del DOM (click (u onclick), submit y DOMContentLoad())
//3. Responsive design
//4. LocalStorage() y SessionStoge().
//----------------------------OBJETIVOS DE ESTE EJERCICIO PRÁCTICO-------------------
//Construir un aplicativo donde se enlisten algunos personajes Disney (en cards) 1. Al dar click sobre la card, redireccione al usuario a una página que contenga la información de detalle de ese personaje. 2. crear (o incluir) un nuevo personaje Disney mediante un form 3. Agregar personajes en una lista de favoritos.
import { disneyCharacters } from "./data.js";

console.log(disneyCharacters);

const characters =
  JSON.parse(sessionStorage.getItem("characters")) || disneyCharacters;
//Mostrar los personaje enlistados en cards
//1. Capturamos el contenedor donde vamos a pintar todas las cards
const containerCards = document.querySelector(".main_cards");
console.log(containerCards);

//2. Construir una función que nos permita pintar los personajes dentro de un elemento contenedor
const printCharacters = (container, charactersList) => {
  //Vaciar el contenedor
  container.innerHTML = "";
  //Recorremos el array
  charactersList.forEach((character) => {
    container.innerHTML += `
        <article class="cards">
            <figure class="cards__figure">
                <img class="cards__image" data-card='cards' name=${character.id} src=${character.image} alt=${character.name}>
            </figure>
            <h3 class="cards__name" data-card='cards' name=${character.id}>${character.name}</h3>
        </article>
        `;
  });
};

//3. Vamos a escuchar al evento DomContentLoad y cuando suceda este evento se deben imprimir los personajes
document.addEventListener("DOMContentLoaded", () => {
  printCharacters(containerCards, characters);
});

//4. Vamos a escuchar el evento click sobre las cards
document.addEventListener("click", (event) => {
  // console.log("Hice click en ", event.target);
  // if (event.target.classList.contains('cards__image')) {
  //     console.log("Hice click aquí");
  //     console.log(event.target);
  //     const dataCardAttribute = event.target.getAttribute('data-card');
  //     console.log(dataCardAttribute);
  // }
  const dataCardAttribute = event.target.getAttribute("data-card");
  if (dataCardAttribute === "cards") {
    // console.log('Quiero ir a la página de detalles de este personaje');
    const id = event.target.getAttribute("name");
    sessionStorage.setItem("idCharacter", JSON.stringify(id));
    window.location.href = "./pages/details.html";
  }
});

//-----------------------Filtrado---------------------
//1. Creamos un array con las categorías de los personajes

const categories = ["all"];

characters.forEach((item) => {
  if (!categories.includes(item.seenIn.category)) {
    categories.push(item.seenIn.category);
  }
});

categories.forEach((item) => {
  const botonFiltrado = document.getElementsByName(item)[0];

  botonFiltrado.addEventListener("click", () => {
    const personajesFiltrados =
      item === "all"
        ? characters
        : characters.filter((element) => element.seenIn.category === item);
    printCharacters(containerCards, personajesFiltrados);
  });
});

//-----------------------------------------

//---------Búsqueda de personajes por nombre..

const filterByName = (termSearch, charactersList) => {
  const personajesFiltrados = charactersList.filter((person) =>
    person.name.toLowerCase().includes(termSearch.toLowerCase())
  );
  const result = personajesFiltrados.length
    ? personajesFiltrados
    : charactersList;

  const messageResult = personajesFiltrados.length
    ? false
    : "No existe este personaje";

  return {
    resultSearch: result,
    messageSearch: messageResult,
  };
};

const formSearch = document.querySelector(".search-bar");

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(formSearch.children);

  const formChildren = Array.from(formSearch.children);

  const inputSearch = formChildren.find((item) => item.localName === "input");

  console.log(inputSearch.value);

  const searchTerm = inputSearch.value;

  if (searchTerm) {

    const searchResult = filterByName(searchTerm, characters);

    console.log(searchResult);

    printCharacters(containerCards, searchResult.resultSearch);

    if (searchResult.messageSearch) {

      Swal.fire("Oops!", searchResult.messageSearch, "error");
    }
  } else {

    Swal.fire("Oops!", "No ingresaste un personaje", "error");
  }
});
