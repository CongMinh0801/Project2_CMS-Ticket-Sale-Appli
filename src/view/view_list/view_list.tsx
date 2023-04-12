import React, { useEffect, useState } from 'react';
import "./view_list.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircle, faCaretRight, faCaretLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import {ticketListData, ticketCheckData, ticketPackData, renderFunction} from "./interface"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store"
import { SelectedID, showChangeDate, TicketNumber, EventName } from '../../layout/change_date/ChangeDateSlice';
import { changeIdState, showPackUpdate } from '../../layout/pack_update/PackUpdateSlice';
import { db } from "../../firebase-config"
import { collection,getDocs,addDoc,updateDoc,doc, CollectionReference, DocumentData } from "firebase/firestore"
import { ChangeDate } from '../../layout/change_date/ChangeDate';
import { changeViewSearch } from '../view_search/ViewSearchSlice';
import { getListOfEventName } from '../view_ticket_filter/inputNameSlice';



export const ViewList = () => {
    const selected = useSelector((state: RootState) => state.menu.selected);
    
    const listCollectionRef: CollectionReference<DocumentData> = collection(db, "ticket-list");
    const checkCollectionRef: CollectionReference<DocumentData> = collection(db, "ticket-list");
    const packCollectionRef: CollectionReference<DocumentData> = collection(db, "ticket-pack");


    let preViewArray: CollectionReference<DocumentData>;
    if (selected === "List") {
        preViewArray = listCollectionRef;
    } else if (selected === "Check") {
        preViewArray = checkCollectionRef;
    } else {
        preViewArray = packCollectionRef;
    }
    // const createTicketListItem = async () => {
    //     await addDoc(preViewArray, {
    //         bookingCode:bookingCode,
    //         ticketNumber:ticketNumber,
    //         eventName:eventName,
    //         status:status,
    //         useDate:useDate,
    //         useCreate:useCreate,
    //         checkInGate:checkInGate,
    //         nullTitle:nullTitle })}


    const updateTicketListItem = async (id:string, useDate:string, status:string) => {
        const listDoc = doc(db, "ticket-list", id)
        const updateUseDate = { useDate: useDate, status:status }
        await updateDoc(listDoc, updateUseDate)
    }

    const checked = useSelector((state: RootState) => state.CheckBtn.Active_state);
    useEffect(() => {
        if(checked == "checked") {
            const nodeListTicket = document.querySelectorAll('.null_title');
            nodeListTicket.forEach((div) => {
                updateTicketCheckItem(div.id)
            });
        }
    }, [checked]);

    const updateTicketCheckItem = async (id:string) => {
        const listDoc = doc(db, "ticket-list", id)
        const updateNullTitle = { nullTitle: "Đã đối soát" }
        await updateDoc(listDoc, updateNullTitle)
    }

    

    
    const [list, setList] = useState<any[]>([]);
    const [newList, setNewList] = useState<any[]>([]);

    useEffect(() => {
        dispatch(changeViewSearch(""))
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

    
    const selectedID = useSelector((state: RootState) => state.ChangeDate.ID_item);
    const searchValue = useSelector((state: RootState) => state.ViewSearch.value);
    const [listOfEventName,setListOfEventName] = useState<string[]>([])
    useEffect(() => {
        const uniqueArr = listOfEventName.filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        let listOfEventName_string:string = uniqueArr.join("__");
        dispatch(getListOfEventName(listOfEventName_string))
    }, [listOfEventName]);
    useEffect(() => {
        if ((selected === "List" || selected === "Check")){
            setNewList(list.filter(data => data.ticketNumber.includes(searchValue)));
        } else if (selected === "Pack") {
            setNewList(list.filter(data => data.packId.includes(searchValue)));
        }
    }, [searchValue]);

    useEffect(() => {
        for (let i = 0; i < list.length; i++) {
            setListOfEventName(prevState => prevState.concat(list[i].eventName));
        }
        setNewList(list)
    }, [list]);


    const filterStartDayOfList = useSelector((state: RootState) => state.TicketFilter.startDay);
    const filterEndDayOfList = useSelector((state: RootState) => state.TicketFilter.endDay);
    const filterStatusOfList = useSelector((state: RootState) => state.TicketFilter.status);
    const filterCheckInGateOfList = useSelector((state: RootState) => state.TicketFilter.checkInGate);
    const listFilterOfList = [filterStartDayOfList, filterEndDayOfList, filterStatusOfList, filterCheckInGateOfList]
    const filterStartDayOfCheck = useSelector((state: RootState) => state.InputName.startDay);
    const filterEndDayOfCheck = useSelector((state: RootState) => state.InputName.endDay);
    const filterStatusOfCheck = useSelector((state: RootState) => state.InputName.status);
    const filterEventNameOfCheck = useSelector((state: RootState) => state.InputName.eventName);
    const listFilterOfCheck = [ filterEventNameOfCheck, filterStatusOfCheck, filterStartDayOfCheck, filterEndDayOfCheck]
    useEffect(() => {
        const isBetween = (date:string, start:string, end:string) => {
            const dateArr = date.split("/")
            const startArr = start.split("/")
            const endArr = end.split("/")
            const currentDate = new Date(`${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`);
            const startDate = new Date(`${startArr[2]}-${startArr[1]}-${startArr[0]}`);
            const endDate = new Date(`${endArr[2]}-${endArr[1]}-${endArr[0]}`);
            return currentDate >= startDate && currentDate <= endDate;
        };
        if (selected == "List") {
            if (listFilterOfList[0] !== "" && listFilterOfList[1] !== "" && listFilterOfList[2] !== "" ) {
                const filteredList = list.filter(data => (
                    listFilterOfList[3].includes(data.checkInGate) || listFilterOfList[3].includes("Tất cả")
                ) && (
                    filterStatusOfList === data.status || filterStatusOfList === "Tất cả"
                ) && isBetween(data.useDate, filterStartDayOfList, filterEndDayOfList));
        
                if (JSON.stringify(filteredList) !== JSON.stringify(newList)) {
                    setNewList(filteredList);
                }
            }
        } else if (selected == "Check"){
            if (listFilterOfCheck[0] !== "" && listFilterOfCheck[1] !== "" && listFilterOfCheck[2] !== "" ) {
                const filteredList = list.filter(data => (data.eventName == listFilterOfCheck[0])
                && (data.status == listFilterOfCheck[1] || listFilterOfCheck[1] == "Tất cả")
                && isBetween(data.useDate, filterStartDayOfCheck, filterEndDayOfCheck));
                if (JSON.stringify(filteredList) !== JSON.stringify(newList)) {
                    setNewList(filteredList);
                }
            }
        }
    }, [listFilterOfList, newList, listFilterOfCheck]);




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
    const handleChangeDate = (id:string, ticketNumber:string, eventName:string, active: string) => {
        dispatch(SelectedID(id)); 
        dispatch(TicketNumber(ticketNumber));
        dispatch(EventName(eventName));
        dispatch(showChangeDate(active));
    };

    function renderRowList(data:ticketListData,index:number, id:string) {
        count++;
        return (
            <div key={index} className={count%2==1?'view-list__row':'view-list__row even_row'}>
                <div className='stt'>{count}</div>
                <div className='booking_code'>{data.bookingCode}</div>
                <div className='ticket_number'>{data.ticketNumber}</div>
                <div className='event_name' style={{justifyContent:"left"}}>{data.eventName}</div>
                <div className={data.status=="Hết hạn"?"status turn_off":data.status=="Chưa sử dụng"?"status turn_on":"status used"}><span><FontAwesomeIcon className='status-icon' icon={faCircle} />{data.status}</span></div>
                <div className='use_date'>{data.useDate}</div>
                <div className='use_create'>{data.useCreate}</div>
                <div className='check_in_gate'>{data.checkInGate} 
                    <button className='changeUseDateBtn' onClick={() => 
                        handleChangeDate(id, data.ticketNumber, data.eventName,"show")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        )
    }

    function renderRowCheck(data:ticketCheckData,index:number, id:string){
        count++;
        return (
            <div key={index} className={count%2==1?'view-list__row':'view-list__row even_row'}>
                <div className='stt-2'>{count}</div>
                <div className='ticket_number-2'>{data.ticketNumber}</div>
                <div className='event_name-2' style={{justifyContent:"left"}}>{data.eventName}</div>
                <div className='use_date-2'>{data.useDate}</div>
                <div className='type_ticket'>{"Vé cổng"}</div>
                <div className='check_in_gate-2'>{data.checkInGate}</div>
                <div id={id} className={data.nullTitle=="Chưa đối soát"?"null_title":"null_title checked"}><i>{data.nullTitle}</i></div>
            </div>
        )
    }

    
    const handleShowPackUpdate = (
        active:string, id:string
        ) => {
        dispatch(showPackUpdate(active));
        dispatch(changeIdState(id))
        // dispatch(getInfoTicket({packId, packName, 
        //     startDate, endDate, ticketPrice, 
        //     comboPrice, status}))
    }
    function renderRowPack(data:ticketPackData,index:number, id:string){
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
                <div className={data.status=="Tắt"?"status turn_off":"status turn_on"}>
                    <span>
                        <FontAwesomeIcon className='status-icon' icon={faCircle} />
                         {data.status}
                    </span>
                </div>
                <button onClick={()=>handleShowPackUpdate("show", id)} 
                    className='null_title update_btn'>
                    <FontAwesomeIcon className='update-icon' icon={faPenToSquare} />
                    Cập nhật 
                </button>
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
                    (newList).map((data, index) => 
                    {
                        return renderRow(data,index,data.id)
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
            <ChangeDate updateTicketListItem = {updateTicketListItem}/>
        </div>
    )
}