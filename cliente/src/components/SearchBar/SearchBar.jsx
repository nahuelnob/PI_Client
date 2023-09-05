import { NavLink } from "react-router-dom";

import style from "./searchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addActivities } from "../../redux/action/actionsActivitis";

const Searchbar = () => {
  const dispatch = useDispatch();
  const handleAddActivities = () => {
    dispatch(addActivities());
  };
  const { email } = useSelector((state) => state.user);

  return (
    <div className={style.div}>
      <div className={style.buttons}>
        <div className={style.user}>{email}</div>
        <NavLink className={style.home} to={"/home"}>
          <i class="fa-solid fa-house"></i>
        </NavLink>
        <NavLink to={"/registerAct"}>
          <button className={style.button} type="submit">
            <i class="fa-solid fa-plus" /> subir actividad
          </button>
        </NavLink>

        <NavLink to={"/activities"}>
          <button
            className={style.button}
            onClick={handleAddActivities}
            type="submit"
          >
            <i class="fa-solid fa-passport" /> Ver todas las actividades
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Searchbar;
