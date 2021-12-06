import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { PlataformsActions } from "./plataformsAction";
import { PlataformsState, PLATAFORMS_INITIAL_STATE } from "./plataformsState";
import { PlataformsDispatch, plataformsReducer } from "./plataformsReducer";

const PlataformsStateContext = createContext<PlataformsState>(PLATAFORMS_INITIAL_STATE);
const PlataformsDispatchContext = createContext<PlataformsDispatch>(
  {} as PlataformsDispatch
);

type PlataformsProps = { children: ReactNode };

function PlataformsProvider({ children }: PlataformsProps) {
  const [state, dispatch] = useReducer(plataformsReducer, PLATAFORMS_INITIAL_STATE);

  return (
    <PlataformsStateContext.Provider value={state}>
      <PlataformsDispatchContext.Provider value={dispatch}>
        {children}
      </PlataformsDispatchContext.Provider>
    </PlataformsStateContext.Provider>
  );
}

function usePlataformsContext() {
  const state = useContext(PlataformsStateContext);

  if (!state) {
    throw new Error("usePlataformsContext must be inside of PlataformsProvider");
  }

  const dispatch = useContext(PlataformsDispatchContext);

  if (!dispatch) {
    throw new Error("usePlataformsContext must be inside of PlataformsProvider");
  }

  const actions = PlataformsActions;

  return { state, dispatch, actions };
}

export { PlataformsProvider, usePlataformsContext };
