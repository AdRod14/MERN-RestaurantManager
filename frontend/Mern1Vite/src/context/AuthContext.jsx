import { createContext, useEffect } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {  user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state;
  }
}
