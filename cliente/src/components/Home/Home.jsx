import axios from "axios";

import { Card } from "../Card/Card";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "./searchBar.module.css";
import { Countries } from "../Countries/Countries";
import { useSelector } from "react-redux";
import iconoMundo from "../../img/mundo.png";
import iconoLupa from "../../img/buscar.png";
import Searchbar from "../SearchBar/SearchBar";

export const Home = () => {
  // Estado local para setear el pais desde la DB
  const [country, setCountry] = useState([]);
  // Estado local para tomar el nombre desde el input
  const [name, setName] = useState("");
  console.log(name);
  console.log("country", country);

  ///////////////////////////////////////////////////////////
  // Traigo el estado global
  const countries = useSelector((state) => state.countries);

  ///////////////////////////////////////////////////////////
  // PASAR DE PAGINAS | 10 x Pag
  const [currentPage, setCurrentPage] = useState(1);
  const cardsxPage = 10;
  const startIndex = (currentPage - 1) * cardsxPage;
  const endIndex = startIndex + cardsxPage;
  // const cardsx10 = countries.slice(startIndex, endIndex);
  const cardsx10 =
    country.length === 0
      ? countries.slice(startIndex, endIndex)
      : country.slice(startIndex, endIndex);

  const totalPages =
    country.length === 0
      ? Math.ceil(countries.length / cardsxPage)
      : Math.ceil(country.length / cardsxPage);

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
      if (name === "") return setCountry("");
      const { data } = await axios(
        `http://localhost:3001/countries?name=${name}`
      );

      setCountry(data);
    } catch (error) {
      window.alert(error.message);
    }
  };
  // if (country.length === 0) onSearch(name);

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
        <Searchbar onSearch={() => onSearch} />
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
