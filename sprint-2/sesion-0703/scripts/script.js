//1. Elementos del DOM (Es nuestro modelo del objeto documento)
//2. Eventos del DOM (click (u onclick), submit y DOMContentLoad())
//3. Responsive design
//4. LocalStorage() y SessionStoge().
//----------------------------OBJETIVOS DE ESTE EJERCICIO PRÁCTICO-------------------
//Construir un aplicativo donde se enlisten algunos personajes Disney (en cards) 1. Al dar click sobre la card, redireccione al usuario a una página que contenga la información de detalle de ese personaje. 2. crear (o incluir) un nuevo personaje Disney mediante un form 3. Agregar personajes en una lista de favoritos.
import { disneyCharacters } from "./data.js";

console.log(disneyCharacters);

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
                <img src=${character.image} alt=${character.name}>
            </figure>
            <h3 class="cards__name">${character.name}</h3>
        </article>
        `;
  });
};

//3. Vamos a escuchar al evento DomContentLoad y cuando suceda este evento se deben imprimir los personajes
document.addEventListener('DOMContentLoaded', () => {
    printCharacters(containerCards, disneyCharacters);
})

