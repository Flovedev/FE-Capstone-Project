import { SET_TOKEN, SET_USER_INFO } from "../actions";
import { IUser } from "../interfaces/IUser";

interface IState {
  token: string;
  userInfo: IUser | null;
}

const initialState: IState = {
  token: "",
  userInfo: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
