import { useNavigate, NavLink } from "react-router-dom";
import validation from "./validation";
import { useState } from "react";
import axios from "axios";
import style from "./register.module.css";

const Register = () => {
  // Use navigate para redireccionar
  const navigate = useNavigate();

  // Estado local para pasarle al post
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  // Estado local para validar sin errores
  const [err, setErr] = useState({});

  // Funcion que se encarga del post
  const nwUser = async (user) => {
    try {
      await axios.post(`http://localhost:3001/user`, user);
      window.alert("usuario creado con exito");
      navigate("/");
    } catch (error) {
      window.alert(error.message);
    }
  };
  // Funcion para setaear los estados locales
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErr(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  // Funcion que ejecuta el post
  const handleSubmit = (e) => {
    e.preventDefault();
    nwUser(userData);
    setErr(validation(userData));
  };

  return (
    <div className={style.div}>
      <form className={style.form}>
        <h1 className={style.titulo}> Registrate </h1>
        <div className={style.labelAndInput}>
          <label className={style.label} htmlFor="nombre">
            {" "}
            Nombre{" "}
          </label>
          <input
            autocomplete="off"
            className={style.input}
            type="text"
            name="nombre"
            value={userData.nombre}
            placeholder="nombre..."
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.labelAndInput}>
          <label className={style.label} htmlFor="apellido">
            {" "}
            Apellido{" "}
          </label>
          <input
            autocomplete="off"
            className={style.input}
            type="text"
            name="apellido"
            value={userData.apellido}
            placeholder="apellido..."
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.labelAndInput}>
          <label className={style.label} htmlFor="email">
            {" "}
            Email{" "}
          </label>
          <input
            autocomplete="off"
            className={style.input}
            type="text"
            name="email"
            value={userData.email}
            placeholder="ingrese su email..."
            onChange={handleChange}
            ></input>
            </div>
          {/* <p style={{ color: "white" }}>{errors.email}</p> */}
        <div className={style.labelAndInput}>
          <label className={style.label} htmlFor="password">
            {" "}
            Password{" "}
          </label>
          <input
            autocomplete="off"
            className={style.input}
            type="password"
            name="password"
            placeholder="contraseña..."
            value={userData.password}
            onChange={handleChange}
          ></input>
        </div>
        {/* <p style={{ color: "white" }}>{errors.password}</p> */}
        <button className={style.button} type="submit" onClick={handleSubmit}>
        <i class="fa-solid fa-address-card"></i>{" "}
          Regitrar
        </button>
        <br />
        <NavLink to="/">
        <button type="submit" className={style.button}>
        <i class="fa-solid fa-right-to-bracket"></i>{" "}
            Ingreso
          </button>
        </NavLink>
      </form>
      <div className={style.div2} />
    </div>
  );
};

export default Register;
