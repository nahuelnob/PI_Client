import "./App.css";

import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import Searchbar from "./components/SearchBar/SearchBar";
import Register from "./components/Register/Register";
import { PersonalBrand } from "./components/PersonalBrand/PersonalBrand";
import { Form } from "./components/Form/Form";
import { Home } from "./components/Home/Home";
import { Countries } from "./components/Countries/Countries";
import { Detail } from "./components/Detail/Detail";
import { FormAct } from "./components/FormAct/FormAct";
import { Activities } from "./components/Activities/Activities";

import { addCountries } from "./redux/action/actionsCountries";
import { addUser } from "./redux/action/actionsUser";
import { addActivities } from "./redux/action/actionsActivitis";

function App() {
  const dispatch = useDispatch();

  const handleCountries = () => {
    dispatch(addCountries());
  };

  /////////////////////////////////////////////////////////////////////////////////////
  const createBulkCountries = async () => {
    const { response } = await axios.post(
      //!antes del deploy
      // `http://localhost:3001/countries/bulk`
      //* despues del deploy
      `https://piserver-production.up.railway.app/countries/bulk`
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
        //!antes del deploy
        // `http://localhost:3001/user?email=${email}&password=${password}`
        //* despues del deploy
        `https://piserver-production.up.railway.app/user?email=${email}&password=${password}`
      );
      // Traigo el access de la data (el que me da el status.json() del getUser del back)
      const { access } = data;
      // Le paso el email al estado global User (solo lo uso para que aparesca q esta logueado)
      dispatch(addUser(email, password));
      // Dispatch a addActivities asi se cargan las actividades en la pagina
      dispatch(addActivities());

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
    // createBulkCountries();
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
        <Route
          path="/"
          element={
            <>
              <Form login={login} />
              <PersonalBrand />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/registerAct" element={<FormAct />} />
        <Route path="/countries" element={<Countries />} />
        <Route
          path="/activities"
          element={
            <>
              <Searchbar setAccess={setAccess} />
              <Activities />
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
