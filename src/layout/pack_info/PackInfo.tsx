import React, { useEffect, useState } from "react";
import "./PackInfo.css"
import { Calendar } from "react-feather"
import { useDispatch, useSelector } from "react-redux";
import { showCalendar } from "../calendar/CalendarSlice";
import { MyCalendar } from "../calendar/Calendar";
import { RootState } from "../../app/store";
import { changeInputName } from "../../view/view_ticket_filter/inputNameSlice";

export const PackInfo:React.FC = () => {
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


    const [CheckBoxValues, setCheckBoxValues] = useState<string[]>([]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (CheckBoxValues.includes(value)) {
            setCheckBoxValues(CheckBoxValues.filter((item) => item !== value));
        } else {
            setCheckBoxValues([...CheckBoxValues, value]);
        }
    };

    useEffect(()=>{
        
    },[CheckBoxValues])
    
    return (
        <div className="pack__info">
            <div className="pack__info-item">
                <div className="pack__info-item-date-start">
                    Ngày áp dụng<br />
                    <div>
                        <input disabled type="text" value={startDayActive} placeholder={startDayActive}/>
                        <button className='show-calendar-btn' onClick={()=>handleShowCalendar("show","start-input")}>
                            <Calendar className="pack__info-item-date-calendar-icon"/>
                        </button>
                        <input type="time" name="" id="" />
                    </div>
                </div>
                <div className="pack__info-item-date-end">
                    Ngày hết hạn<br />
                    <div>
                        <input disabled type="text" value={endDayActive} placeholder={endDayActive}/>
                        <button className='show-calendar-btn' onClick={()=>handleShowCalendar("show","end-input")}>
                            <Calendar className="pack__info-item-date-calendar-icon"/>
                        </button>
                        <input type="time" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="pack__info-item">
                Giá vé áp dụng
                <div className="pack__info-item-price-single">
                    <input className="pack__info-item-price-single-check" type="checkbox" name="checkbox-group" value="Vé lẻ" checked={CheckBoxValues.includes("Vé lẻ")} onChange={handleOnChange} />
                    Vé lẻ [VND/Vé] với giá <input className="pack__info-item-price-single-input" placeholder="Giá vé" type="text" /> / vé
                </div>
                <div className="pack__info-item-price-combo">
                    <input className="pack__info-item-price-combo-check" type="checkbox" name="checkbox-group" value="Combo" checked={CheckBoxValues.includes("Combo")} onChange={handleOnChange} />
                    Combo vé với giá <input className="pack__info-item-price-combo-input" placeholder="Giá vé" type="text" /> / <input className="pack__info-item-price-combo-count" placeholder="Số vé" type="text" /> vé
                </div>
            </div>
            <div className="pack__info-item">
                <div className="pack__info-item-state">
                    Tình trạng <br />
                    <select className="pack__info-item-state-select" name="" id="">
                        <option className="pack__info-item-state-select-item" value="">Đang áp dụng</option>
                        <option className="pack__info-item-state-select-item" value="">Tắt</option>
                    </select>
                    <p className="pack__info-item-state-message"><span>*</span>là thông tin bắt buộc</p>
                </div>
            </div>
        <MyCalendar setSelectedDay = {setSelectedDay}/>
        </div>
    )
}