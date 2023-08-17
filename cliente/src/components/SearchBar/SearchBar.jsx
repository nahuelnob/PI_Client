import { useState } from "react";
import axios from "axios";

const Searchbar = () => {
  const [country, setCountry] = useState([]);
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId("");
    setId(e.target.value);
  };

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/countries/${id}`);

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
      <div className="body" style={{ backgroundColor: "grey" }}>
        <p>{id} </p>
        <p>{name} </p>
        <img src={flags} alt="" />
        <p>{continent}</p>
        <p>{capital}</p>
        <p>{subRegion}</p>
        <p>area : {area} mts</p>
        <p>poblacion : {population}</p>
        <p>Actividades : {actividades}</p>
      </div>
    );
  });

  return (
    <div className="">
      <input
        type="text"
        placeholder="Buscar pais x id o por nombre..."
        onChange={handleChange}
      />
      <button type="submit" onClick={() => onSearch(id)}>
        Buscar
      </button>
      <div>{pais}</div>
    </div>
  );
};

export default Searchbar;
