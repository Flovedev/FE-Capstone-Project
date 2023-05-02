import { GET_PLATFORM_GAMES, GET_PLATFORM_NAME } from "../actions";

const initialState = {
  platform: "",
  game: [],
};

const platformInfoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PLATFORM_GAMES:
      return {
        ...state,
        game: action.payload,
      };
    case GET_PLATFORM_NAME:
      return {
        ...state,
        platform: action.payload,
      };
    default:
      return state;
  }
};

export default platformInfoReducer;
