import { GET_SINGLE_USER } from "../actions";

const initialState = {
  singleInspect: [],
};

const inspectReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SINGLE_USER:
      return {
        ...state,
        singleInspect: action.payload,
      };
    default:
      return state;
  }
};

export default inspectReducer;
