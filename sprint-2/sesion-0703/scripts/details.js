import {disneyCharacters} from "../scripts/data.js"

//Capturar la información que tenemos guardada en el session storage
const idCharacterStg = JSON.parse(sessionStorage.getItem("idCharacter")) || 0;
const idCharacter = Number(idCharacterStg);
console.log(idCharacter);

//Hacer la búsqueda del personaje al cual le hemos dado click
const character = disneyCharacters.find(person => person.id === idCharacter);
console.log(character);

//Actualizar el título con el nombre del personaje
const title = document.getElementById('title');
title.innerText = character.name;