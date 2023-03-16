import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from "./layout/menu/Menu";
import {Header} from "./layout/header/Header";
import { PackUpdate } from './layout/pack__update/PackUpdate';
import { PackAdd } from './layout/pack__add/PackAdd';




function App() {
  return (
    <div className="App" style={{display:"flex", minHeight:"100vh"}}>
      {/* <Menu />
      <div style={{width:"81.5%"}}>
        <Header />
      </div> */}

      {/* <PackUpdate/> */}
      <PackAdd />
    </div>
  )
}

export default App;
