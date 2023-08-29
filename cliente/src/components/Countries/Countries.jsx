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
  const [count, setCount] = useState(false);
  console.log(count);
  //Ver todos
  const handleFavorite = () => {
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
    console.log(e.target.value);
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
    const { name , id} = pais;
    return <>
    <NavLink className={style.NavLink}to={`/detail/${id}`}>
    <p>{name}</p>
    </NavLink>
    
    </>
  });

  return (
    <div className={style.div}>
      {/* IR A HOME */}
      {/* <NavLink className={style.button} to={"/home"}>
        <button type="submit">home</button>
      </NavLink> */}

      {/* MOSTRAR */}
      {/* <button className={style.buscar} type="submit" onClick={handleFavorite}>
        Buscar
      </button> */}

      {/* ORDEN */}
      {/* <button className={style.button} onClick={handleOrder} value="A">
        Ascendente
      </button>
      <button className={style.button} onClick={handleOrder} value="D">
      Descendente
      </button>
      <select onChange={handleOrder} name="Order">
      <option>Select order</option>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
      <option value="PA">Poblacion Ascendente</option>
        <option value="PD">Poblacion Descendente</option>
      </select> */}

      {/* FILTER */}
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
      <div>
        <button
          className={style.button}
          onClick={handleFilter}
          value="South America"
        >
          South America
        </button>
        {count && countries.length < 250 && continente[0] === "South America"
          ? pais
          : null}
      </div>

      <div>
        <button
          className={style.button}
          onClick={handleFilter}
          value="Antarctica"
        >
          Antarctica
        </button>
        {count && countries.length < 250 && continente[0] === "Antarctica"
          ? pais
          : null}
      </div>

      <div>
        <button
          className={style.button}
          onClick={handleFilter}
          value="North America"
        >
          North America
        </button>
        {count && countries.length < 250 && continente[0] === "North America"
          ? pais
          : null}
      </div>

      <div>
        <button className={style.button} onClick={handleFilter} value="Oceania">
          Oceania
        </button>
        {count && countries.length < 250 && continente[0] === "Oceania"
          ? pais
          : null}
      </div>

      <div>
        <button className={style.button} onClick={handleFilter} value="Europe">
          Europe
        </button>
        {count && countries.length < 250 && continente[0] === "Europe"
          ? pais
          : null}
      </div>

      <div>
        <button className={style.button} onClick={handleFilter} value="Africa">
          Africa
        </button>
        {count && countries.length < 250 && continente[0] === "Africa"
          ? pais
          : null}
      </div>

      <div>
        <button className={style.button} onClick={handleFilter} value="Asia">
          Asia
        </button>
        {count && countries.length < 250 && continente[0] === "Asia"
          ? pais
          : null}
      </div>

      {/*       <select onChange={handleFilter} defaultValue={"DEFAULT"} name="Filter">
        <option value="DEFAULT" disable>
          Filtrado
        </option>
        <option value="South America">South America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
      </select> */}
      <div className={style.pais}></div>
    </div>
  );
};
