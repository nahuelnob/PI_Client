/* import { useDispatch } from "react-redux";
import { Card } from "../Card/Card";

export const Countries = (props) => {
  const dispatch = useDispatch();
  const lista = props.countries.map((pais) => {
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
    )
  });

  return (
    <div>{lista}</div>
  )
}; */

import { useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card";

export const Countries = () => {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName("");
    setName(e.target.value);
  };

  const onSearch = async () => {
    try {
      const { data } = await axios(`http://localhost:3001/countries`);

      setCountry(data);
    } catch (error) {
      window.alert(error.message);
    }
  };

  const pais = country.map((pais) => {
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
    <div className="">
      <input
        type="text"
        placeholder="Buscar pais x id o por nombre..."
        onChange={handleChange}
      />
      <button type="submit" onClick={() => onSearch()}>
        Buscar
      </button>
      <div>{pais}</div>
    </div>
  );
};
