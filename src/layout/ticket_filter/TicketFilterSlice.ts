import { createSlice } from "@reduxjs/toolkit";

interface TicketFilterState {
  Active_state: string;
}

const initialState: TicketFilterState = {
  Active_state: "hidden",
};

export const TicketFilterSlice = createSlice({
  name: "TicketFilter",
  initialState,
  reducers: {
    showTicketFilter: (state, action) => {
      state.Active_state = action.payload;
    },
  },
});

export const { showTicketFilter } = TicketFilterSlice.actions;

export default TicketFilterSlice.reducer;