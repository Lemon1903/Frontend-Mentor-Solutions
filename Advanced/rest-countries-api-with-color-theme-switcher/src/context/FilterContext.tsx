import {
  Dispatch,
  PropsWithChildren,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";
import { ActionTypes, TRegion } from "../types";

// State Interface
interface IFilterState {
  region: TRegion;
  searchValue: string;
}

// Reducer Interface
interface IReducer extends Partial<IFilterState> {
  type: ActionTypes;
}

const initialState: IFilterState = {
  region: "Filter by Region",
  searchValue: "",
};

const reducer: Reducer<IFilterState, IReducer> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_VALUE:
      if (typeof action.searchValue !== "undefined") {
        return { ...state, searchValue: action.searchValue };
      }
      return state;

    case ActionTypes.SET_REGION:
      if (action.region) {
        return { ...state, region: action.region };
      }
      return state;

    default:
      throw new Error(`No action on type "${action.type}"`);
  }
};

// Contexts Providers
const FilterContext = createContext<IFilterState>(initialState);
const FilterDispatchContext = createContext<Dispatch<IReducer> | null>(null);

// Provider React Component
export default function FilterProvider({ children }: PropsWithChildren) {
  const [filter, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={filter}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  );
}

// Context Providers Custom Hooks
export function useFilter() {
  return useContext(FilterContext);
}

export function useFilterDispatch() {
  const context = useContext(FilterDispatchContext);
  if (!context) {
    throw new Error("Context wasn't provided by a value other than null");
  }
  return context;
}
