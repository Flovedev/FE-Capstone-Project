import { SET_SEARCH_LIST } from "../actions";

const initialState = {
  allSearch: [],
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEARCH_LIST:
      return {
        ...state,
        allSearch: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
