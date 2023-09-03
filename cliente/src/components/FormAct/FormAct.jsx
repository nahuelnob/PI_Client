import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
import Searchbar from "../SearchBar/SearchBar";
import style from "./formAct.module.css";
import { useSelector } from "react-redux";

export const FormAct = () => {
  // Traigo el estado global
  const countries = useSelector((state) => state.countries);

  // traigo el navigate para q despues de subir correctamente te lleve a otro lado
  const navigate = useNavigate();

  // Estado local para pasarselo al post
  const [activityData, setActivityData] = useState({
    name: "",
    difficulty: 3,
    duration: "",
    season: "",
    country: "",
  });
  console.log(activityData);

  // funcion para el post
  const newActivity = async (activity) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/activities`,
        activity
      );
      window.alert("Actividad subida correctamente");
      navigate("/home");
    } catch (error) {
      window.alert(error.message);
    }
  };

  // seteo el estado local
  const handleChange = (e) => {
    setActivityData({
      ...activityData,
      [e.target.name]: e.target.value,
    });
  };

  // ejecuto la funcion del post
  const handleSubmit = (e) => {
    e.preventDefault();
    newActivity(activityData);
  };

  return (
    <>
      <div className={style.fondo}>
        <Searchbar />
        <div className={style.div}>
          <div
            className={
              activityData.season === "autumn"
                ? style.div2
                : activityData.season === "winter"
                ? style.div2winter
                : activityData.season === "spring"
                ? style.div2spring
                : style.div2summer
            }
          ></div>
          <form className={style.form}>
            <h1 className={style.titulo}> Subir Actividad </h1>

            <label className={style.label} htmlFor="name">
              {" "}
              Nombre{" "}
            </label>
            <input
              className={style.input}
              type="text"
              name="name"
              value={activityData.name}
              placeholder="nombre..."
              onChange={handleChange}
            ></input>
            <label className={style.label} htmlFor="difficulty">
              {" "}
              difficulty <br />1 - 2 - 3 - 4 - 5
            </label>
            <input
              className={style.input}
              // type="number"
              type="range"
              name="difficulty"
              value={activityData.difficulty}
              placeholder="difficulty..."
              onChange={handleChange}
              max={5}
              min={1}
            ></input>
            <label className={style.label} htmlFor="duration">
              {" "}
              duration{" "}
            </label>
            <input
              className={style.input}
              type="time"
              name="duration"
              value={activityData.duration}
              placeholder="ingrese su duration..."
              onChange={handleChange}
            ></input>
            <label className={style.label} htmlFor="season">
              {" "}
              season{" "}
            </label>

            <select
              className={style.input}
              name="season"
              value={activityData.season}
              onChange={handleChange}
            >
              <option value="summer">Verano</option>
              <option value="autumn">Otoño</option>
              <option value="winter">Invierno</option>
              <option value="spring">Primavera</option>
            </select>
            <label className={style.label} htmlFor="country">
              {" "}
              country{" "}
            </label>
            {/*             <input
              className={style.inputCountry}
              type="text"
              name="country"
              placeholder="Country id..."
              maxLength={3}
              value={activityData.country}
              onChange={handleChange}
            ></input> */}
            <select
              className={style.input}
              name="country"
              value={activityData.country}
              id=""
              onChange={handleChange}
            >
              {countries
                .slice() // copio el array
                .sort((a, b) => a.name.localeCompare(b.name)) // lo ordeno
                .map((item) => {
                  // lo mapeo y devuelvo uno nuevo
                  const { id, name } = item;
                  return <option value={id}>{name}</option>;
                })}
            </select>
            <button
              className={style.button}
              type="submit"
              onClick={handleSubmit}
            >
              <i class="fa-solid fa-upload"></i>{" "}
              Subir
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
