import { createSlice } from "@reduxjs/toolkit";

interface CalendarState {
  Active_state: string;
}

const initialCalState: CalendarState = {
  Active_state: "hidden",
};

export const CalendarSlice = createSlice({
  name: "Calendar",
  initialState:initialCalState,
  reducers: {
    showCalendar: (state, action) => {
      state.Active_state = action.payload;
    }
  },
});

export const { showCalendar } = CalendarSlice.actions;

export default CalendarSlice.reducer;