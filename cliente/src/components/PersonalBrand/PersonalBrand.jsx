import { NavLink } from "react-router-dom";
import style from './personalB.module.css'

export const PersonalBrand = () => {
  return (
    <>
      <div className={style.div}>
      <h4>COUNTRIES | Nahue Santini</h4>
        <NavLink to="https://www.linkedin.com/in/nahuesantini/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </NavLink>
        <NavLink to="https://github.com/nahuelnob" target="_blank">
          <i class="fa-brands fa-github"></i>
        </NavLink>
        <NavLink to="https://twitter.com/NahuelSantini1" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </NavLink>
      </div>
    </>
  );
};
