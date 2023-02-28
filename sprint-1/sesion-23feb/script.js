//1. Desarrollar un programa que me permita solicitar los datos de 5 personas, incluyendo: nombre, apellido, teléfono, correo, y la dirección debe ser en el siguiente formato: ciudad, barrio, y calle. Esta información debo almacenarla en un array de objetos. Posteriormente, debo solicitar al usuario que escriba un nombre, y mostrar por consola toda la información del usuario que tenga dicho nombre. Si el nombre no existe en el arreglo, debería mostrar un mensaje que diga: El usuario no existe.

//parte 1. Solicitarle al usuario los datos de cinco personas
//¿Qué datos necesitamos?
const cantidadPersonas = 2;
let arrayPersonas = [];

for (let index = 0; index < cantidadPersonas; index++) {
  //Instrucciones que se deben ejecutar en cada ciclo
  const name = prompt(
    "Por favor ingrese el nombre de la persona No. " + (index + 1)
  );
  const lastName = prompt(
    "Por favor ingrese el apellido de la persona No. " + (index + 1)
  );
  const cellPhone = prompt(
    `Por favor ingrese el celular de la persona No. ${index + 1}`
  );
  const email = prompt(
    `Por favor ingrese el email de la persona No. ${index + 1}`
  );
  const city = prompt(
    `Por favor ingrese el ciudad de la persona No. ${index + 1}`
  );
  const neiborhood = prompt(
    `Por favor ingrese el barrio de la persona No. ${index + 1}`
  );
  const street = prompt(
    `Por favor ingrese la calle de la persona No. ${index + 1}`
    );
    const person = {
        name,
        lastName,
        cellPhone,
        email,
        address: {
            city,
            neiborhood,
            street
        }
    }
    console.log(person)
    
    arrayPersonas.push(person);
}

console.log(arrayPersonas);


//Parte 2. Solicitarle al usuario un nombre y buscar si exite este nombre en la colección de usuario.
const nameUser = prompt('Aquí puede buscar un usuario, ingrese el nombre del usuario que desea buscar');

// const foundUser = arrayPersonas.find(function (person) {
//     return person.name === nameUser;
// });

let foundUser = undefined;
for (let index = 0; index < arrayPersonas.length; index++){
    const person = arrayPersonas[index];
    if (person.name === nameUser) {
        foundUser = person;
        break;
    }
}

console.log(foundUser);
if (foundUser) {
    alert('Este usuario existe!');
} else {
    alert('Este usuario no existe');
}

//2. Queremos convertir números arábigos a romanos

//-------¿Cómo acceder a propiedades de objetos?-----------
const persona = {
    nombre: "Whitney",
    age: 29,
    colorFavorito: "verde"
}

//Acceder a propiedad con la notación de punto (.)
console.log(persona.age); //29

//Acceder a una propiedad con la notación corchete ([])
console.log(persona['age'])//29
const key = 'nombre';
console.log(persona[key])//Whitney

