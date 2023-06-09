import React, { useEffect, useState } from 'react';
import "./ChangeDate.css"
import {Calendar} from "react-feather"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { showChangeDate } from './ChangeDateSlice';
import { showCalendar } from '../calendar/CalendarSlice';
import { MyCalendar } from '../calendar/Calendar';
import { changeInputName } from '../../view/view_ticket_filter/inputNameSlice';

interface ChangeDateProps {
    updateTicketListItem: (id: string, useDate: string, status:string) => Promise<void>
}

export const ChangeDate = ({updateTicketListItem}:ChangeDateProps) => {
    const ChangeDateState = useSelector((state: RootState) => state.ChangeDate.Active_state);
    const selectedID = useSelector((state: RootState) => state.ChangeDate.ID_item);
    const ticketNumber = useSelector((state: RootState) => state.ChangeDate.TicketNumber);
    const eventName = useSelector((state: RootState) => state.ChangeDate.EventName);
    const dispatch = useDispatch();
    const handleCancer = (active:string) => {
        dispatch(showChangeDate(active));
    }
    const handleSave = (active:string) => {
        dispatch(showChangeDate(active));
        const today = new Date();
        const todayArray = today.toISOString().slice(0, 10).split("-");
        const useDayArray = useDayActive.split("/")
        if ((parseInt(useDayArray[2]) > parseInt(todayArray[0])) 
        || ( parseInt(useDayArray[2]) == parseInt(todayArray[0]) && parseInt(useDayArray[1]) > parseInt(todayArray[1]))
        || ( parseInt(useDayArray[2]) == parseInt(todayArray[0]) && parseInt(useDayArray[1]) == parseInt(todayArray[1]) && parseInt(useDayArray[0]) > parseInt(todayArray[2]))) 
        {
            updateTicketListItem(selectedID, useDayActive, "Chưa sử dụng")
        } else {
            updateTicketListItem(selectedID, useDayActive, "Hết hạn")
        }
        
    }

    const handleShowCalendar = (active:string, input:string) => {
        dispatch(showCalendar(active));
        dispatch(changeInputName(input));
    }

    const inputName = useSelector((state: RootState) => state.InputName.Active_state);
    const [selectedDay,setSelectedDay] = useState<string>("dd/mm/yyyy")
    const [startDayActive,setStartDayActive] = useState<string>("dd/mm/yyyy")
    const [endDayActive,setEndDayActive] = useState<string>("dd/mm/yyyy")
    const [useDayActive,setUseDayActive] = useState<string>("dd/mm/yyyy")
    useEffect(() => {
        
    }, [selectedDay]);

    useEffect(() => {
        
    }, [startDayActive]);
    useEffect(() => {
        
    }, [endDayActive]);
    useEffect(() => {
        
    }, [useDayActive]);
    useEffect(() => {
        
    }, [ticketNumber]);
    useEffect(() => {
        
    }, [eventName]);

    useEffect(() => {
        if (inputName === "start-input") {
          setStartDayActive(selectedDay);
        } else if (inputName === "end-input") {
          setEndDayActive(selectedDay);
        } else {
          setUseDayActive(selectedDay);
        }
    }, [selectedDay]);

    return (
        <div className='change-date-back' style={ChangeDateState == "hidden" ? {display:"none"} : {display:"block"}}>
            <div className='change-date'>
                <h2 className='change-date__title'></h2>
                <div className='change-date__ticket-id'>
                    <span>Số vé</span>
                    <label className='change-date__ticket-id-name' htmlFor="">{ticketNumber}</label>
                </div>
                <div className='change-date__ticket-type'>
                    <span>Số vé</span>
                    <label className='change-date__ticket-type-name' htmlFor="">Vé cổng - Vé sự kiện</label>
                </div>
                <div className='change-date__event'>
                    <span>Tên sự kiện</span>
                    <label className='change-date__event-name' htmlFor="">{eventName}</label>
                </div>
                <div className='change-date__expiry'>
                    <span>Hạn sử dụng</span>
                    <input disabled type="text" value={useDayActive} placeholder={useDayActive}/>
                    <button onClick={() => handleShowCalendar("show","use-input")}><Calendar className='change-date__expiry-icon'/></button>
                </div>
                <div className='change-date__btn'>
                    <button onClick={() => handleCancer("hidden") } className='change-date__btn-cancel btn'>Hủy</button>
                    <button onClick={() => handleSave("hidden") } className='change-date__btn-save btn primary-btn'>Lưu</button>
                </div>
            </div>
        <MyCalendar setSelectedDay = {setSelectedDay}/>
        </div>
    )
}