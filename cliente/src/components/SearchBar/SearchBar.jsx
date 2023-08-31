import { NavLink } from "react-router-dom";

import style from "./searchBar.module.css";
import iconoMundo from "../../img/mundo.png";

const Searchbar = () => {
  return (
    <>
      <div className={style.div}>
        <div className={style.buttons}>
          <NavLink to={"/home"}>
            <img
              className={style.homeButton}
              src={iconoMundo}
              alt="mundo"
              height={60}
            />
          </NavLink>
          <h1>Countries</h1>
          <NavLink to={"/registerAct"}>
            <button className={style.button} type="submit">
              subir actividad
            </button>
          </NavLink>

          <NavLink to={"/activities"}>
            <button className={style.button} type="submit">
              Ver todas las actividades
            </button>
          </NavLink>
        </div>
      </div>
    </>
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
