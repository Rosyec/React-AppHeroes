import React, { createContext } from "react";

export const AuthContext = createContext<Props>({
  onLogin: () => {},
  onLogout: () => {},
  state: { logged: false, name: "" },
});

interface Props {
  onLogin: (username: string) => void;
  onLogout: () => void;
  state: State;
}

interface State {
  logged: boolean;
  name?: string;
}
