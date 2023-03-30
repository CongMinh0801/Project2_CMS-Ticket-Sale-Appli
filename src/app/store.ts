import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../layout/menu/MenuSlice";
import ChangeDateReducer from "../layout/change_date/ChangeDateSlice";
import TicketFilterReducer from "../layout/ticket_filter/TicketFilterSlice";
import PackAddReducer from "../layout/pack_add/PackAddSlice";
import PackUpdateReducer from "../layout/pack_update/PackUpdateSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    ChangeDate: ChangeDateReducer,
    TicketFilter: TicketFilterReducer,
    PackAdd: PackAddReducer,
    PackUpdate: PackUpdateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;