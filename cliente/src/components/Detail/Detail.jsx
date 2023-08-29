import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  const actividades = Activities ? Activities.map((act) => {
    const { name } = act;
    return <p>{name}</p>;
  }) : null;

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

  return (
    <div>
      <div>
        <div>
          <img src={flags} alt="" />
        </div>

        <div>
          <h1></h1>
          <br />
          <div>
            <p>ID | {id}</p>
            <p>NAME | {name}</p>
            <p>CONTINENT | {continent}</p>
            <p>CAPITAL | {capital}</p>
            <p>SUBREGION | {subRegion}</p>
            <p>POBLACION | {population}</p>
            <p>AREA | {area}</p>
            <p>POBLACION | {population}</p>
            <p>ACTIVIDADES | {actividades}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
