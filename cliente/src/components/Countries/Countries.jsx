import { useDispatch } from "react-redux";
import {
  addCountries,
  orderCountry,
  filterCountry,
} from "../../redux/action/actionsCountries";
import style from "./countries.module.css";

export const Countries = () => {
  const dispatch = useDispatch();
  // Vuelve a cargar todos los countries al estado global
  const handleReset = () => {
    dispatch(addCountries());
  };
  // Orden
  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderCountry(e.target.value));
  };
  // Filtrado
  const handleFilter = (e) => {
    e.preventDefault();
    /*     !count && setCount(true);
    count && setCount(false); */
    dispatch(filterCountry(e.target.value));
  };
  ///////////////////////////////////////////////////////

  return (
    <div className={style.div}>
      {/* ORDER */}
      <div className={style.order}>
        <h3 className={style.titulo}>Ordenar</h3>
        <div>
          <button className={style.buttonOrder} onClick={handleOrder} value="A">
            <i class="fa-solid fa-arrow-down-a-z" /> País
          </button>
          <button className={style.buttonOrder} onClick={handleOrder} value="D">
            <i class="fa-solid fa-arrow-down-z-a" /> País
          </button>
        </div>

        <div>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="PD"
          >
            <i class="fa-solid fa-arrow-down-wide-short" /> Pob
          </button>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="PA"
          >
            <i class="fa-solid fa-arrow-down-short-wide" /> Pob
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
          <i class="fa-solid fa-map" /> Todos los continentes
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Africa"
        >
          <i class="fa-solid fa-earth-africa" /> África
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="North America"
        >
          <i class="fa-solid fa-earth-americas" /> América del Norte
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="South America"
        >
          <i class="fa-solid fa-earth-americas" /> Ámerica del Sur
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Antarctica"
        >
          <i class="fa-solid fa-earth-oceania" /> Antártida
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Asia"
        >
          <i class="fa-solid fa-earth-asia" /> Asia
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Europe"
        >
          <i class="fa-solid fa-earth-europe" /> Europa
        </button>
      </div>

      <div className={style.filter}>
        <button
          className={style.buttonFilter}
          onClick={handleFilter}
          value="Oceania"
        >
          <i class="fa-solid fa-earth-oceania" /> Oceania
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
            <i class="fa-solid fa-arrow-down-a-z"/>
          </button>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="D"
          >
            <i class="fa-solid fa-arrow-down-z-a"/>
          </button>
        </div>
        <div>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="PD"
          >
            pop <i class="fa-solid fa-arrow-down-wide-short"/>
          </button>
          <button
            className={style.buttonOrder}
            onClick={handleOrder}
            value="PA"
          >
            pop <i class="fa-solid fa-arrow-down-short-wide"/>
          </button>
        </div>
      </div> */}
    </div>
  );
};
