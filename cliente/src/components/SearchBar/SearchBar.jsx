import { useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card";


const Searchbar = () => {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName("");
    setName(e.target.value);
  };

  const onSearch = async (name) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/countries?name=${name}`
      );
      console.log("datarda ->", data);

      setCountry([data]);
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
      id = {id}
      name = {name}
      flags = {flags}
      continent = {continent}
      capital = {capital}
      subRegion = {subRegion}
      area = {area}
      population = {population}
      Activities = {actividades}
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
      <button type="submit" onClick={() => onSearch(name)}>
        Buscar
      </button>
      <div>{pais}</div>
    </div>
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