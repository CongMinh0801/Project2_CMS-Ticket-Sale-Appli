import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../layout/menu/MenuSlice";
import ChangeDateReducer from "../layout/change_date/ChangeDateSlice";
import TicketFilterReducer from "../layout/ticket_filter/TicketFilterSlice";
import PackAddReducer from "../layout/pack_add/PackAddSlice";
import PackUpdateReducer from "../layout/pack_update/PackUpdateSlice";
import CalendarReducer from '../layout/calendar/CalendarSlice';
import InputNameReducer from "../view/view_ticket_filter/inputNameSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    ChangeDate: ChangeDateReducer,
    TicketFilter: TicketFilterReducer,
    PackAdd: PackAddReducer,
    PackUpdate: PackUpdateReducer,
    Calendar:CalendarReducer,
    InputName: InputNameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;