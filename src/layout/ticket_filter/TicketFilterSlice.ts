import { createSlice } from "@reduxjs/toolkit";

interface TicketFilterState {
  Active_state: string;
  startDay:string;
  endDay:string;
  status:string;
  checkInGate:string[]
}

const initialState: TicketFilterState = {
  Active_state: "hidden",
  startDay:"",
  endDay:"",
  status:"",
  checkInGate:[],
};

export const TicketFilterSlice = createSlice({
  name: "TicketFilter",
  initialState,
  reducers: {
    showTicketFilter: (state, action) => {
      state.Active_state = action.payload;
    },
    getListFilter:(state, action) => {
        const { startDayActive, endDayActive, selectedRadioOption, CheckBoxValues } = action.payload;
        state.startDay = startDayActive;
        state.endDay = endDayActive;
        state.checkInGate = CheckBoxValues;
        state.status = selectedRadioOption;
    },
  },
});

export const { showTicketFilter, getListFilter } = TicketFilterSlice.actions;

export default TicketFilterSlice.reducer;