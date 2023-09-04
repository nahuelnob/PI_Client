import { useDispatch, useSelector } from "react-redux";
import { addActivities } from "../../redux/action/ations";
import Searchbar from "../SearchBar/SearchBar";
import style from "./activities.module.css";

export const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const handleSeeAll = () => {
    dispatch(addActivities());
  };
  const act = activities.map((actividad) => {
    const { id, name, difficulty, duration, season, Countries } = actividad;
    const pais = Countries.map((pais) => {
      const { name, flags } = pais;
      return (
        <div>
          <p>{name}</p>
          <img src={flags} alt="" width="100 "/>
        </div>
      );
    });
    return (
      <div className={style.divcard}>
        <div className={style.card}>
          <p className={style.id}>{id}</p>
          <p>{name}</p>
          <p>{difficulty}</p>
          <p>{duration}</p>
          <p>{season}</p>
          <div>{pais}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <Searchbar />
      </div>
      <div className={style.div}>
        <div className={style.div2}>
          <div className={style.conteinerAct}>
            {act}
            {act.name}
          </div>
        </div>
        <div className={style.div3}>
          <button className={style.button} onClick={handleSeeAll}>
            buscar
          </button>
        </div>
      </div>
    </>
  );
};
