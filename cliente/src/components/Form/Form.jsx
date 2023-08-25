import { useState } from "react";
import { NavLink } from "react-router-dom";

import validation from "../Form/validation";
import style from "./form.module.css";

const Form = (props) => {
  // saco al login de las props que mando desde app.js
  const { login } = props;
  ////////////////////////////////////////////////////////////////////////////////////
  //Defino estado locales para la data del usuario y los errores
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState({});
  console.log("error del form ->", err);
  ////////////////////////////////////////////////////////////////////////////////////
  // handlechange setea la UserData y los errores
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErr(validation({ ...userData, [e.target.name]: e.target.value }));
  };
  ////////////////////////////////////////////////////////////////////////////////////
  // handleSubmit ejecuta login
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };
  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={style.div}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.titulo}> Ingreso </h1>
        <label className={style.label} htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          placeholder="ingrese su email..."
          onChange={handleChange}
          className={style.input}
        ></input>
        <p className={style.text} style={{ color: "gray", fontSize: "small" }}>
          {err.email}
        </p>
        <label className={style.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="password..."
          value={userData.password}
          onChange={handleChange}
          className={style.input}
        ></input>
        <p className={style.text} style={{ color: "gray", fontSize: "small" }}>
          {err.password}
        </p>
        <button type="submit" className={style.button}>
          Submit
        </button>
        <p className={style.text}>
          Si no estas registrado, hace click en Registrate
        </p>
        <NavLink to="/register">
          <button type="submit" className={style.button}>
            Registrate
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Form;
