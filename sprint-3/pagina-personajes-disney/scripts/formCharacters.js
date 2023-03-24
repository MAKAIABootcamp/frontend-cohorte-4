import { disneyCharacters } from "../scripts/data.js";

const characters =
  JSON.parse(sessionStorage.getItem("characters")) || disneyCharacters;

//------Escuchar el click del logo de la página para que redireccione a la página principal-----

const logo = document.querySelector(".header__image");

logo.addEventListener("click", () => {
  window.location.href = "../index.html";
});

//-----------------Activamos el enlace----------------------------------------

const linkActive = document.querySelector(".header__link");
linkActive.classList.add("active");
console.log(linkActive.classList);

//---------------------------------------

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formChildren = Array.from(form.children);

  const arrayInput = formChildren.filter(
    (item) => item.localName === "input" || item.localName === "select"
  );

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
      if (typeof newCharacter[key]=== 'object') {
          for (const propertyName in newCharacter[key]) {
              const input =  arrayInput.find(item=> item.id == propertyName)
              newCharacter[key][propertyName] = input.value 
        }
      } else {
          const input = arrayInput.find((item) => item.id == key);
          newCharacter[key] = input.value; 
      }
    }
    
    console.log(newCharacter);
    const validateCampos = validateInputs(newCharacter);
    if (validateCampos) {

        newCharacter.id = characters.length + 1;

        characters.push(newCharacter);

        sessionStorage.setItem("characters", JSON.stringify(characters));

        Swal.fire("Buen trabajo!", "El nuevo personaje fue creado exitosamente", "success");
        
        form.reset();
    }
    console.log(characters);
});


const validateInputs = (objetoData) => {
    let camposVacios = "";
    for (const key in objetoData) {

        if (typeof objetoData[key] === "object") {

            for (const propertyName in objetoData[key]) {

                const valueProperty = objetoData[key][propertyName]
                
                camposVacios += !valueProperty ? `${propertyName} ` : "";

          }
        } else {
            const valueProperty = objetoData[key];
            camposVacios += !valueProperty ? `${key} `: "";
      }
    }

    if (camposVacios) {
        Swal.fire("Oops!", `Hay campos vacíos: ${camposVacios}`, "error");
        return false;
    } else {
        return true;
    }
    
}