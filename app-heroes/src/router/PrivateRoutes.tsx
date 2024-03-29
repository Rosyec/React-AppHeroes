import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoutes = ({ children }: Props) => {
  const { state } = useContext(AuthContext);

  return state.logged ? children : <Navigate to={"/login"} />;
};

interface Props {
  children: React.ReactElement;
}
