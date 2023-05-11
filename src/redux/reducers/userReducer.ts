import { SET_USER_INFO } from "../actions";
import { IUser } from "../interfaces/IUser";

interface IState {
  userInfo: IUser | null;
}

const initialState: IState = {
  userInfo: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
