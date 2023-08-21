import { ADD_COUNTRIES } from "../action/types";

export const initialState = {
  countries: [],
  allCountries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload,

        /*      
        *Esto ya no lo uso   
        myFavorites: state.allCharactersFav.filter(
          (favorito) => favorito.id !== Number(action.payload)
        ),
        allCharactersFav: state.allCharactersFav.filter(
          (favorito) => favorito.id !== Number(action.payload)
        ), */
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharactersFav.filter(
          (genero) => genero.gender === action.payload
        ),
      };

    case ORDER:
      const newOrder = state.allCharactersFav.sort((a, b) => {
        if (action.payload === "A") {
          if (a.id < b.id) return -1;
          if (b.id < a.id) return 1;
          return 0;
        }
        if (action.payload === "D") {
          if (a.id < b.id) return 1;
          if (b.id < a.id) return -1;
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: [...newOrder],
      };

    case RESET:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
