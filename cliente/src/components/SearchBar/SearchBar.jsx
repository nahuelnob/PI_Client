import { NavLink } from "react-router-dom";

import style from "./searchBar.module.css";

const Searchbar = () => {
  return (
    <div className={style.div}>
      <div className={style.buttons}>
        <NavLink className={style.home} to={"/home"}>
          <i class="fa-solid fa-house"></i>
          {/* <img
            title="Home"
            className={style.homeButton}
            src={iconoMundo}
            alt="mundo"
          /> */}
        </NavLink>
        <NavLink to={"/registerAct"}>
          <button className={style.button} type="submit">
            <i class="fa-solid fa-plus" /> subir actividad
          </button>
        </NavLink>

        <NavLink to={"/activities"}>
          <button className={style.button} type="submit">
            <i class="fa-solid fa-passport" /> Ver todas las actividades
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Searchbar;
