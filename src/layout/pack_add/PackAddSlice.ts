import { createSlice } from "@reduxjs/toolkit";

interface PackAddState {
  Active_state: string;
}

const initialState: PackAddState = {
  Active_state: "hidden",
};

export const PackAddSlice = createSlice({
  name: "PackAdd",
  initialState,
  reducers: {
    showPackAdd: (state, action) => {
      state.Active_state = action.payload;
    },
  },
});

export const { showPackAdd } = PackAddSlice.actions;

export default PackAddSlice.reducer;