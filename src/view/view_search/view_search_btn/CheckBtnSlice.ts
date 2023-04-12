import { createSlice } from "@reduxjs/toolkit";

interface CheckBtnState {
  Active_state: string;
}

const initialState: CheckBtnState = {
  Active_state: "have not checked",
};

export const CheckBtnSlice = createSlice({
  name: "CheckBtn",
  initialState,
  reducers: {
    changeCheckBtn: (state, action) => {
      state.Active_state = action.payload;
    },
  },
});

export const { changeCheckBtn } = CheckBtnSlice.actions;

export default CheckBtnSlice.reducer;