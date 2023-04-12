import { createSlice } from "@reduxjs/toolkit";

interface ViewSearchState {
  value: string;
}

const initialState: ViewSearchState = {
  value: "Trống",
};

export const ViewSearchSlice = createSlice({
  name: "ViewSearch",
  initialState,
  reducers: {
    changeViewSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeViewSearch } = ViewSearchSlice.actions;

export default ViewSearchSlice.reducer;