import { useNavigate } from "react-router-dom";
import validation from "./validation";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const nwUser = async (user) => {
    try {
      await axios.post(`http://localhost:3001/user`, user);
      window.alert("usuario creado con exito");
      navigate("/");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const [err, setErr] = useState({});
  console.log('error en registrer ---> ', err);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErr(validation({ ...userData, [e.target.name]: e.target.value }));
  };
  //nwUser(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    nwUser(userData);
    setErr(validation(userData));
  };

  return (
    <div>
      <form>
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
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Register;
