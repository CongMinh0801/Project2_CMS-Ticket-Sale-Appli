import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  selected: string;
}

const initialState: MenuState = {
  selected: "Home",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectMenu: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { selectMenu } = menuSlice.actions;

export default menuSlice.reducer;