import { disneyCharacters } from "../scripts/data.js";

const form = document.getElementById("form");
const formChildren = Array.from(form.children);
const logo = document.querySelector(".header__image");
const idEdit = JSON.parse(sessionStorage.getItem("idEdit"));
const characters =
  JSON.parse(sessionStorage.getItem("characters")) || disneyCharacters;

const arrayInput = formChildren.filter(
  (item) => item.localName === "input" || item.localName === "select"
);

//------Escuchar el click del logo de la página para que redireccione a la página principal-----

logo.addEventListener("click", () => {
  window.location.href = "../index.html";
});

//-----------------Activamos el enlace----------------------------------------
if (!idEdit) {
  const linkActive = document.querySelector(".header__link");
  linkActive.classList.add("active");
  console.log(linkActive.classList);
}
//-------Nos construimos una función que nos permita validar si el formulario va a editar información de un personaje o si va a crear un nuevo personaje

const completeInfoInputs = (idEdit, characterList) => {
  const personaje = idEdit
    ? characterList.find((person) => person.id === idEdit)
    : null;
  console.log(personaje);
  if (personaje) {
    arrayInput.forEach((item) => {
      item.value = personaje[item.id] || personaje.seenIn[item.id];
    });
  }
};

completeInfoInputs(idEdit, characters);

//---------------------------------------

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCharacter = {
    name: "",
    image: "",
    seenIn: {
      category: "",
      title: "",
      year: "",
      duration: "",
    },
  };

  for (const key in newCharacter) {
    if (typeof newCharacter[key] === "object") {
      for (const propertyName in newCharacter[key]) {
        const input = arrayInput.find((item) => item.id == propertyName);
        newCharacter[key][propertyName] = input.value;
      }
    } else {
      const input = arrayInput.find((item) => item.id == key);
      newCharacter[key] = input.value;
    }
  }

  console.log(newCharacter);
  const validateCampos = validateInputs(newCharacter);

  if (validateCampos) {

    newCharacter.id = idEdit || characters.length + 1;

    if (idEdit) {
      const indexPersonaje = characters.findIndex((item) => item.id === idEdit);
      console.log(indexPersonaje);
      //newCharacter.id = idEdit;
      characters[indexPersonaje] = newCharacter;
    } else {
      //newCharacter.id = characters.length + 1;
      characters.push(newCharacter);
    }
    sessionStorage.setItem("characters", JSON.stringify(characters));
    const infoMensaje = idEdit
      ? "Has editado correctamente la información del personaje"
      : "El nuevo personaje fue creado exitosamente";

    Swal.fire("Buen trabajo!", infoMensaje, "success");

    form.reset();
    console.log(characters);
    sessionStorage.removeItem("idEdit");
  }
});

//---------Función que nos permite validar si existen campos vacíos en algún input
const validateInputs = (objetoData) => {
  let camposVacios = "";
  for (const key in objetoData) {
    if (typeof objetoData[key] === "object") {
      for (const propertyName in objetoData[key]) {
        const valueProperty = objetoData[key][propertyName];

        camposVacios += !valueProperty ? `${propertyName} ` : "";
      }
    } else {
      const valueProperty = objetoData[key];
      camposVacios += !valueProperty ? `${key} ` : "";
    }
  }

  if (camposVacios) {
    Swal.fire("Oops!", `Hay campos vacíos: ${camposVacios}`, "error");
    return false;
  } else {
    return true;
  }
};
