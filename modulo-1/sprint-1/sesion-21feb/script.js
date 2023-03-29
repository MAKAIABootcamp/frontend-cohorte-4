// alert('Estoy bien enlazado');

//  Ejercicio 1: Leer 5 notas de un estudiante, calcular el promedio e indicar si está aprobado o
// suspendido.

// Resultado: Promedio de notas e indicar si el estudiante aprobó o desaprobó
//Los datos que necesitamos para calcular el promedio

//¿Cuántas notas son?
const cantidadDeNotas = 5;
let sumatoriaDeNotas = 0;

for (let index = 0; index < cantidadDeNotas; index++) {
  const notaString = prompt("Por favor ingrese la nota " + (index + 1));
  const nota = parseFloat(notaString);
  // console.log(nota);
  // console.log(typeof nota);
  sumatoriaDeNotas += nota;
}

const promedioDeNotas = sumatoriaDeNotas / cantidadDeNotas;
// console.log(promedioDeNotas);

if (promedioDeNotas >= 3) {
  alert("El estudiante aprobó");
} else {
  alert("El estudiante desaprobó");
}
