import React, { useEffect, useState } from "react"
import { PackInfo } from "../pack_info/PackInfo"
import "../pack_update/PackUpdate.css"
import "./PackAdd.css"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { changeAddState, showPackAdd } from './PackAddSlice';
import { CollectionReference, DocumentData, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

export const PackAdd:React.FC = () => {
    const CheckBoxPriceState = useSelector((state: RootState) => state.CheckBoxPrice.Active_state);
    
    useEffect(()=>{
        
    },[CheckBoxPriceState])
    const [packId,setPackId] = useState<string>("")
    const [packName,setPackName] = useState<string>("")
    const [startDate,setStartDate] = useState<string>("")
    const [endDate,setEndDate] = useState<string>("")
    const [ticketPrice,setTicketPrice] = useState<string>("")
    const [comboPrice,setComboPrice] = useState<string>("")
    const [status,setStatus] = useState<string>("")

    const PackAddState = useSelector((state: RootState) => state.PackAdd.Active_state);

    const dispatch = useDispatch();
    const handleCancerPackAdd = (active:string) => {
        dispatch(showPackAdd(active));
    }
    const handleSavePackAdd = (active:string) => {
        const packNameInput = document.getElementById("pack-name");
        const ticketPriceInput = document.getElementById("price-single-input");
        const comboPriceInput = document.getElementById("price-combo-input");
        const comboCountInput = document.getElementById("price-combo-count-input");
        const startusInput = document.getElementById("pack-statust-input") as HTMLSelectElement;
        if (packNameInput instanceof HTMLInputElement) {
            setPackName(packNameInput.value);
        }
        if (ticketPriceInput instanceof HTMLInputElement && ( CheckBoxPriceState == "1" || CheckBoxPriceState == "3")) {
            setTicketPrice(ticketPriceInput.value + " VNĐ");
        }else {
            setTicketPrice("");
        }
        if (comboPriceInput instanceof HTMLInputElement && comboCountInput instanceof HTMLInputElement && ( CheckBoxPriceState == "2" || CheckBoxPriceState == "3") ) {
            setComboPrice(comboPriceInput.value + " VNĐ/" + comboCountInput.value + " vé");
        }else {
            setComboPrice("");
        }
        if (startusInput) {
            setStatus(startusInput.value);
        }
        dispatch(changeAddState("1"))
        dispatch(showPackAdd(active));
    }

    const addState = useSelector((state: RootState) => state.PackAdd.add_state);
    useEffect(()=>{
        if(addState == "1"){
            createTicketPackItem()
            
        }
    },[addState])

    const packCollectionRef: CollectionReference<DocumentData> = collection(db, "ticket-pack");
    const createTicketPackItem = async () => {
        await addDoc(packCollectionRef, {
            packId:packId,
            packName:packName,
            startDate:startDate,
            endDate:endDate,
            ticketPrice:ticketPrice,
            comboPrice:comboPrice,
            status:status,
        })
    } 
    return (
        <div className="pack-add-back" style={PackAddState === "show" ? {display:"block"} : {display:"none"}}>
            <div className="pack__update">
                <h2 className="pack__update-title">Thêm gói vé</h2>
                <div className="pack__update-info">
                    <div className="pack__update-info-item">
                        Tên gói vé <br />
                        <input id="pack-name" style={{width:"368px"}} placeholder="Nhập tên gói vé" type="text" />
                    </div>
                </div>
                <PackInfo setStartDate={setStartDate} setEndDate={setEndDate} />
                <div className="pack__update-btns">
                    <button onClick={()=>handleCancerPackAdd("hidden")} className="pack__update-btns-cancel btn">Hủy</button>
                    <button onClick={()=>handleSavePackAdd("hidden")} className="pack__update-btns-save primary-btn btn">Lưu</button>
                </div>
            </div>
        </div>
    )
}

