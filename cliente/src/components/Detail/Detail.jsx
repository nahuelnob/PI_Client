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
          <div className={style.cont}>
            <img className={style.flag} src={flags} alt={name} />
            <h1>{name}</h1>
          </div>

          <div className={style.info}>
            <div>
              <p>ID: {id}</p>
              <p>CONTINENT: {continent}</p>
              <p>CAPITAL: {capital ? capital : "S/D"}</p>
              <p>SUBREGION: {subRegion ? subRegion : "S/D"}</p>
              <p>POBLACION: {population ? population : "S/D"}</p>
              <p>AREA: {area ? area : "S/D"} kms²</p>
            </div>

            <div className={style.act}>
              <p>
                ACTIVIDADES: {actividades?.length > 0 ? actividades : "S/D"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
