import { useDispatch, useSelector } from "react-redux";
import {
  addActivities,
  filterActCountry,
  filterActDifficulty,
  filterActSeason,
  orderAct,
} from "../../redux/action/actionsActivitis";
import Searchbar from "../SearchBar/SearchBar";
import style from "./activities.module.css";
import { useState } from "react";

export const Activities = () => {
  const dispatch = useDispatch();
  // El estado Global
  const activities = useSelector((state) => state.activities);

  // Construyo un estado local para luego filtrar act x pais
  const [pais, SetPais] = useState({
    pais: "",
  });
  // Funcion que setea el estado local
  const handleChange = (e) => {
    SetPais({ ...pais, [e.target.name]: e.target.value.toLowerCase() });
  };

  // funcion que hace ver todas las actividades
  const handleSeeAll = () => {
    dispatch(addActivities());
  };

  // Filtrado x season
  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(filterActSeason(e.target.value));
  };
  // Filtrado x dificultad
  const handleFilterDif = (e) => {
    e.preventDefault();
    dispatch(filterActDifficulty(Number(e.target.value)));
  };
  //  Filtrado x pais al hacer enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(filterActCountry(pais.pais));
    }
  };
  // Orden
  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderAct(e.target.value));
  };

  // Map de las actividades
  const act = activities.map((actividad) => {
    const { name, difficulty, duration, season, Countries } = actividad;
    const pais = Countries.map((pais) => {
      const { name, flags } = pais;
      return { name, flags };
    });
    return (
      // Card Actividades + pais
      <div className={style.divcard}>
        <div className={style.card}>
          <h3 className={style.nameAct}>{name}</h3>
          <hr className={style.hr} />
          <p className={style.p}>Dificultad: {difficulty}</p>
          <p className={style.p}>Duracion: {duration} hs</p>
          <p className={style.p}>Temporada: {season}</p>
          <h3 className={style.namePais}>{pais[0].name}</h3>
          <img className={style.flag} src={pais[0].flags} alt="" />
        </div>
      </div>
    );
  });

  return (
    <>
      <Searchbar />
      <div className={style.div}>
        <div className={style.div2}>
          <div className={style.conteinerAct}>{act}</div>
        </div>

        <div className={style.div3}>
          <input
            className={style.input}
            autoComplete="off"
            type="text"
            name="pais"
            value={pais.pais}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="Buscar actividad por país..."
          />
          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              position: "absolute",
              top: 25,
              right: 40,
              color: "grey",
            }}
          />
          {/* ORDER */}
          <div className={style.order}>
            <h3 className={style.div3Title}> Ordenar</h3>
            <div>
              <div>
                <button
                  className={style.buttonOrder}
                  onClick={handleOrder}
                  value="A"
                >
                  <i class="fa-solid fa-arrow-down-short-wide" /> Dificultad
                </button>
                <button
                  className={style.buttonOrder}
                  onClick={handleOrder}
                  value="D"
                >
                  <i class="fa-solid fa-arrow-down-wide-short" /> Dificultad
                </button>
              </div>

              <div>
                <button
                  className={style.buttonOrder}
                  onClick={handleOrder}
                  value="HD"
                >
                  <i class="fa-solid fa-arrow-down-1-9" /> Duración
                </button>
                <button
                  className={style.buttonOrder}
                  onClick={handleOrder}
                  value="LD"
                >
                  <i class="fa-solid fa-arrow-down-9-1" /> Duración
                </button>
                <hr />
              </div>
            </div>
          </div>

          {/* FILTER */}
          <div className={style.filter}>
            <h3 className={style.div3Title}>Filtrar</h3>
            <button onClick={handleSeeAll} className={style.buttonFilter}>
              <i class="fa-solid fa-map" /> Todos
            </button>
            <button
              className={style.buttonFilter}
              onClick={handleFilter}
              value="summer"
            >
              <i class="fa-solid fa-umbrella-beach" /> Verano
            </button>

            <button
              className={style.buttonFilter}
              onClick={handleFilter}
              value="autumn"
            >
              <i class="fa-brands fa-canadian-maple-leaf" /> Otoño
            </button>
            <button
              className={style.buttonFilter}
              onClick={handleFilter}
              value="winter"
            >
              <i class="fa-solid fa-snowflake" /> Invierno
            </button>
            <button
              className={style.buttonFilter}
              onClick={handleFilter}
              value="spring"
            >
              <i class="fa-solid fa-tree" /> Primavera
            </button>

            <button
              className={style.buttonFilter}
              onClick={handleFilterDif}
              value={1}
            >
              <i class="fa-solid fa-1" /> de Dificultad
            </button>
            <button
              className={style.buttonFilter}
              onClick={handleFilterDif}
              value={2}
            >
              <i class="fa-solid fa-2" /> de Dificultad
            </button>
            <button
              className={style.buttonFilter}
              onClick={handleFilterDif}
              value={3}
            >
              <i class="fa-solid fa-3" /> de Dificultad
            </button>
            <button
              className={style.buttonFilter}
              onClick={handleFilterDif}
              value={4}
            >
              <i class="fa-solid fa-4" /> de Dificultad
            </button>
            <button
              className={style.buttonFilter}
              onClick={handleFilterDif}
              value={5}
            >
              <i class="fa-solid fa-5" /> de Dificultad
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
