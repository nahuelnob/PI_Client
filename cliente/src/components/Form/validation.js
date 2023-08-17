const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

const validation = (inputs) => {
  const errors = {};

  !inputs.email
    ? (errors.email = "Debe ingresar un usuario")
    : !regexEmail.test(inputs.email)
    ? (errors.email = "El usuario tiene que ser un email")
    : inputs.email.length > 35 &&
      (errors.email =
        "el nombre de usuario no puede tener más de 35 caracteres.");

  const arrNumPass = [];
  const contraseña = inputs.password.split("");
  contraseña.forEach((element) => {
    !isNaN(element) && arrNumPass.push(element);
  });

  inputs.password.length < 5 || inputs.password.length > 10
    ? (errors.password = "La contraseña debe tener entre 6 y 10 letras")
    : !arrNumPass.length &&
      (errors.password = "La contraseña debe tener al menos un numero");

  return errors;
};

export default validation;
