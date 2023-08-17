import { NavLink } from "react-router-dom";
import validation from "./validation";
import { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState({});
  console.log(err);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErr(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(validation(userData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Registrate </h1>
        <label htmlFor="nombre"> Nombre </label>
        <input
          type="text"
          name="nombre"
          value={userData.nombre}
          placeholder="nombre..."
          onChange={handleChange}
        ></input>
        <label htmlFor="apellido"> Apellido </label>
        <input
          type="text"
          name="apellido"
          value={userData.apellido}
          placeholder="apellido..."
          onChange={handleChange}
        ></input>
        <label htmlFor="email"> Email </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          placeholder="ingrese su email..."
          onChange={handleChange}
        ></input>
        {/* <p style={{ color: "white" }}>{errors.email}</p> */}
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          name="password"
          placeholder="contraseña..."
          value={userData.password}
          onChange={handleChange}
        ></input>
        {/* <p style={{ color: "white" }}>{errors.password}</p> */}
        <NavLink to="/">
          <button type="submit"> Submit </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Register;
