import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCountries,
  orderCards,
  filterCards,
} from "../../redux/action/ations";
import style from "./countries.module.css";
import { useState } from "react";

export const Countries = () => {
  const dispatch = useDispatch();

  // Traigo el estado GLOBAL y lo defino
  const countries = useSelector((state) => state.countries);
  // Traigo el estado GLOBAL y lo defino
  const [count, setCount] = useState(false);
  // Reset
  const handleReset = () => {
    dispatch(addCountries());
  };
  // Orden
  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderCards(e.target.value));
  };
  // Filtrado
  const handleFilter = (e) => {
    e.preventDefault();
    !count && setCount(true);
    count && setCount(false);
    dispatch(filterCards(e.target.value));
  };
  ///////////////////////////////////////////////////////

  const continente = countries.map((pais) => {
    const { continent } = pais;
    return continent;
  });
  const pais = countries.map((pais) => {
    const { name, id } = pais;
    return (
      <>
        <NavLink className={style.NavLink} to={`/detail/${id}`}>
          <p>{name}</p>
        </NavLink>
      </>
    );
  });

  return (
    <div className={style.div}>
      {/* ORDER */}
      <div className={style.order}>
        <button className={style.buttonOrder} onClick={handleOrder} value="D">
          Z - A
        </button>
        <button className={style.buttonOrder} onClick={handleOrder} value="A">
          A - Z
        </button>
        <button className={style.buttonOrder} onClick={handleOrder} value="PD">
          mayor POB
        </button>
        <button className={style.buttonOrder} onClick={handleOrder} value="PA">
          menor POB
        </button>
      </div>

      {/* FILTER */}
      <div className={style.filter}>
        <button className={style.button} onClick={handleReset} value="Reset">
          Todos
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.button}
          onClick={handleFilter}
          value="South America"
        >
          South America
        </button>
        <div className={style.filterCountries}>
          {count && countries.length < 250 && continente[0] === "South America"
            ? pais
            : null}
        </div>
      </div>

      <div className={style.filter}>
        <button
          className={style.button}
          onClick={handleFilter}
          value="Antarctica"
        >
          Antarctica
        </button>
        <div className={style.filterCountries}>
          {count && countries.length < 250 && continente[0] === "Antarctica"
            ? pais
            : null}
        </div>
      </div>

      <div className={style.filter}>
        <button
          className={style.button}
          onClick={handleFilter}
          value="North America"
        >
          North America
        </button>
        <div className={style.filterCountries}>
          {count && countries.length < 250 && continente[0] === "North America"
            ? pais
            : null}
        </div>
      </div>

      <div className={style.filter}>
        <button className={style.button} onClick={handleFilter} value="Oceania">
          Oceania
        </button>
        <div className={style.filterCountries}>
          {count && countries.length < 250 && continente[0] === "Oceania"
            ? pais
            : null}
        </div>
      </div>

      <div className={style.filter}>
        <button className={style.button} onClick={handleFilter} value="Europe">
          Europe
        </button>
        <div className={style.filterCountries}>
          {count && countries.length < 250 && continente[0] === "Europe"
            ? pais
            : null}
        </div>
      </div>

      <div className={style.filter}>
        <button className={style.button} onClick={handleFilter} value="Africa">
          Africa
        </button>
        <div className={style.filterCountries}>
          {count && countries.length < 250 && continente[0] === "Africa"
            ? pais
            : null}
        </div>
      </div>

      <div className={style.filter}>
        <button className={style.button} onClick={handleFilter} value="Asia">
          Asia
        </button>
        <div className={style.filterCountries}>
          {count && countries.length < 250 && continente[0] === "Asia"
            ? pais
            : null}
        </div>
      </div>

      <div className={style.pais}></div>
    </div>
  );
};
