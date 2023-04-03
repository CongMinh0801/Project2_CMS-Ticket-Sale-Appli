import './App.css';
import { PackUpdate } from './layout/pack_update/PackUpdate';
import { PackAdd } from './layout/pack_add/PackAdd';
import { TicketFilter } from './layout/ticket_filter/TicketFilter';
import { ChangeDate } from './layout/change_date/ChangeDate';
import { ListPage } from './pages/list_page/ListPage';
import { useState } from 'react';
import { MyCalendar } from './layout/calendar/Calendar';



function App() {

  
  return (
    <div className="App" style={{display:"flex", minHeight:"100vh", backgroundColor: "#F9F6F4"}}>
      <ListPage />
      <ChangeDate/>
      <TicketFilter/>
      <PackAdd/>
      <PackUpdate/>
    </div>
  )
}

export default App;
