import React, { useReducer, useRef, useContext, createContext } from "react";
import reducers from "./reducers";
import initialState from "./initialState";
import rawActions from "./actions";

function withDispatch(actions, dispatch, state) {
  const actionEntries = Object.entries(actions).map(([key, action]) => {
    return [key, action(dispatch, state)];
  });

  return Object.fromEntries(actionEntries);
}

const useAppState = () => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const actions = withDispatch(rawActions, dispatch, state);

  return { state, actions };
};

const AppStateContext = createContext({ state: {}, actions: {} });

const AppStateProvider = ({ children }) => {
  const { state, actions } = useAppState();

  return (
    <AppStateContext.Provider value={{ state, actions }}>
      {children}
    </AppStateContext.Provider>
  );
};

const useAppStateContext = () => {
  return useContext(AppStateContext);
};

export { AppStateProvider, useAppStateContext };
