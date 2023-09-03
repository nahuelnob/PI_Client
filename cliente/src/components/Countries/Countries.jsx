import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCountries,
  orderCards,
  filterCards,
} from "../../redux/action/ations";
import style from "./countries.module.css";
import { useState } from "react";

export const Countries = () => {
  const dispatch = useDispatch();

  // Traigo el estado GLOBAL y lo defino
  const countries = useSelector((state) => state.countries);
  // Traigo el estado GLOBAL y lo defino
  const [count, setCount] = useState(false);
  // Reset
  const handleReset = () => {
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
    !count && setCount(true);
    count && setCount(false);
    dispatch(filterCards(e.target.value));
  };
  ///////////////////////////////////////////////////////

  const continente = countries.map((pais) => {
    const { continent } = pais;
    return continent;
  });
  const pais = countries.map((pais) => {
    const { name, id } = pais;
    return (
      <>
        <NavLink className={style.NavLink} to={`/detail/${id}`}>
          {name}
        </NavLink>
      </>
    );
  });

  return (
    <div className={style.div}>
      {/* ORDER */}
      <div className={style.order}>
      <h3 className={style.titulo}>Ordenar</h3>
        <div>
          <button className={style.buttonOrder} onClick={handleOrder} value="A">
            País <i class="fa-solid fa-arrow-down-a-z"></i>
          </button>
          <button className={style.buttonOrder} onClick={handleOrder} value="D">
            País <i class="fa-solid fa-arrow-down-z-a"></i>
          </button>
        </div>

        <div>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="PD"
          >
            Pob <i class="fa-solid fa-arrow-down-wide-short"></i>
          </button>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="PA"
          >
            Pob <i class="fa-solid fa-arrow-down-short-wide"></i>
          </button>
        </div>
      </div>
      <hr />
      {/* FILTER */}
      <div className={style.filter}>
        <h3 className={style.titulo}>Buscar por continentes</h3>
        <button
          className={style.buttonFilter}
          onClick={handleReset}
          value="Reset"
        >
          Todos los países <i class="fa-solid fa-map" onClick={handleReset}></i>
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Africa"
        >
          África <i class="fa-solid fa-earth-africa"></i>
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="North America"
        >
          América del Norte <i class="fa-solid fa-earth-americas"></i>
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="South America"
        >
          Ámerica del Sur <i class="fa-solid fa-earth-americas"></i>
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Antarctica"
        >
          Antártida <i class="fa-solid fa-earth-oceania"></i>
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Asia"
        >
          Asia <i class="fa-solid fa-earth-asia"></i>
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Europe"
        >
          Europa <i class="fa-solid fa-earth-europe"></i>
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Oceania"
        >
          Oceania <i class="fa-solid fa-earth-oceania"></i>
        </button>
      </div>

      {/* ORDER */}
      {/* <div className={style.order}>
        <div>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="A"
          >
            <i class="fa-solid fa-arrow-down-a-z"></i>
          </button>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="D"
          >
            <i class="fa-solid fa-arrow-down-z-a"></i>
          </button>
        </div>
        <div>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="PD"
          >
            pop <i class="fa-solid fa-arrow-down-wide-short"></i>
          </button>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="PA"
          >
            pop <i class="fa-solid fa-arrow-down-short-wide"></i>
          </button>
        </div>
      </div> */}
    </div>
  );
};
