import React, { createContext, useReducer } from "react";
import type { InitialState, typeReducer } from "./home-types";

const INITIAL_STATE = {} as InitialState;

export const HomeContext = createContext<{
  state: typeof INITIAL_STATE;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

function reducer(state: typeof INITIAL_STATE, action: typeReducer) {
  switch (action.type) {
    case "@posts/highlight":
      return { ...state, ...state?.heroSection, heroSection: action.payload };

    case "@posts/todays":
      return { ...state, ...state?.todaysPost, todaysPost: action.payload };
    default:
      return state;
  }
}

export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};
