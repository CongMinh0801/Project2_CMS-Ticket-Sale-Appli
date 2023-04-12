import { createSlice } from "@reduxjs/toolkit";

interface InputNameState {
  Active_state: string;
  listOfEventName:string
  eventName:string;
  startDay:string;
  endDay:string;
  status:string;
}

const initialState: InputNameState = {
  Active_state: "Trống",
  listOfEventName: "",
  eventName: "",
  startDay: "",
  endDay: "",
  status: "",
};

export const InputNameSlice = createSlice({
  name: "InputName",
  initialState,
  reducers: {
    changeInputName: (state, action) => {
      state.Active_state = action.payload;
    },
    getListOfEventName: (state, action) => {
      state.listOfEventName = action.payload;
    },
    getCheckFilter:(state, action) => {
      const { eventName, selectedRadioOption, startDayActive, endDayActive } = action.payload;
      state.eventName = eventName;
      state.status = selectedRadioOption;
      state.startDay = startDayActive;
      state.endDay = endDayActive;
  },
  },
});

export const { changeInputName, getListOfEventName, getCheckFilter } = InputNameSlice.actions;

export default InputNameSlice.reducer;