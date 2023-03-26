import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from "./layout/menu/Menu";
import {Header} from "./layout/header/Header";
import { PackUpdate } from './layout/pack_update/PackUpdate';
import { PackAdd } from './layout/pack_add/PackAdd';
import { TicketFilter } from './layout/ticket_filter/TicketFilter';
import { ChangeDate } from './layout/change_date/ChangeDate';
import { ViewSearchBtn } from './view/view_search/view_search_btn/view_search_btn';
import { ViewSearch } from './view/view_search/view_search';
import { ViewTicketFilter } from './view/view_ticket_filter/view_ticket_filter';
import { ViewList } from './view/view_list/view_list';
import { ListPage } from './pages/list_page/ListPage';
import { ListPageProps } from './pages/list_page/ListPage';



function App() {
  
  return (
    <div className="App" style={{display:"flex", minHeight:"100vh", backgroundColor: "#F9F6F4"}}>
      <ListPage typeOfPage="ticket check"/>
    </div>
  )
}

export default App;
