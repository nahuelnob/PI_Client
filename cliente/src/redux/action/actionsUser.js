import { ADD_USER } from "./types";
import axios from "axios";

//! Antes del deploy
// const URL = "http://localhost:3001";
//* Despues del deploy
const URL = "https://piserver-production.up.railway.app";

// Agrega al user
export const addUser = (email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `${URL}/user?email=${email}&password=${password}`
      );
      return dispatch({
        type: ADD_USER,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
