import { createSlice } from "@reduxjs/toolkit";

interface CheckBoxPriceState {
  Active_state: string;
}

const initialCalState: CheckBoxPriceState = {
  Active_state: "0",
};

export const CheckBoxPriceSlice = createSlice({
  name: "CheckBoxPrice",
  initialState:initialCalState,
  reducers: {
    showCheckBoxPrice: (state, action) => {
      state.Active_state = action.payload;
    }
  },
});

export const { showCheckBoxPrice } = CheckBoxPriceSlice.actions;

export default CheckBoxPriceSlice.reducer;