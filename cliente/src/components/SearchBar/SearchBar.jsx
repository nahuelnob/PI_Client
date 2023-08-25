import axios from "axios";

import { Card } from "../Card/Card";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "./searchBar.module.css";
import { useSelector } from "react-redux";
import { Countries } from "../Countries/Countries";

const Searchbar = () => {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState("");

  ///////////////////////////////////////////////////////////
  // PASAR DE PAGINAS | 10 x Pag
  const [currentPage, setCurrentPage] = useState(1);
  const cardsxPage = 10;
  const startIndex = (currentPage - 1) * cardsxPage;
  const endIndex = startIndex + cardsxPage;
  const cardsx10 = country.slice(startIndex, endIndex);

  const totalPages = Math.ceil(country.length / cardsxPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    ///////////////////////////////////////////////////////////
  };
  const handleChange = (e) => {
    setName("");
    setName(e.target.value);
  };

  const onSearch = async (name) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/countries?name=${name}`
      );

      setCountry(data);
    } catch (error) {
      window.alert(error.message);
    }
  };
  if (country.length === 0) onSearch(name);

  const pais = cardsx10.map((pais) => {
    const {
      id,
      name,
      flags,
      continent,
      capital,
      subRegion,
      area,
      population,
      Activities,
    } = pais;
    const actividades = Activities.map((act) => {
      const { name } = act;
      return <p>{name}</p>;
    });

    return (
      <Card
        id={id}
        name={name}
        flags={flags}
        continent={continent}
        capital={capital}
        subRegion={subRegion}
        area={area}
        population={population}
        Activities={actividades}
      />
    );
  });

  return (
    <>
    <div className={style.div}>
      <input
        className={style.input}
        type="text"
        placeholder="País..."
        onChange={handleChange}
      />
      <div className={style.buttons}>
        <button
          className={style.button}
          type="submit"
          onClick={() => onSearch(name)}
        >
          Buscar
        </button>
        <NavLink to={"/countries"}>
          <button className={style.button} type="submit">
            Ver todos los paises
          </button>
        </NavLink>
        <NavLink to={"/countries"}>
          <button className={style.button} type="submit">
            sudamerica
          </button>
        </NavLink>
        <NavLink to={"/registerAct"}>
          <button className={style.button} type="submit">
            subir actividad
          </button>
        </NavLink>
        <NavLink to={"/activities"}>
          <button className={style.button} type="submit">
            Ver todas las actividades
          </button>
        </NavLink>
      </div>
      <div className={style.prevNext}>
        <button className={style.button} onClick={goToPreviousPage}>
          Anterior
        </button>
        {currentPage}/{totalPages}
        <button className={style.button} onClick={goToNextPage}>
          Siguiente
        </button>
      </div>
      <div className={style.divCard}>{pais}</div>
    </div>
    <div className={style.coso}>
      <Countries />
    </div>
    </>
  );
};

export default Searchbar;

//////////////////////////////////////////////////////////////////////////////////
/*       <div className="body" style={{ backgroundColor: "grey" }}>
            <p>{id} </p>
            <p>{name} </p>
            <img src={flags} alt="" />
            <p>{continent}</p>
            <p>{capital}</p>
            <p>{subRegion}</p>
            <p>area : {area} mts</p>
            <p>poblacion : {population}</p>
            <p>Actividades : {actividades}</p>
          </div> */
