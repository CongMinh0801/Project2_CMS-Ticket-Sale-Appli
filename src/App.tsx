import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from "./layout/menu/Menu";
import {Header} from "./layout/header/Header";
import { PackUpdate } from './layout/pack__update/PackUpdate';
import { PackAdd } from './layout/pack__add/PackAdd';
import { TicketFilter } from './layout/ticket_filter/TicketFilter';
import { ChangeDate } from './layout/change_date/ChangeDate';




function App() {
  return (
    <div className="App" style={{display:"flex", minHeight:"100vh"}}>
      <ChangeDate/>
    </div>
  )
}

export default App;
