import {
  ADD_ACTIVITIES,
  FILTER_ACT,
  FILTER_ACT_DIF,
  ORDER_ACT,
} from "./types";
import axios from "axios";

const URL = "http://localhost:3001";

// Agrega Actividades
export const addActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URL}/activities`);
      return dispatch({
        type: ADD_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

// Filtra x temporada
export const filterActSeason = (season) => {
  return {
    type: FILTER_ACT,
    payload: season,
  };
};
// Filtra x dificultad
export const filterActDifficulty = (difficulty) => {
  return {
    type: FILTER_ACT_DIF,
    payload: difficulty,
  };
};

// Ordena la Act
export const orderAct = (order) => {
  return {
    type: ORDER_ACT,
    payload: order,
  };
};
