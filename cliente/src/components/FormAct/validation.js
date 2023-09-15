const validation = (inputs) => {
  const errors = {};

  !inputs.name
    ? (errors.name = "Debe ingresar el nombre de la actividad")
    : inputs.name.length > 20 &&
      (errors.name = "el nombre no puede tener más de 20 caracteres.");
  return errors;
};

export default validation;
