import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import Form from "./components/Form/Form";
import Register from "./components/Register/Register";

import { FormAct } from "./components/FormAct/FormAct";
import { Activities } from "./components/Activities/Activities";
import { Countries } from "./components/Countries/Countries";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCountries } from "./redux/action/ations";


function App() {
const dispatch = useDispatch()
const countries = useSelector((state) => state.countries)
const handleCountries = () => {
  dispatch(addCountries())
}

  /////////////////////////////////////////////////////////////////////////////////////
  // LOGIN
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
      handleCountries() && Countries()
    } catch (error) {
      window.alert("El usuario o la contraseña son incorrectos");
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////

  // El useEffect hace q mientras el access = false se quede en '/' y no avance en la pagina
  useEffect(() => {
    !access && navigate("/");
  },[access]);

  // Conecto con el estado global
  // const countries = useSelector((state) => state.countries)

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<SearchBar/>} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerAct" element={<FormAct />} />
        <Route path="/countries" element={<Countries/>} />
        <Route path="/activities" element={<Activities/>} />
      </Routes>
    </div>
  );
}

export default App;
