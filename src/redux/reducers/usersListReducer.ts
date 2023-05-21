import { SET_USERS_LIST } from "../actions";

const initialState = {
  allUsers: [],
};

const usersListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return state;
  }
};

export default usersListReducer;
