import { createSlice } from "@reduxjs/toolkit";

interface PackUpdateState {
  Active_state: string,
  updateState:string,
  updateId:string;
  packId:string;
  packName:string;
  startDate:string;
  endDate:string;
  ticketPrice:string;
  comboPrice:string;
  status:string
}

const initialState: PackUpdateState = {
  Active_state: "hidden",
  updateState:"0",
  updateId:"",
  packId:"",
  packName:"",
  startDate:"",
  endDate:"",
  ticketPrice:"",
  comboPrice:"",
  status:"",
};

export const PackUpdateSlice = createSlice({
  name: "PackUpdate",
  initialState,
  reducers: {
    showPackUpdate: (state, action) => {
      state.Active_state = action.payload;
    },
    changeUpdateState:(state, action) => {
      state.updateState = action.payload;
    },
    changeIdState:(state, action) => {
      state.updateId = action.payload;
    },
    // getInfoTicket:(state, action) => {
    //   const { packId, packName, startDate, endDate, ticketPrice, comboPrice, status } = action.payload;
    //   state.packId = packId;
    //   state.packName = packName;
    //   state.startDate = startDate;
    //   state.endDate = endDate;
    //   state.ticketPrice = ticketPrice;
    //   state.comboPrice = comboPrice;
    //   state.status = status;
    // },
  },
});

export const { showPackUpdate, changeUpdateState, changeIdState } = PackUpdateSlice.actions;

export default PackUpdateSlice.reducer;