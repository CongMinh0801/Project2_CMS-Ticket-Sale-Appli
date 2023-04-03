import React, { useEffect, useState } from "react"
import "./Calendar.css"
import {ChevronLeft, ChevronRight, X} from "react-feather"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { showCalendar } from "./CalendarSlice";
import { setStartDay } from "./StartDaySlice";
import { setEndDay } from "./EndDaySlice";
import { setUseDay } from "./UseDaySlice";


interface MyCalendarProps {
    inputName:string
}

export const MyCalendar = ({inputName}:MyCalendarProps) => {
    const CalendarState = useSelector((state: RootState) => state.Calendar.Active_state);
    const StartDay = useSelector((state: RootState) => state.StartDay.start_day);
    const dispatch = useDispatch();
    const handleShowCalendar = (active:string) => {
        dispatch(showCalendar(active));
    }
    const handleClickDate = (date:string) => {
        if (inputName == "start-input") {
            dispatch(setStartDay(date))
        } else if (inputName == "end-input"){
            dispatch(setEndDay(date))
        } else {
            dispatch(setUseDay(date))
        }
    }



    const [date, setDate] = useState(new Date());
    const [currYear, setCurrYear] = useState<number>(date.getFullYear());
    const [currMonth, setCurrMonth] = useState<number>(date.getMonth());
    const months: string[] = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7",
              "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

    const [days, setDays] = useState<JSX.Element[]>([])
    const renderCalendar = ()=> {
        let firstDayofMonth: number = new Date(currYear, currMonth, 1).getDay();
        let lastDateofMonth: number = new Date(currYear, currMonth + 1, 0).getDate();
        let lastDayofMonth: number = new Date(currYear, currMonth, lastDateofMonth).getDay();
        let lastDateofLastMonth: number = new Date(currYear, currMonth, 0).getDate();
        const items: JSX.Element[] = [];

        for (let i = firstDayofMonth -1; i > 0; i--) {
            items.push(
                <button onClick={()=>handleClickDate(`${lastDateofLastMonth - i + 1}/${currMonth}/${currYear}`)}>
                    <li className="not-this-month">{lastDateofLastMonth - i + 1}</li>
                </button>);
        }
        for (let i = 1; i <= lastDateofMonth; i++) {
            items.push(
                <button onClick={()=>handleClickDate(`${i}/${currMonth}/${currYear}`)}>
                    <li className="this-month">{i}</li>
                </button>);
        }
        for (let i = lastDayofMonth ; i < 6; i++) {
            items.push(
                <button onClick={()=>handleClickDate(`${i - lastDayofMonth + 1}/${currMonth}/${currYear}`)}>
                    <li className="not-this-month">{i - lastDayofMonth + 1}</li>
                </button>);
        }
        setDays(items)
    };


    useEffect(() => {
        renderCalendar();
    }, [currMonth, currYear]);

    const handleMonth = (props: string): void => {
        let newCurrMonth: number = props === "prev" ? currMonth - 1 : currMonth + 1;
        if (newCurrMonth < 0 || newCurrMonth > 11) {
            let newDate: Date = new Date(currYear, newCurrMonth, new Date().getDate());
            setCurrYear(newDate.getFullYear());
            setCurrMonth(newDate.getMonth());
            setDate(newDate);
        } else {
            setCurrMonth(newCurrMonth);
            setDate(new Date());
        }
        
        renderCalendar()
    };
    
    return (<div className="wrapper-back" style={CalendarState === "hidden" ? {display:"none"} : {display:"block"}}>
            <div className="wrapper">
            <div className="calender-header">
                <div>
                <button onClick={() => handleMonth("prev")} id="prev" ><ChevronLeft/></button>
                <p className="current-date">{`${months[currMonth]} năm ${currYear}`}</p>
                <button onClick={() => handleMonth("next")} id="next" ><ChevronRight/></button>
                </div>
                <div className="calender-header-exit">
                    <button onClick={() => handleShowCalendar("hidden")}><X/></button>
                </div>
            </div>
            <div className="select">
                <div className="select-item">
                    <input type="radio" name="" id="" />
                    Theo ngày
                </div>
                <div className="select-item">
                    <input type="radio" name="" id="" />
                    Theo tuần
                </div>
            </div>
            <div className="calendar">
                <ul className="weeks">
                <li>T2</li>
                <li>T3</li>
                <li>T4</li>
                <li>T5</li>
                <li>T6</li>
                <li>T7</li>
                <li>CN</li>
                </ul>
                <ul className="days">{days}</ul>
            </div>
            </div>
        </div>
    )
}