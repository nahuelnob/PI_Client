import { useState } from "react";
import { NavLink } from "react-router-dom";

import validation from "../Form/validation";
import style from "./form.module.css";

import emailSolid from '../../img/email-solid.svg'

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
      <div className={style.div2} />
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.titulo}> Ingreso </h1>
        <div className={style.labelAndInput}>        
          <label className={style.label} htmlFor="email">
            <i class="fa-solid fa-envelope"></i>{" "}
            Email
          </label>
          <input
            autocomplete="off"
            type="text"
            name="email"
            value={userData.email}
            placeholder="ingrese su email..."
            onChange={handleChange}
            className={style.input}
          ></input>
          <p className={style.text}>{err.email}</p>
        </div>
        <div className={style.labelAndInput}>
          <label className={style.label} htmlFor="password">
            <i class="fa-solid fa-lock"></i>{" "}
            Password
          </label>
          <input
            autocomplete="off"
            type="password"
            name="password"
            placeholder="password..."
            value={userData.password}
            onChange={handleChange}
            className={style.input}
          ></input>
          <p className={style.text}>{err.password}</p>
        </div>
        <button type="submit" className={style.button}>
        <i class="fa-solid fa-right-to-bracket"></i>{" "}
          Ingresar
        </button>
        <p className={style.texto}>
          Si no estas registrado, hace click en Registrate
        </p>
        <NavLink to="/register">
          <button type="submit" className={style.button}>
          <i class="fa-solid fa-address-card"></i>{" "}
            Registrate
          </button>
        </NavLink>

      </form>


    </div>
  );
};

export default Form;
