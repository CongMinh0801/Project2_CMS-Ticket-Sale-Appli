import { createSlice } from "@reduxjs/toolkit";

interface ChangeDateState {
  Active_state: string;
}

const initialState: ChangeDateState = {
  Active_state: "hidden",
};

export const ChangeDateSlice = createSlice({
  name: "ChangeDate",
  initialState,
  reducers: {
    showChangeDate: (state, action) => {
      state.Active_state = action.payload;
    },
  },
});

export const { showChangeDate } = ChangeDateSlice.actions;

export default ChangeDateSlice.reducer;