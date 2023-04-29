import { createContext, useContext, useReducer } from "react";

interface IToggleState {
  isNavbarOpen: boolean;
  isCartOpen: boolean;
  isLightboxOpen: boolean;
  isOverlayOpen: boolean;
}

interface IToggleAction {
  type: string;
}

type TToggleReducer = React.Reducer<IToggleState, IToggleAction>;
type TDispatch = React.Dispatch<IToggleAction>;

const initialState: IToggleState = {
  isNavbarOpen: false,
  isCartOpen: false,
  isLightboxOpen: false,
  isOverlayOpen: false,
};

const reducer: TToggleReducer = (state, action) => {
  switch (action.type) {
    case "toggleNavbar":
      return {
        ...state,
        isNavbarOpen: !state.isNavbarOpen,
        isOverlayOpen: !state.isOverlayOpen,
      };
    case "toggleCart":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "toggleLightbox":
      return {
        ...state,
        isLightboxOpen: !state.isLightboxOpen,
        isOverlayOpen: !state.isOverlayOpen,
      };
    case "reset":
      return initialState;
    default:
      throw Error(`Unknown action for type ${action.type}`);
  }
};

const ToggleStateContext = createContext<IToggleState>(initialState);
const ToggleDispatchContext = createContext<TDispatch | Function>(Function);

export default function ToggleProvider({ children }: any) {
  const [toggleStates, dispatch] = useReducer(reducer, initialState);

  return (
    <ToggleStateContext.Provider value={toggleStates}>
      <ToggleDispatchContext.Provider value={dispatch}>
        {toggleStates.isOverlayOpen && (
          <div
            className="z-20 fixed inset-0 w-full bg-black opacity-75"
            onClick={() => dispatch({ type: "reset" })}
          />
        )}
        {children}
      </ToggleDispatchContext.Provider>
    </ToggleStateContext.Provider>
  );
}

export function useToggleStates() {
  return useContext(ToggleStateContext);
}

export function useToggleDispatch() {
  return useContext(ToggleDispatchContext);
}
