import { GET_DISCOVER } from "../actions";

const initialState = {
  games: [],
};

const discoverReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DISCOVER:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }
};

export default discoverReducer;
