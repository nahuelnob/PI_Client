import { ADD_COUNTRIES, ORDER, FILTER } from "./types";
import axios from "axios";

//! Antes del deploy
// const URL = "http://localhost:3001";
//* Despues del deploy
const URL = "https://piserver-production.up.railway.app";

// Agrega los paises
export const addCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URL}/countries`);
      return dispatch({
        type: ADD_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
// Ordena los paises
export const orderCountry = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
// Filtra los paises
export const filterCountry = (continent) => {
  return {
    type: FILTER,
    payload: continent,
  };
};
