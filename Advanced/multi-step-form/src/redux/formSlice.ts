import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { steps } from "../components/forms/forms";
import { IAddOn, IFormState, IPlanOption } from "../types";
import findAddOnItem from "../utils/findAddOnItem";

const initialState: IFormState = {
  step: 0,
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  phoneNumber: { value: "", error: "" },
  plan: { name: "Arcade", price: 9, monthsFree: 2 },
  period: "Monthly",
  addOns: [],
  isCompleted: false,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    next(state) {
      if (state.step < steps - 1) {
        state.step += 1;
      } else {
        state.isCompleted = true;
      }
    },
    back(state) {
      state.step -= 1;
    },
    backToStep(state, action: PayloadAction<number>) {
      const newStep = action.payload - 1;
      if (newStep <= 0) state.step = 0;
      else if (action.payload >= steps) state.step = steps - 1;
      else state.step = newStep;
    },
    setUserDetail(state, action: PayloadAction<string[]>) {
      const [input, value] = action.payload;
      return { ...state, [input]: { value: value, error: "" } };
    },
    setError(state, action: PayloadAction<string>) {
      const errorMessage = !state[action.payload].value
        ? "This field is required"
        : "Invalid input";
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          error: errorMessage,
        },
      };
    },
    setPlan(state, action: PayloadAction<IPlanOption>) {
      return { ...state, plan: action.payload };
    },
    togglePeriod(state) {
      state.period = state.period === "Monthly" ? "Yearly" : "Monthly";
    },
    setAddOns(state, action: PayloadAction<IAddOn>) {
      const addOn = action.payload;
      if (findAddOnItem(addOn.heading, state.addOns)) {
        const filteredAddOns = state.addOns.filter(
          (x) => x.heading !== addOn.heading
        );
        return { ...state, addOns: filteredAddOns };
      }
      return { ...state, addOns: [...state.addOns, addOn] };
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice.reducer;
