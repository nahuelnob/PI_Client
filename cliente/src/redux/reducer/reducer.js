import { ADD_COUNTRIES , ORDER, FILTER, ADD_ACTIVITIES, /* RESET */} from "../action/types";

export const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  allActivities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case ADD_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        allActivities: action.payload,
      };


    case FILTER:
      return {
        ...state,
        countries: state.allCountries.filter(
          (continente) => continente.continent === action.payload
        ),
      };

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
