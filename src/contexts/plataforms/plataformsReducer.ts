import { PlataformsActions } from "./plataformsAction";
import { PlataformsState, PLATAFORMS_INITIAL_STATE } from "./plataformsState";
import { GenericContext } from "../genericContext";

export type PlataformsDispatch = (action: PlataformsAction) => void;

export function plataformsReducer(state: PlataformsState, action: PlataformsAction) {
  switch (action.type) {
    case PlataformsActions.STORAGE_PLATAFORMS_INFORMATION: {
      return { ...state, ...action.payload };
    }

    case PlataformsActions.CLEAN_PLATAFORMS_INFORMATION: {
      return PLATAFORMS_INITIAL_STATE;
    }

    default: {
      throw new Error(`Action not identified: ${action}`);
    }
  }
}

type PlataformsAction =
  | GenericContext<PlataformsActions.STORAGE_PLATAFORMS_INFORMATION, PlataformsState>
  | GenericContext<PlataformsActions.CLEAN_PLATAFORMS_INFORMATION>;
