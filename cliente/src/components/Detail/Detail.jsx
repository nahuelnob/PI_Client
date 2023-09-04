import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Searchbar from "../SearchBar/SearchBar";
import style from "./detail.module.css";

export const Detail = () => {
  const { id } = useParams();

  const [country, setCountry] = useState({});
  const {
    name,
    flags,
    continent,
    capital,
    subRegion,
    area,
    population,
    Activities,
  } = country;

  const actividades = Activities
    ? Activities.map((act) => {
        const { name } = act;
        return <p>{name}</p>;
      })
    : null;

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      console.log(data);
      if (data.name) {
        setCountry(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCountry({});
  }, [id]);
  console.log(actividades);
  return (
    <>
      <Searchbar />
      <div className={style.div}>
        <div className={style.contenedor}>
          <div className={style.contImg}>
            <img className={style.flag} src={flags} alt={name} />
          </div>
          <div className={style.contAct}>
            <span>ACTIVIDADES:</span>
            <p className={style.act}>
              {actividades?.length > 0 ? actividades : "S/D"}
            </p>
          </div>
        </div>

        <div className={style.contenedor2}>
          <div className={style.info}>
            <h1 className={style.titulo}>{name}</h1>
            <hr />
            <p>
              <span>ID : </span>
              {id}
            </p>
            <p>
              <span>CONTINENT : </span>
              {continent}
            </p>
            <p>
              <span>CAPITAL : </span>
              {capital ? capital : "S/D"}
            </p>
            <p>
              <span>SUBREGION : </span>
              {subRegion ? subRegion : "S/D"}
            </p>
            <p>
              <span>POBLACION : </span>
              {population ? population : "S/D"}{" "}
              <i class="fa-solid fa-person"></i>
            </p>
            <p>
              <span>AREA : </span>
              {area ? area : "S/D"} kms²
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
