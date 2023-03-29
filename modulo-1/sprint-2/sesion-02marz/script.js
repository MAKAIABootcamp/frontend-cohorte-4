// //Capturar los dos inputs de HTML

// const number1 = document.getElementById("number1");
// const number2 = document.getElementById("number2");
// //Valido que esté capturando correctamente los elementos

// console.log(number1);
// console.log(number2);

// //Construyo la función que me permita realizar la operación

// const suma = (event) => {
//     event.preventDefault();
//     console.log('Hice un submit');
//     console.log(number1.value);
//     console.log(number2.value);
// }

//---------------------------------------------

// 1. Caturar el formulario
const form = document.getElementById("form");
console.log(form);

//Definimos la funcion suma
const suma = (num1, num2) => {
  return num1 + num2;
};

// 2. Escucho el evento sumbit del  formulario

form.addEventListener("submit", (event) => {
  //Prevenir la acción que viene por defecto con el submit: la recarga de la página
  event.preventDefault();
  //Validamos que se nos esté ejecutando correctamente el submit
  console.log("Quiero hacer un submit");

  //Proseguimos definir las intrucciones que se deben ejecutar con el submit
  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);
  const resultado = suma(num1, num2);
  console.log(resultado);

  //Mostrar el resultado en el span del documento HTML
  const spanResultado = document.getElementById("resultado");
  spanResultado.innerText = `Resultado = ${resultado}`;
  form.reset();

  //--------------------COMO INFORMACION UTL--------------------------------

  // //Caturo los elementos hijos de form
  // const formElements = form.children
  // console.log(formElements)
  // //Debo convertir el HTMLCollection a un array
  // Array.from(formElements).forEach(element => {
  //     console.log(element.value);
  // });

  //--------------------------------------------------
});
