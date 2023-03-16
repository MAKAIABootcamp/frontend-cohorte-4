import { disneyCharacters } from "../scripts/data.js";

//------Escuchar el click del logo de la página para que redireccione a la página principal-----

const logo = document.querySelector(".header__image");

logo.addEventListener('click', () => {
  window.location.href = "../index.html";
})

//-----------------------------------------------------------------

//Le vamos a agregar el contenido deseado: 1. Imagen del personaje
const showCharacterInfo = (contenedor, character) => {
  //Creamos el elemento figure
  const figure = document.createElement("figure");
  figure.classList.add("main__figure");
  figure.innerHTML = `<img src=${character.image} alt=${character.name}>`;
    contenedor.appendChild(figure);
    
    //Insertar la info complementaria
    const list = document.createElement("ul");
    list.classList.add('main__list');
    for (const key in character.seenIn) {
        console.log(key, " ---> ", character.seenIn[key]);
        const item = document.createElement("li");
        item.innerHTML = `<strong>${key}</strong>: ${character.seenIn[key]}`;
        list.appendChild(item);
    }
    contenedor.appendChild(list);
};

document.addEventListener("DOMContentLoaded", () => {
  //Capturar la información que tenemos guardada en el session storage
  const idCharacterStg = JSON.parse(sessionStorage.getItem("idCharacter")) || 0;
  const idCharacter = Number(idCharacterStg);
  console.log(idCharacter);

  //Hacer la búsqueda del personaje al cual le hemos dado click
  const character = disneyCharacters.find(
    (person) => person.id === idCharacter
  );
  console.log(character);

  //Actualizar el título con el nombre del personaje
  const title = document.getElementById("title");
  title.innerText = character.name;

  //Capturar el contenedor donde le vamos a insertar toda la información del personaje
  const infoCharacterContainer = document.getElementById("information");
  //Ejecutamos la función que nos va a inyectar la información detallada del personaje
  showCharacterInfo(infoCharacterContainer, character);
});
