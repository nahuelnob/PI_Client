import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Form } from "./components/Form/Form";
import Register from "./components/Register/Register";

import { FormAct } from "./components/FormAct/FormAct";
import { Activities } from "./components/Activities/Activities";
import { Countries } from "./components/Countries/Countries";
import { Detail } from "./components/Detail/Detail";

import axios from "axios";
import { useDispatch } from "react-redux";
import { addCountries } from "./redux/action/actionsCountries";
import { Home } from "./components/Home/Home";
import { addUser } from "./redux/action/actionsUser";
import Searchbar from "./components/SearchBar/SearchBar";

function App() {
  const dispatch = useDispatch();

  const handleCountries = () => {
    dispatch(addCountries());
  };

  /////////////////////////////////////////////////////////////////////////////////////
  const createBulkCountries = async () => {
    const { response } = await axios.post(
      `http://localhost:3001/countries/bulk`
    );
    return response;
  };
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
      // Le paso el emial al estado global User (solo lo uso para que aparesca q esta logueado)
      dispatch(addUser(email, password));
      access === true && alert("Login exitoso");
      // Seteo el acceso y si es true manda al home
      setAccess(access);
      access && navigate("/home");
      // Le mando los countries al estado global
      handleCountries();
    } catch (error) {
      window.alert("El usuario o la contraseña son incorrectos");
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////

  // El useEffect hace q mientras el access = false se quede en '/' y no avance en la pagina
  useEffect(() => {
    createBulkCountries();
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Home />
              <Searchbar setAccess={setAccess} />
            </>
          }
        />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerAct" element={<FormAct />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
