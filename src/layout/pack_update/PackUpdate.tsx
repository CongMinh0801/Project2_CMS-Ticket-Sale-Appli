import React, { useEffect, useState } from "react"
import { PackInfo } from "../pack_info/PackInfo"
import "./PackUpdate.css"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { showPackUpdate, changeUpdateState } from './PackUpdateSlice';
import { CollectionReference, DocumentData, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";


export const PackUpdate = () => {
    const [packId,setPackId] = useState("")
    const [packName,setPackName] = useState("")
    const [startDate,setStartDate] = useState("")
    const [endDate,setEndDate] = useState("")
    const [ticketPrice,setTicketPrice] = useState("")
    const [comboPrice,setComboPrice] = useState("")
    const [status,setStatus] = useState("")

    const CheckBoxPriceState = useSelector((state: RootState) => state.CheckBoxPrice.Active_state);
    useEffect(()=> {

    },[CheckBoxPriceState])

    const handleSavePackUpdate = (active:string) => {

        //Lý do mà các thẻ input này phải lấy thẻ thứ 2 trong nodelist là vì component PackAdd được gọi ra trước 
        //nên trong dom thì các thẻ input có cùng class của component PackAdd xuất hiện trước

        const packIdInput = document.getElementById("pack-id") as HTMLInputElement
        const packNameInput = document.getElementById("pack-name-input-update") as HTMLInputElement
        // const ticketPriceInput:NodeList = document.querySelectorAll("#price-single-input")
        // const comboPriceInput:NodeList  = document.querySelectorAll("#price-combo-input")
        // const comboCountInput:NodeList  = document.querySelectorAll("#price-combo-count-input")
        // const startusInput:NodeList  = document.querySelectorAll("#pack-status-input")
        const secondTicketPriceInput: string = (document.querySelectorAll("#price-single-input")[1] as HTMLInputElement).value;
        const secondComboPriceInput: string = (document.querySelectorAll("#price-combo-input")[1] as HTMLInputElement).value;
        const secondComboCountInput: string = (document.querySelectorAll("#price-combo-count-input")[1] as HTMLInputElement).value;
        const secondStartusInput: string = (document.querySelectorAll("#pack-status-input")[1] as HTMLInputElement).value;

        
        


        if (packIdInput instanceof HTMLInputElement) {
            setPackId(packIdInput.value);
        }
        if (packNameInput instanceof HTMLInputElement) {
            setPackName(packNameInput.value);
        }
        if ( CheckBoxPriceState == "1" || CheckBoxPriceState == "3") {
            setTicketPrice(secondTicketPriceInput + " VNĐ");
        }else {
            setTicketPrice("");
        }
        if ( CheckBoxPriceState == "2" || CheckBoxPriceState == "3") {
            setComboPrice(secondComboPriceInput + " VNĐ/" + secondComboCountInput + " vé");
        }else {
            setComboPrice("");
        }
        if (secondStartusInput) {
            setStatus(secondStartusInput);
        }
        dispatch(changeUpdateState("1"))
        dispatch(showPackUpdate(active));
    }

    const PackUpdateState = useSelector((state: RootState) => state.PackUpdate.Active_state);
    const updateState = useSelector((state: RootState) => state.PackUpdate.updateState);
    const idState = useSelector((state: RootState) => state.PackUpdate.updateId);
    // const statePackId = useSelector((state: RootState)=> state.PackUpdate.packId)
    // const statePackName = useSelector((state: RootState)=> state.PackUpdate.packName)

    useEffect(()=>{},[idState])
    // useEffect(()=>{},[statePackId])
    // useEffect(()=>{},[statePackName])
    
    useEffect(()=>{
        if(updateState == "1"){
            updateTicketPackItem(idState, packId, packName, startDate, endDate, ticketPrice, comboPrice, status)
        }
    },[updateState])

    const updateTicketPackItem = async (id:string, 
                                        packId:string, 
                                        packName:string, 
                                        startDate:string, 
                                        endDate:string, 
                                        ticketPrice:string, 
                                        comboPrice:string, 
                                        status:string) => {
    const listDoc = doc(db, "ticket-pack", id)
    const updateUseDate = {
        packId:packId,
        packName:packName,
        startDate:startDate,
        endDate:endDate,
        ticketPrice:ticketPrice,
        comboPrice:comboPrice,
        status:status, }
        await updateDoc(listDoc, updateUseDate)
    }

    const dispatch = useDispatch();
    const handleCancerPackUpdate = (active:string) => {
        dispatch(showPackUpdate(active));
    }

    return (
        <div className="pack-update-back" style={PackUpdateState == "hidden" ? {display:"none"} : {display:"block"}}>
            <div className="pack__update">
                <h2 className="pack__update-title">Cập nhật thông tin gói vé</h2>
                <div className="pack__update-info">
                    <div className="pack__update-info-item">
                        Mã gói vé <br />
                        {/* <input id="pack-id" type="text" value={statePackId} /> */}
                        <input id="pack-id" type="text"/>
                    </div>
                    <div className="pack__update-info-item">
                        Tên gói vé <br />
                        {/* <input id="pack-name-input-update" type="text" value={statePackName}/> */}
                        <input id="pack-name-input-update" type="text"/>
                    </div>
                </div>
                <PackInfo setStartDate={setStartDate} setEndDate={setEndDate}/>
                <div className="pack__update-btns">
                    <button onClick={()=>handleCancerPackUpdate("hidden")} className="pack__update-btns-cancel btn">Hủy</button>
                    <button onClick={()=>handleSavePackUpdate("hidden")} className="pack__update-btns-save primary-btn btn">Lưu</button>
                </div>
            </div>  
        </div>
    )
}