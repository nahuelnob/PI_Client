import axios from "axios";

import { useState } from "react";
import { useSelector } from "react-redux";

import { Card } from "../Card/Card";
import { Countries } from "../Countries/Countries";

import style from "./home.module.css";

export const Home = () => {
  // Estado local para setear el pais desde la DB y el input
  const [country, setCountry] = useState([]);
  // Estado local para tomar el nombre desde el input
  const [name, setName] = useState("");

  ///////////////////////////////////////////////////////////
  // Traigo el estado global
  const countries = useSelector((state) => state.countries);

  ///////////////////////////////////////////////////////////
  // PASAR DE PAGINAS | 10 x Pag
  // Estado local para las paginas
  const [paginaActual, setpaginaActual] = useState(1);

  const cardsxPage = 10;
  const startIndex = (paginaActual - 1) * cardsxPage;
  const endIndex = startIndex + cardsxPage;

  // 10 paises x pag, depende si hay algo en el estado local
  const paisesx10 =
    country.length === 0
      ? countries.slice(startIndex, endIndex)
      : country.slice(startIndex, endIndex);

  // Total de paginas dependiendo de donde toma al pais
  const totalPages =
    country.length === 0
      ? Math.ceil(countries.length / cardsxPage)
      : Math.ceil(country.length / cardsxPage);

  const goToPreviousPage = () => {
    paginaActual > 1 && setpaginaActual(paginaActual - 1);
  };

  const goToNextPage = () => {
    country.length !== 0 && setpaginaActual(totalPages);
    paginaActual < totalPages && setpaginaActual(paginaActual + 1);
    ///////////////////////////////////////////////////////////
  };
  const handleChange = (e) => {
    setName("");
    setName(e.target.value);
  };
  // Para que funcione la barra de busqueda al darle enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(name);
    }
  };

  const onSearch = async (name) => {
    try {
      if (name === "") return setCountry("");
      const { data } = await axios(
        //! Antes del Deploy
        // `http://localhost:3001/countries?name=${name}`
        //* Despues del Deploy
        `/countries?name=${name}`
      );
      setCountry(data);
    } catch (error) {
      window.alert(error.message);
    }
  };

  const pais = paisesx10.map((pais) => {
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
        {/* Paises */}
        <div className={style.div2}>
          <div className={style.divCard}>{pais}</div>

          {/* Botones para pasar pag */}
          <div className={style.prevNext}>
            <button className={style.button} onClick={goToPreviousPage}>
              <i class="fa-solid fa-circle-chevron-left"></i> Anterior
            </button>
            {paginaActual > totalPages
              ? totalPages && setpaginaActual(1)
              : paginaActual}
            /{totalPages}
            {/* {paginaActual}/{totalPages} */}
            <button className={style.button} onClick={goToNextPage}>
              Siguiente <i class="fa-solid fa-circle-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Barra Lateral */}
        <div className={style.div3}>
          <div className={style.lateral}>
            <input
              className={style.input}
              type="text"
              placeholder="Bucar país por nombre..."
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                position: "absolute",
                top: 25,
                right: 40,
                color: "grey",
              }}
            ></i>
            <Countries />
          </div>
        </div>
      </div>
    </>
  );
};
