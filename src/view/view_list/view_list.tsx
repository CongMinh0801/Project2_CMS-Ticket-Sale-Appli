import React, { useEffect, useState } from 'react';
import "./view_list.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircle, faCaretRight, faCaretLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import {ticketListData, ticketCheckData, ticketPackData, renderFunction} from "./interface"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store"
import { showChangeDate } from '../../layout/change_date/ChangeDateSlice';
import { showPackUpdate } from '../../layout/pack_update/PackUpdateSlice';
import { db } from "../../firebase-config"
import { collection,getDocs,addDoc,updateDoc,deleteDoc,doc, CollectionReference, DocumentData } from "firebase/firestore"



export const ViewList = () => {
    const selected = useSelector((state: RootState) => state.menu.selected);
    const [list, setList] = React.useState<{ id: string }[]>([]);
    
    const listCollectionRef: CollectionReference<DocumentData> = collection(db, "ticket-list");
    const packCollectionRef: CollectionReference<DocumentData> = collection(db, "ticket-pack");

    console.log("Aaaaaâ")
    console.log(listCollectionRef)

    let preViewArray: CollectionReference<DocumentData>;
    if (selected === "List") {
        preViewArray = listCollectionRef;
    } else if (selected === "Check") {
        preViewArray = listCollectionRef;
    } else {
        preViewArray = packCollectionRef;
    }

    const [bookingCode,setBookingCode] = useState("") 
    const [ticketNumber,setTicketNumber] = useState("") 
    const [eventName,setEventName] = useState("")
    const [status,setStatus] = useState("") 
    const [useDate,setUseDate] = useState("") 
    const [useCreate,setUseCreate] = useState("") 
    const [checkInGate,setCheckInGate] = useState("")
    const [packId,setPackId] = useState("")
    const [packName,setPackName] = useState("")
    const [startDate,setStartDate] = useState("")
    const [endDate,setEndDate] = useState("")
    const [ticketPrice,setTicketPrice] = useState("")
    const [comboPrice,setComboPrice] = useState("")
    const [nullTitle,setNullTitle] = useState("")


    

    const createTicketListItem = async () => {
        await addDoc(preViewArray, {
            bookingCode:bookingCode,
            ticketNumber:ticketNumber,
            eventName:eventName,
            status:status,
            useDate:useDate,
            useCreate:useCreate,
            checkInGate:checkInGate,
            nullTitle:nullTitle })}


    const createTicketPackItem = async () => {
        await addDoc(preViewArray, {
            packId:packId,
            packName:packName,
            startDate:startDate,
            endDate:endDate,
            ticketPrice:ticketPrice,
            comboPrice:comboPrice,
            status:status,
        })
    } 

    const updateTicketListItem = async (id:string, useDate:string) => {
        const listDoc = doc(db, "ticket-list", id)
        const updateUseDate = { useDate: useDate }
        await updateDoc(listDoc, updateUseDate)
    }

    const updateTicketCheckItem = async (id:string) => {
        const listDoc = doc(db, "ticket-list", id)
        const updateNullTitle = { nullTitle: "Đã đối soát" }
        await updateDoc(listDoc, updateNullTitle)
    }

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

    useEffect(() => {
        const getListTicket = async () => {
            const data = await getDocs(preViewArray);
            if (selected === "List") {
                setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } else if (selected === "Check") {
                setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } else {
                setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            }
        };
    
        getListTicket();
    }, [selected]);

    const ticketListTitles: Array<{title:string, class:string}> = 
    [
        {title:"STT",class:"stt"}
        ,{title:"Booking Code",class:"booking_code"}
        ,{title:"Số vé",class:"ticket_number"}
        ,{title:"Tên sự kiện",class:"event_name"}
        ,{title:"Tình trạng sử dụng",class:"status"}
        ,{title:"Ngày sử dụng",class:"use_date"}
        ,{title:"Ngày xuất vé",class:"use_create"}
        ,{title:"Cổng check_in",class:"check_in_gate"}
    ]
    const ticketCheckTitles: Array<{title:string, class:string}> = [
        {title:"STT",class:"stt-2"}
        ,{title:"Số vé",class:"ticket_number-2"}
        ,{title:"Tên sự kiện",class:"event_name-2"}
        ,{title:"Ngày sử dụng",class:"use_date-2"}
        ,{title:"Tên loại vé",class:"type_ticket"}
        ,{title:"Cổng check_in",class:"check_in_gate-2"}
        ,{title:" ",class:"null_title"}
    ]
    const ticketPackTitles: Array<{title:string, class:string}> = [
        {title:"STT",class:"stt"}
        ,{title:"Mã gói",class:"pack_id"}
        ,{title:"Tên gói vé",class:"pack_name"}
        ,{title:"Ngày áp dụng",class:"start_date"}
        ,{title:" Ngày hết hạn",class:"end_date"}
        ,{title:"Giá vé [VND/vé]",class:"ticket_price"}
        ,{title:"Giá combo [VND/combo]",class:"combo_price"}
        ,{title:"Tình trạng",class:"status"}
        ,{title:" ",class:"null_title"}
    ]


    let count:number = 0;
    const dispatch = useDispatch();
    const handleChangeDate = (active: string) => {
        dispatch(showChangeDate(active));
    };

    function renderRowList(data:ticketListData,index:number) {
        count++;
        return (
            <div key={index} className={count%2==1?'view-list__row':'view-list__row even_row'}>
                <div className='stt'>{count}</div>
                <div className='booking_code'>{data.bookingCode}</div>
                <div className='ticket_number'>{data.ticketNumber}</div>
                <div className='event_name'>{data.eventName}</div>
                <div className={data.status=="Hết hạn"?"status turn_off":data.status=="Chưa sử dụng"?"status turn_on":"status used"}><span><FontAwesomeIcon className='status-icon' icon={faCircle} />{data.status}</span></div>
                <div className='use_date'>{data.useDate}</div>
                <div className='use_create'>{data.useCreate}</div>
                <div className='check_in_gate'>{data.checkInGate} <button className='changeUseDateBtn' onClick={() => handleChangeDate("show")}><FontAwesomeIcon icon={faEllipsisVertical} /></button></div>
            </div>
        )
    }

    function renderRowCheck(data:ticketCheckData,index:number){
        count++;
        return (
            <div key={index} className={count%2==1?'view-list__row':'view-list__row even_row'}>
                <div className='stt-2'>{count}</div>
                <div className='ticket_number-2'>{data.ticketNumber}</div>
                <div className='event_name-2'>{data.eventName}</div>
                <div className='use_date-2'>{data.useDate}</div>
                <div className='type_ticket'>{"Vé cổng"}</div>
                <div className='check_in_gate-2'>{data.checkInGate}</div>
                <div className={data.nullTitle=="Chưa đối soát"?"null_title":"null_title checked"}><i>{data.nullTitle}</i></div>
            </div>
        )
    }

    const handleShowPackUpdate = (active:string) => {
        dispatch(showPackUpdate(active));
    }
    function renderRowPack(data:ticketPackData,index:number){
        count++;
        return (
            <div key={index} className={count%2==1?'view-list__row':'view-list__row even_row'}>
                <div className='stt'>{count}</div>
                <div className='pack_id'>{data.packId}</div>
                <div className='pack_name'>{data.packName}</div>
                <div className='start_date'>{data.startDate}</div>
                <div className='end_date'>{data.endDate}</div>
                <div className='ticket_price'>{data.ticketPrice}</div>
                <div className='combo_price'>{data.comboPrice}</div>
                <div className={data.status=="Tắt"?"status turn_off":"status turn_on"}><span><FontAwesomeIcon className='status-icon' icon={faCircle} /> {data.status}</span></div>
                <button onClick={()=>handleShowPackUpdate("show")} className='null_title update_btn'><FontAwesomeIcon className='update-icon' icon={faPenToSquare} />Cập nhật </button>
            </div>
        )
    }

    let renderRow: renderFunction;
    let preView: Array<{title:string, class:string}>
    const page_view:string = selected
    if(page_view == "List"){
        preView = ticketListTitles
        renderRow = renderRowList
    }
    else if(page_view == "Check"){
        preView = ticketCheckTitles
        renderRow = renderRowCheck
    }
    else {
        preView = ticketPackTitles
        renderRow = renderRowPack
    }


    return (
        <div className='view-list'>
            <div className='view-list__container'>
                <div className='view-list__titles'>
                    {
                        preView.map(item => <div className={item.class}>{item.title}</div>)
                    }
                </div>
                {
                    (list).map((data, index) => 
                    {
                        return renderRow(data,index)
                    })
                }
            </div>
            <div className='view-list__footer'>
                <FontAwesomeIcon className='view-list__footer-caret' icon={faCaretLeft} />
                <span className='view-list__footer-item list-pre'>1</span>
                <span className='view-list__footer-item'>2</span>
                <span className='view-list__footer-item'>3</span>
                <span className='view-list__footer-item'>...</span>
                <span className='view-list__footer-item'>20</span>
                <FontAwesomeIcon className='view-list__footer-caret caret-active' icon={faCaretRight} />
            </div>
        </div>
    )
}