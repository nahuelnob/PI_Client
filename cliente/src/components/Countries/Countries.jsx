import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCountries, orderCards, filterCards } from "../../redux/action/ations";

import { Card } from "../Card/Card";

export const Countries = () => {
  const dispatch = useDispatch();
  
  // Traigo el estado GLOBAL y lo defino
  const countries = useSelector((state) => state.countries);
  
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
    dispatch(filterCards(e.target.value));
  };
  ///////////////////////////////////////////////////////

  const pais = countries.map((pais) => {
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

      <p>  {id} {name}</p>
        /* name={name}
        flags={flags}
        continent={continent}
        capital={capital}
        subRegion={subRegion}
        area={area}
        population={population}
        Activities={actividades} */
        );
  });

  return (
    <div>
      {/* IR A HOME */}
      <NavLink to={"/home"}>
        <button type="submit">home</button>
      </NavLink>

      {/* MOSTRAR */}
      <button type="submit" onClick={handleFavorite}>
        Buscar
      </button>

      {/* ORDEN */}
        <button onClick={handleOrder} value="A">Ascendente</button>
        <button onClick={handleOrder} value="D">Descendente</button>
      <select onChange={handleOrder} name="Order">
        <option>Select order</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
        <option value="PA">Poblacion Ascendente</option>
        <option value="PD">Poblacion Descendente</option>
      </select>

      {/* FILTER */}
        
      <button onClick={handleFilter} value="South America">South America</button>
      <select
        onChange={handleFilter}
        defaultValue={"DEFAULT"}
        name="Filter"
      >
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
      </select>
      <div>{pais}</div>
    </div>
  );
};

