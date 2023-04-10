import { createSlice } from "@reduxjs/toolkit";

interface InputNameState {
  Active_state: string;
}

const initialState: InputNameState = {
  Active_state: "Trống",
};

export const InputNameSlice = createSlice({
  name: "InputName",
  initialState,
  reducers: {
    changeInputName: (state, action) => {
      state.Active_state = action.payload;
    },
  },
});

export const { changeInputName } = InputNameSlice.actions;

export default InputNameSlice.reducer;