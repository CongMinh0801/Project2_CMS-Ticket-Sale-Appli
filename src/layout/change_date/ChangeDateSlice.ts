import { createSlice } from "@reduxjs/toolkit";

interface ChangeDateState {
  Active_state: string;
  ID_item: string;
  TicketNumber:string;
  EventName:string;
}

const initialState: ChangeDateState = {
  Active_state: "hidden",
  ID_item: "",
  TicketNumber: "",
  EventName:"",
};

export const ChangeDateSlice = createSlice({
  name: "ChangeDate",
  initialState,
  reducers: {
    showChangeDate: (state, action) => {
      state.Active_state = action.payload;
    },
    SelectedID: (state, action) => {
      state.ID_item = action.payload;
    },
    TicketNumber: (state, action) => {
      state.TicketNumber = action.payload;
    },
    EventName: (state, action) => {
      state.EventName = action.payload;
    },
  },
});

export const { showChangeDate, SelectedID, TicketNumber, EventName } = ChangeDateSlice.actions;

export default ChangeDateSlice.reducer;