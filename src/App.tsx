import './App.css';
import { PackUpdate } from './layout/pack_update/PackUpdate';
import { PackAdd } from './layout/pack_add/PackAdd';
import { TicketFilter } from './layout/ticket_filter/TicketFilter';
import { ListPage } from './pages/list_page/ListPage';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase-config';



function App() {
  const updateTicketListItem = async (id:string, useDate:string) => {
    const listDoc = doc(db, "ticket-list", id)
    const updateUseDate = { useDate: useDate }
    await updateDoc(listDoc, updateUseDate)
  }


  return (
    <div className="App" style={{display:"flex", minHeight:"100vh", backgroundColor: "#F9F6F4"}}>
      <ListPage />
      <TicketFilter/>

      {/* packadd được gọi ra trước để phù hợp với logic code trong xử lí của packadd và packupdate */}
      <PackAdd/>
      <PackUpdate/>
    </div>
  )
}

export default App;
