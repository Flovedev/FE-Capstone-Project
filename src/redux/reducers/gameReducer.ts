import { GET_SINGLE_GAME } from "../actions";

const initialState = {
  singleGame: [],
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SINGLE_GAME:
      return {
        ...state,
        singleGame: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
