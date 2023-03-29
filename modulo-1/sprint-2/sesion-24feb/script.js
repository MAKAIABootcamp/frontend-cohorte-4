// 1. Realizar una función que reciba 2 parámetros de tipo número, el segundo parámetro es opcional. Si se reciben los 2 parámetros debe retornar la suma de los 2 parámetros. Si se recibe un solo parámetro, debe retornar la suma de ese valor más 10.

//Si necesitamos asignar parámetros opcionales, debemos asignarle por defecto un valor

const suma = (num1, num2 = 10) => {
  return num1 + num2;
};

//Return implícito
const sumaReturnImplicito = (num1, num2 = 10) => num1 + num2;

const almacenarDatosUser = (name, age) => ({
  name,
  age,
});

console.log(suma("adsfhnasdjkf", "Hola"));

const sumaNum = (num1, num2 = 10) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return NaN;
};

const sumaNumOtra = (num1, num2 = 10) => {
  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  }
  return NaN;
};

const resultadoSuma = sumaNumOtra(4, 6);
console.log(resultadoSuma);

//2- Realizar una función que agregue elementos a un array previamente instanciado, y otra que quite elementos del array recibiendo un parámetro que será el indíce a eliminar. Si el índice no existe, debe eliminar el último elemento del array. Realizar una función que reciba alguna de las anteriores como parámetro callback y muestre el array restante.

// 1. Instanciar el array

const arrayFrutas = [
  "Mango",
  "Maracuyá",
  "Mora",
  "Lulo",
  "Tamarindo",
  "Naranja",
];

// 2. Crear la función que agregue elementos a un array
const addFruits = (list, fruta = "") => {
  if (fruta) {
    list.push(fruta);
    console.log(list);
    return true;
  }
};

//3. Crear una función que elimine elementos de un array, si se suministra un valor de index, se debe eliminar la fruta en esa posición y si no se proporciona, se debe eliminar el último elemento----¿Qué pasa si el index es mayor o igual a la longitud del array?
const deleteFruit = (list, index = null) => {
  const ultimaPosicion = list.length - 1;
  const posicion = index === null ? ultimaPosicion : index;
  list.splice(posicion, 1);
  console.log(list);
};

//4. Realizar la función que me reciba como callback alguna de las dos funciones anteriore y que muestre el array en consola

const addOrDeleteFruits = (callback, list, frutaOrPosicion) => {
  callback(list, frutaOrPosicion);
};

addOrDeleteFruits(addFruits, arrayFrutas, 'Manzana');
addOrDeleteFruits(deleteFruit, arrayFrutas, 2);

// Objetos: Conjunto de propiedades { name: "Whitney", year: 1993}
//Arrays: Listas o colección de dato [1,2,3,4], [{name:"Alexandra", age: 26}, {name: "Neis", age: 20}]
//Funciones: Conjunto de instrucciones

//3- Crear una función que convierta números arábigos a romanos
const convertToRomain = (numero) => {
    //Objeto de referencia con las equivalencias de los números romanos a números arábigos
    const romainToArabic = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    // 399: CCCXCIX
    let resultado = ""

    //For in para recorrer propiedades dentro de un objeto
    for (const key in romainToArabic) {
        while (numero >= romainToArabic[key]) {
            resultado += key;
            numero -= romainToArabic[key];
        }
    }
    return resultado;
}

const conversion = convertToRomain(25);
console.log(conversion);

//Proyecto: viernes 3 marzo
//Talleres: miercoles 1 marzo;