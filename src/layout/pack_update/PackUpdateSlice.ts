import { createSlice } from "@reduxjs/toolkit";

interface PackUpdateState {
  Active_state: string;
}

const initialState: PackUpdateState = {
  Active_state: "hidden",
};

export const PackUpdateSlice = createSlice({
  name: "PackUpdate",
  initialState,
  reducers: {
    showPackUpdate: (state, action) => {
      state.Active_state = action.payload;
    },
  },
});

export const { showPackUpdate } = PackUpdateSlice.actions;

export default PackUpdateSlice.reducer;