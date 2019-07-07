import { useReducer, createContext } from "react";
import reducers from "./reducers";
import initialState from "./initialState";
import rawActions from "./actions";

const actionsContext = createContext();

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

export default useAppState;
