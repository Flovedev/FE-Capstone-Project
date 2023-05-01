import { GET_GENRE_GAMES, GET_GENRE_NAME } from "../actions";

const initialState = {
  genre: "",
  game: [],
};

const genreInfoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_GENRE_GAMES:
      return {
        ...state,
        game: action.payload,
      };
    case GET_GENRE_NAME:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
};

export default genreInfoReducer;
