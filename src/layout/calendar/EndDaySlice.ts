import { createSlice } from "@reduxjs/toolkit";


interface EndDayState {
    end_day: string;
  }

  const initialEndDayState: EndDayState = {
    end_day: "dd/mm/yyyy",
  };

  export const EndDaySlice = createSlice({
    name: "EndDay",
    initialState:initialEndDayState,
    reducers: {
      setEndDay: (state, action) => {
        state.end_day = action.payload;
      }
    },
  });


  export const { setEndDay } = EndDaySlice.actions;

  export default EndDaySlice.reducer;