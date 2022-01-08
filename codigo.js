let free = false;

const validarCliente = (time) => {
  let edad = prompt(`¿Cuál es tu edad?`);
  if (edad >= 18) {
    if (time >= 2 && time < 7 && free == false) {
      alert(
        `Podés pasar gratis porque sos la primera persona después de las 2AM`
      );
      free = true;
    } else {
      alert(
        `Son las ${time}:00HS y podés pasar, pero tenés que pagar la entrada`
      );
    }
  } else {
    alert(`Mirá papu, sos menor de edad, por ende no vas a pasar MAQUINOLA`);
  }
};

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
