import { type } from "../types/type";

export const authReducer = (initialState: State, action: Type) => {
  switch (action.type) {
    case type.login:
      return { ...initialState, logged: true, name: action.payload };
    case type.logout:
      return { logged: false };
    default:
      return initialState;
  }
};

interface Type {
  type: string;
  payload: string;
}

interface State {
  logged: boolean;
  name?: string;
}
