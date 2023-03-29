//Se crea la función que simulará la actividad de una caja registradora, esta función debe:
//Recibir 3 parámetros: 1. El total a pagar en la compra 2. El efectivo entregado por el cliente 3. un array con el efectivo por denominación disponible en la caja.
//y retornar o devolver un objeto con dos propiedades: 1. status en que queda la caja 2. un array con las vueltas

const cajaRegistradora = (
  totalCompra,
  efectivoEntregado,
  arrayDineroEnCaja
) => {
  //1. Calcular el cambio a entregar
  const cambio = efectivoEntregado - totalCompra;

  //2. Calcular el total de dinero en caja
  let totalEnCaja = 0;
  arrayDineroEnCaja.forEach((billetes) => {
    totalEnCaja += billetes.denominacion * billetes.cantidad;
  });

  //3. Realizar las validaciones para retornar el status y vueltos que correspondan según sea el caso
  if (cambio < 0) {
    return {
      status: "El cliente no ha pagado completo el total de la compra",
      vuelto: [],
    };
  } else if (cambio === 0) {
    return {
      status:
        "Ajustado, el cliente pagó completo, no se le debe devolver cambio",
      vuelto: [],
    };
  } else if (cambio === totalEnCaja) {
    return {
      status: "Caja Cerrada",
      vuelto: arrayDineroEnCaja,
    };
  } else if (cambio > totalEnCaja) {
    return {
      status: "Caja Registradora sin fondos",
      vuelto: [],
    };
  } else if (cambio < totalEnCaja) {
    //Aquí pueden suceder dos cosas: 1. Que en caja exita suficiente dinero para devolver el cambio completo, o 2. Que en caja no haya sencillo para poder devolver el vuelto completo
    const arrayDeLasVueltas = [];
    let vueltas = cambio;
    arrayDineroEnCaja.forEach((element) => {
      const billetesNecesarios = Math.floor(vueltas / element.denominacion);
      if (billetesNecesarios > 0) {
        if (billetesNecesarios <= element.cantidad) {
          const billetes = {
            denominacion: element.denominacion,
            cantidad: billetesNecesarios,
          };
          arrayDeLasVueltas.push(billetes);
          element.cantidad -= billetesNecesarios;
          vueltas -= element.denominacion * billetesNecesarios;
        } else {
          const billetes = {
            denominacion: element.denominacion,
            cantidad: element.cantidad,
          };
          arrayDeLasVueltas.push(billetes);
          vueltas -= element.denominacion * billetes.cantidad;
          element.cantidad = element.cantidad > 0 ? 0 : 0;
        }
      }
    });
    if (vueltas) {
      return {
        status:
          "La caja registradora no tiene suficiente sencillo para completar el cambio",
        vuelto: arrayDeLasVueltas,
      };
    } else {
      return {
        status: "ABIERTO",
        vuelto: arrayDeLasVueltas,
      };
    }
  }
};

//Se ejecuta la función con unos datos de prueba

const DineroEnCaja = [
  {
    denominacion: 100000,
    cantidad: 1,
  },
  {
    denominacion: 50000,
    cantidad: 2,
  },
  {
    denominacion: 20000,
    cantidad: 3,
  },
  {
    denominacion: 10000,
    cantidad: 5,
  },
  {
    denominacion: 5000,
    cantidad: 10,
  },
  {
    denominacion: 2000,
    cantidad: 10,
  },
  {
    denominacion: 1000,
    cantidad: 10,
  },
];

const respuestaCaja = cajaRegistradora(25000, 50500, DineroEnCaja);
console.log(respuestaCaja);
