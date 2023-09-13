import {
  ADD_COUNTRIES,
  ORDER,
  FILTER,
  ADD_ACTIVITIES,
  ADD_USER,
  ORDER_ACT,
  FILTER_ACT,
  FILTER_ACT_DIF,
  FILTER_ACT_COUNTRY,
} from "../action/types";

export const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  allActivities: [],
  user: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Agrega los paises
    case ADD_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    // Agrega las actividades
    case ADD_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        allActivities: action.payload,
      };

    // Agrega el usuario
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    // Filtro por Continente de Paises
    case FILTER:
      return {
        ...state,
        countries: state.allCountries.filter(
          (continente) => continente.continent === action.payload
        ),
      };

    // Filtro por temporada de actividad
    case FILTER_ACT:
      return {
        ...state,
        activities: state.allActivities.filter(
          (act) => act.season === action.payload
        ),
      };

    // Filtro por dificultad de acitividad
    case FILTER_ACT_DIF:
      return {
        ...state,
        activities: state.allActivities.filter(
          (act) => act.difficulty === action.payload
        ),
      };
    case FILTER_ACT_COUNTRY:  
      return {
        ...state,
        activities: state.allActivities.filter(
          (act) => (act.Countries[0].name).toLowerCase().includes(action.payload)
        ),
      };

    // Ordena los paises x nombre y pob
    case ORDER:
      const newOrder = state.countries.sort((a, b) => {
        if (action.payload === "A") {
          if (a.name < b.name) return -1;
          if (b.name < a.name) return 1;
          return 0;
        }
        if (action.payload === "D") {
          if (a.name < b.name) return 1;
          if (b.name < a.name) return -1;
          return 0;
        }
        if (action.payload === "PA") {
          if (a.population < b.population) return -1;
          if (b.population < a.population) return 1;
          return 0;
        }
        if (action.payload === "PD") {
          if (a.population < b.population) return 1;
          if (b.population < a.population) return -1;
          return 0;
        }
      });
      return {
        ...state,
        countries: [...newOrder],
      };
      
    // Ordena las actividades x dificultad y tiempo
    case ORDER_ACT:
      const newOrderAct = state.activities.sort((a, b) => {
        if (action.payload === "A") {
          if (a.difficulty < b.difficulty) return -1;
          if (b.difficulty < a.difficulty) return 1;
          return 0;
        }
        if (action.payload === "D") {
          if (a.difficulty < b.difficulty) return 1;
          if (b.difficulty < a.difficulty) return -1;
          return 0;
        }
        if (action.payload === "HD") {
          if (a.duration < b.duration) return -1;
          if (b.duration < a.duration) return 1;
          return 0;
        }
        if (action.payload === "LD") {
          if (a.duration < b.duration) return 1;
          if (b.duration < a.duration) return -1;
          return 0;
        }
      });
      return {
        ...state,
        activities: [...newOrderAct],
      };

    /*     case RESET:
      return {
        ...state,
        countries: [...state.allCountries],
      }; */

    default:
      return { ...state };
  }
};

export default rootReducer;
