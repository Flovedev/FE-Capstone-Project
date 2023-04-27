import { GET_GENRES } from "../actions";

const initialState = {
  allGenres: [],
};

const genresReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
