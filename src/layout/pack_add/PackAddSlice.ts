import { createSlice } from "@reduxjs/toolkit";

interface PackAddState {
  Active_state: string;
  add_state:string;
}

const initialState: PackAddState = {
  Active_state: "hidden",
  add_state: "0"
};

export const PackAddSlice = createSlice({
  name: "PackAdd",
  initialState,
  reducers: {
    showPackAdd: (state, action) => {
      state.Active_state = action.payload;
    },
    changeAddState: (state, action) => {
      state.add_state = action.payload;
    },
  },
});

export const { showPackAdd, changeAddState } = PackAddSlice.actions;

export default PackAddSlice.reducer;