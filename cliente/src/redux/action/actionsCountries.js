import { ADD_COUNTRIES, ORDER, FILTER } from "./types";
import axios from "axios";

const URL = "http://localhost:3001";

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
