import React, { useEffect, useState } from 'react';
import { Calendar, ChevronDown } from 'react-feather';
import "./view_ticket_filter.css";
import { useDispatch, useSelector } from 'react-redux';
import { showCalendar } from '../../layout/calendar/CalendarSlice';
import { RootState } from '../../app/store';
import { MyCalendar } from '../../layout/calendar/Calendar';

interface ViewTicketFilterProps {
    thisDisplay:string
}

export const ViewTicketFilter = () => {
    const CalendarState = useSelector((state: RootState) => state.Calendar.Active_state);
    const StartDay = useSelector((state: RootState) => state.StartDay.start_day);
    const EndDay = useSelector((state: RootState) => state.EndDay.end_day);
    const dispatch = useDispatch();
    const [inputName, setInputName] = useState<string>("")
    useEffect(() => {
        
    }, [inputName]);
    const handleShowCalendar = (active:string, dateString:string) => {
        dispatch(showCalendar(active));
        setInputName(dateString=="start"?"start-input":"end-input")
    }

    console.log(StartDay)

    const [selectedRadioOption, setSelectedRadioOption] = useState('');
    const handleOptionRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadioOption(event.target.value);
    };
    useEffect(() => {
        console.log(selectedRadioOption)
    }, [selectedRadioOption]);

    return (
        <div className='view_ticket_filter'>
            <h2 className='view_ticket_filter__title'>Lọc vé</h2>
            <div className='view_ticket_filter__event'>
                <select className='view_ticket_filter__event-select' name="" id="">
                    <option className='view_ticket_filter__event-option' value="">
                        Hội chợ triển lãm tiêu dùng
                    </option>
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
                    <input type="text" placeholder={StartDay}/>
                    <button className='show-calendar-btn' onClick={()=>handleShowCalendar("show","start")}>
                        <Calendar className='view_ticket_filter__date-icon'/>    
                    </button>
                </div>
            </div>
            <div className='view_ticket_filter__date_end'>
                Đến ngày
                <div>
                    <input type="text" placeholder={EndDay}/>
                    <button className='show-calendar-btn' onClick={()=>handleShowCalendar("show","end")}>
                        <Calendar className='view_ticket_filter__date-icon'/>   
                    </button>
                </div>
            </div>
            <div className='view_ticket_filter__btn-block'>
                <button className='view_ticket_filter__btn btn'>Lọc</button>
            </div>
        <MyCalendar inputName={inputName}/>
        </div>
        
    )
}