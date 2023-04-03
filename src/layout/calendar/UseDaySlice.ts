import { createSlice } from "@reduxjs/toolkit";


interface UseDayState {
    use_day: string;
  }

  const initialUseDayState: UseDayState = {
    use_day: "dd/mm/yyyy",
  };

  export const UseDaySlice = createSlice({
    name: "UseDay",
    initialState:initialUseDayState,
    reducers: {
      setUseDay: (state, action) => {
        state.use_day = action.payload;
      }
    },
  });


  export const { setUseDay } = UseDaySlice.actions;

  export default UseDaySlice.reducer;