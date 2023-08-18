import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import SearchBar from "./components/SearchBar/SearchBar";
import Form from "./components/Form/Form";
import Register from "./components/Register/Register";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/user?email=${email}&password=${password}`
      );
      // Traigo el access de la data (que el el status.json() del getUser del back)
      const { access } = data;
      access === true && alert("Login exitoso");
      // Seteo el acceso y si es true manda al home
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      window.alert("El usuario o la contraseña son incorrectos");
    }
  };

  // El useEffect hace q mientras el access = false se quede en '/' y no avance en la pagina
  useEffect(() => {
    !access && navigate("/");
  },[access]);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<SearchBar />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
