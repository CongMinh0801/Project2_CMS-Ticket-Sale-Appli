import { createSlice } from "@reduxjs/toolkit";

interface StartDayState {
    start_day: string;
  }

  const initialStartDayState: StartDayState = {
    start_day: "dd/mm/yyyy",
  };

  export const StartDaySlice = createSlice({
    name: "StartDay",
    initialState:initialStartDayState,
    reducers: {
      setStartDay: (state, action) => {
        state.start_day = action.payload;
      }
    },
  });


  export const { setStartDay } = StartDaySlice.actions;

  export default StartDaySlice.reducer;