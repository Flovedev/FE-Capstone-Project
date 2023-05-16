import { GET_TITLE_NAME, SET_SEARCH_LIST } from "../actions";

const initialState = {
  allSearch: [],
  title: "",
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEARCH_LIST:
      return {
        ...state,
        allSearch: action.payload,
      };
    case GET_TITLE_NAME:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
