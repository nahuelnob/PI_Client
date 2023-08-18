import { useState } from "react";
import { NavLink } from "react-router-dom";
import validation from "../Form/validation";

const Form = (props) => {
  // saco al login de las props que mando desde app.js
  const { login } = props;
  ////////////////////////////////////////////
  //Defino estado locales para la data del usuario y los errores
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState({});
  console.log('error del form ->',err);
  ////////////////////////////////////////////
// handlechange setea la UserData y los errores
const handleChange = (e) => {
  setUserData({ ...userData, [e.target.name]: e.target.value });
  setErr(validation({ ...userData, [e.target.name]: e.target.value }));
};

////////////////////////////////////////////
// handleSubmit ejecuta login
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Ingreso </h1>
        <label htmlFor="email"> Email</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          placeholder="ingrese su email..."
          onChange={handleChange}
        ></input>
        {/* <p style={{ color: "white" }}>{errors.email}</p> */}
        <label htmlFor="password"> Password</label>
        <input
          type="password"
          name="password"
          placeholder="contraseña..."
          value={userData.password}
          onChange={handleChange}
        ></input>
        {/* <p style={{ color: "white" }}>{errors.password}</p> */}
        <button type="submit"> Submit </button>
        <p>Si no estas registrado, hace click en Registrate</p>
        <NavLink to="/register">
          <button type="submit"> Registrate </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Form;
