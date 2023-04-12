import React, { useEffect, useState } from 'react';
import { Calendar, ChevronDown } from 'react-feather';
import "./view_ticket_filter.css";
import { useDispatch, useSelector} from 'react-redux';
import { showCalendar } from '../../layout/calendar/CalendarSlice';
import { MyCalendar } from '../../layout/calendar/Calendar';
import { changeInputName, getCheckFilter } from './inputNameSlice';
import { RootState } from '../../app/store';


export const ViewTicketFilter = () => {
    const dispatch = useDispatch();

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
        if (inputName === "start-input") {
          setStartDayActive(selectedDay);
        } else if (inputName === "end-input") {
          setEndDayActive(selectedDay);
        } else {
          setUseDayActive(selectedDay);
        }
    }, [selectedDay]);
    

    const [selectedRadioOption, setSelectedRadioOption] = useState('');
    const handleOptionRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadioOption(event.target.value);
    };
    useEffect(() => {
        
    }, [selectedRadioOption]);

    const events = useSelector((state: RootState) => state.InputName.listOfEventName);
    const listOfEventNames = events.split("__")
    useEffect(() => {
        
    }, [listOfEventNames]);


    const handleFilter = () => {
        const eventName = (document.getElementById("event-name-selected") as HTMLSelectElement).value;
        dispatch(getCheckFilter({eventName, selectedRadioOption, startDayActive, endDayActive}))
    }

    return (
        <div className='view_ticket_filter'>
            <h2 className='view_ticket_filter__title'>Lọc vé</h2>
            <div className='view_ticket_filter__event'>
                <select id="event-name-selected" className='view_ticket_filter__event-select' name="">
                    {(listOfEventNames).map((data) => <option className='view_ticket_filter__event-option' value={data}>{data}</option>)}
                </select>
                <ChevronDown className='view_ticket_filter__event-icon'/>
            </div>
            <div className='view_ticket_filter__status'>
                Tình trạng đối soát
                <div className='view_ticket_filter__status-list'>
                    <div><input type="radio" name="radio-group" value="Tất cả" checked={selectedRadioOption === "Tất cả"} onChange={handleOptionRadioChange} />Tất cả</div>
                    <div><input type="radio" name="radio-group" value="Đã đối soát" checked={selectedRadioOption === "Đã đối soát"} onChange={handleOptionRadioChange} />Đã đối soát</div>
                    <div><input type="radio" name="radio-group" value="Chưa đối soát" checked={selectedRadioOption === "Chưa đối soát"} onChange={handleOptionRadioChange} />Chưa đối soát</div>
                </div>
            </div>
            <div className='view_ticket_filter__types'>
                Loại vé
                <span>Vé cổng</span>
            </div>
            <div className='view_ticket_filter__date_start'>
                Từ ngày
                <div>
                    <input disabled type="text" value={startDayActive} placeholder={startDayActive}/>
                    <button className='show-calendar-btn' onClick={()=>handleShowCalendar("show","start-input")}>
                        <Calendar className='view_ticket_filter__date-icon'/>    
                    </button>
                </div>
            </div>
            <div className='view_ticket_filter__date_end'>
                Đến ngày
                <div>
                    <input disabled type="text" value={endDayActive} placeholder={endDayActive}/>
                    <button className='show-calendar-btn' onClick={()=>handleShowCalendar("show","end-input")}>
                        <Calendar className='view_ticket_filter__date-icon'/>   
                    </button>
                </div>
            </div>
            <div className='view_ticket_filter__btn-block'>
                <button className='view_ticket_filter__btn btn' onClick={()=>handleFilter()} >Lọc</button>
            </div>
            <MyCalendar setSelectedDay = {setSelectedDay}/>
        </div>
        
    )
}