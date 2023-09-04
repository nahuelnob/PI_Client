import style from "./card.module.css";
import { NavLink } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className={style.div}>
      <div className={style.containerImg}>
        <NavLink to={`/detail/${props.id}`}>
          <img className={style.img} src={props.flags} alt="" />
        </NavLink>
      <h2 className={style.name}>{props.name}</h2>
      </div>

      <p className={style.text}>{props.id}</p>
      <p className={style.text}>{props.continent}</p>
      <p className={style.text}>{props.capital}</p>
      <p className={style.text}>{props.subRegion}</p>
      <p className={style.text}>{props.area}</p>
      <p className={style.text}>{props.population}</p>
      <p className={style.text}>{props.Activities}</p>
    </div>
  );
};
