//1. Crear un arrays de objetos donde cada objeto es un usuario con las mismas propiedades, pero con diferentes valores

const users = [
  {
    name: "Yesid",
    documento: "12345678",
    password: "12345",
    tipoUsuario: 1,
  },
  {
    name: "Whitney",
    documento: "123456789",
    password: "123456",
    tipoUsuario: 2,
  },
];

const dineroEnCajero = [
  {
    denominacion: 100000,
    cantidad: 0,
  },
  {
    denominacion: 50000,
    cantidad: 2,
  },
  {
    denominacion: 20000,
    cantidad: 2,
  },
  {
    denominacion: 10000,
    cantidad: 3,
  },
  {
    denominacion: 5000,
    cantidad: 2,
  },
];

const inicioCajero = () => {
  const numeroDocumento = prompt("Por favor ingrese su número de documento");
  const password = prompt("Por favor ingrese su contraseña");
  return {
    numeroDocumento,
    password,
  };
};

const validateUser = () => {
  let usuarioIniciado = inicioCajero();
  //Buscamos al usuario iniciado en nuestro arrays de usuarios registrados o existente
  let userFound = users.find(
    (user) =>
      user.documento === usuarioIniciado.numeroDocumento &&
      user.password === usuarioIniciado.password
  );
  //Se valida que mientras que el usuario que inició no existe, debe volver a ejecutar la función de inicio del cajero y la búsqueda del usuario en el array users.
  while (!userFound) {
    //Se le avisa al usuario que los datos ingresados están incorrectos
    alert("Los datos del usuario ingresado están incorrectos");
    //y se le vuelven a pedir los datos al usuario
    usuarioIniciado = inicioCajero();
    userFound = users.find(
      (user) =>
        user.documento === usuarioIniciado.numeroDocumento &&
        user.password === usuarioIniciado.password
    );
  }
  return userFound;
};

const depositarDinero = () => {
  alert("Vamos a depositar dinero");
  let totalDineroEnCajero = 0;
  dineroEnCajero.forEach((billete) => {
    const cantidadDepositadaStr = prompt(
      `Por favor ingrese la cantidad de billetes de ${billete.denominacion} a depositar`
    );
    const cantidadDepositada = Number(cantidadDepositadaStr);
    billete.cantidad += cantidadDepositada;
    const sumaDenominacion = billete.denominacion * billete.cantidad;
    totalDineroEnCajero += sumaDenominacion;
    console.log(
      `Hay ${sumaDenominacion} en billetes de ${billete.denominacion}`
    );
  });
  console.log("Dinero en cajero por denominación", dineroEnCajero);
  console.log("Total de dinero en el cajero", totalDineroEnCajero);
};

const retirarDinero = () => {
  //1. Preguntamos al usuario la cantidad a reitar
  //2. Esa cantidad hay que convertirla de string a número
  //3. Calculamos el total de dinero en el cajero
  //4. calculamos la diferencia entre el total de dinero en cajero y el valor a retirar para calcular el dinero que queda en la caja después de realizar el retiro
  //5. Realizamos las validaciones correspondientes
  //5.1 Si el dinero que queda en caja es menor a 0: "El cajero no tiene sufuciente dinero para darle al cliente"
  //5.2 Si el dinero que queda en caja es igual a 0: el cajero le debe entregar al cliente todo el dinero disponible en caja
  //5.3. Si el dinero que queda en caja es mayor a 0, pueden pasar dos cosas:
  //5.3.1 Cuando en la caja existe suficiente sencillo para entregarle al cliente la cantidad total del retiro
  //5.3.2 Cuando en la caja no hay sencillo.
  //---------La misma lógica de la caja registradora--------------
};

const transaccionesCajero = () => {
  const usuarioEncontrado = validateUser();
  //Si el usuario ingresado existe, procedemos a validar que tipo de usuario es.
  if (usuarioEncontrado) {
    if (usuarioEncontrado.tipoUsuario === 1) {
      //Es administrador y debe depositar dinero
      depositarDinero();
    } else {
      //Es cliente y debe retirar dinero
      retirarDinero();
    }
  }
};

//Se ejecuta la función de transacción del cajero

transaccionesCajero();
