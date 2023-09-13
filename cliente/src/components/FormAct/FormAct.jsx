import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
import style from "./formAct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addActivities } from "../../redux/action/actionsActivitis";

export const FormAct = () => {
  const dispatch = useDispatch();
  // Traigo el estado global
  const allCountries = useSelector((state) => state.allCountries);

  // traigo el navigate para q despues de subir correctamente te lleve a otro lado
  const navigate = useNavigate();

  // Estado local para pasarselo al post
  const [activityData, setActivityData] = useState({
    name: "",
    difficulty: 3,
    duration: "",
    season: "Verano",
    country: [],
  });

  // funcion para el post
  const newActivity = async (activity) => {
    try {
      if (activityData.country.length < 1) return window.alert("Falto agregar un país");
      await axios.post(`http://localhost:3001/activities`, activity);
      window.alert("Actividad subida correctamente")
      dispatch(addActivities()) && navigate("/activities");
    } catch (error) {
      window.alert(error.response.data.error);
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
    //para que actualice el estado global una vez creada la act
    newActivity(activityData);
  };
  // ejecuto la funcion del post
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  // Para agregar un pais al estado local
  const handleMoreCountry = (e) => {
    e.preventDefault();
    if (activityData.country.includes(e.target.parentElement.querySelector("select[name='country']").value)) return window.alert("Ese país ya estaba agregado")
        setActivityData({
      ...activityData,
      [e.target.name]: [...activityData.country, e.target.parentElement.querySelector("select[name='country']").value]
    });
    window.alert('Pais agregado correctamente')
  };

  console.log(activityData);

  return (
    <>
      <div className={style.fondo}>
        <div className={style.div}>
          <div
            className={
              activityData.season === "Otoño"
                ? style.div2
                : activityData.season === "Invierno"
                ? style.div2winter
                : activityData.season === "Primavera"
                ? style.div2spring
                : style.div2summer
            }
          ></div>
          <form className={style.form}>
            <h1 className={style.titulo}> Subir Actividad </h1>
            <div className={style.labelAndInput}>
              <label className={style.label} htmlFor="name">
                {" "}
                Nombre{" "}
              </label>
              <input
                autocomplete="off"
                className={style.input}
                type="text"
                name="name"
                value={activityData.name}
                placeholder="nombre..."
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.labelAndInput}>
              <label className={style.label} htmlFor="difficulty">
                {" "}
                difficulty <br />
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
              <span className={style.span}>1 - 2 - 3 - 4 - 5</span>
            </div>
            <div className={style.labelAndInput}>
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
            </div>
            <div className={style.labelAndInput}>
              <label className={style.label} htmlFor="season">
                {" "}
                season{" "}
              </label>

              <select
                className={style.inputSelect}
                name="season"
                value={activityData.season}
                onChange={handleChange}
              >
                <option value="Verano">Verano</option>
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
                <option value="Primavera">Primavera</option>
              </select>
            </div>
            <div className={style.labelAndInput}>
              <label className={style.label} htmlFor="country">
                {" "}
                country{" "}
              </label>

              <select
                className={style.inputSelect}
                name="country"
                id=""
                // value={activityData.country}
                // onClick={handleMoreCountry}
              >
                {allCountries
                  .slice() // copio el array
                  .sort((a, b) => a.name.localeCompare(b.name)) // lo ordeno
                  .map((item) => {
                    // lo mapeo y devuelvo uno nuevo
                    const { id, name } = item;
                    return <option value={id}>{name}</option>;
                  })}
              </select>
              <button
                className={style.buttonMoreCountries}
                type="submit"
                onClick={handleMoreCountry}
                name="country"
                value={activityData.country}
              >
                <i class="fa-solid fa-plus"></i> Agregar
              </button>
            </div>

            <div className={style.buttons}>
              <button
                className={style.button}
                type="submit"
                onClick={handleBack}
              >
                <i class="fa-solid fa-circle-left"></i> Home
              </button>
              <button
                className={style.button}
                type="submit"
                onClick={handleSubmit}
                // onKeyPress={handleKeyPress}
              >
                <i class="fa-solid fa-upload"></i> Subir
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
