import { ADD_COUNTRIES, ADD_ACTIVITIES,  ORDER , FILTER, /* RESET */} from "./types";
import axios from "axios";


const URL = "http://localhost:3001";

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
//////////////////////////////////////////////////////////
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
//////////////////////////////////////////////////////////
export const filterCards = (continent) => {
  return {
    type: FILTER,
    payload: continent,
  };
};
//////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////
//* No lo use al final
// export const reset = () => {
//   return {
//     type: RESET,
//   };
// };
