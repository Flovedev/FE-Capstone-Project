import { GET_PLATFORMS } from "../actions";

const initialState = {
  allPlatforms: [],
};

const platformsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PLATFORMS:
      return {
        ...state,
        allPlatforms: action.payload,
      };
    default:
      return state;
  }
};

export default platformsReducer;
