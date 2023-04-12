import React, { useEffect, useState } from "react";
import "./PackInfo.css"
import { Calendar } from "react-feather"
import { useDispatch, useSelector } from "react-redux";
import { showCalendar } from "../calendar/CalendarSlice";
import { MyCalendar } from "../calendar/Calendar";
import { RootState } from "../../app/store";
import { changeInputName } from "../../view/view_ticket_filter/inputNameSlice";
import { showCheckBoxPrice } from "./CheckBoxSlice";


interface PackInfoProps {
    setStartDate:React.Dispatch<React.SetStateAction<string>>,
    setEndDate:React.Dispatch<React.SetStateAction<string>>
}

export const PackInfo = ({setStartDate, setEndDate}:PackInfoProps) => {
    // const stateStartDate = useSelector((state: RootState)=> state.PackUpdate.startDate)
    // const stateEndDate = useSelector((state: RootState)=> state.PackUpdate.endDate)
    // const stateTicketPrice = useSelector((state: RootState)=> state.PackUpdate.ticketPrice)
    // const stateComboPrice = useSelector((state: RootState)=> state.PackUpdate.comboPrice)
    // const stateStatus = useSelector((state: RootState)=> state.PackUpdate.status)
    // useEffect(()=>{},[stateStartDate])
    // useEffect(()=>{},[stateEndDate])
    // useEffect(()=>{},[stateTicketPrice])
    // useEffect(()=>{},[stateComboPrice])
    // useEffect(()=>{},[stateStatus])


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
        setStartDate(startDayActive)
    }, [startDayActive]);
    useEffect(() => {
        setEndDate(endDayActive)
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
        if(CheckBoxValues.length === 0){
            dispatch(showCheckBoxPrice("0"))
        }else if(CheckBoxValues.length === 1 && CheckBoxValues[0] == "Vé lẻ"){
            dispatch(showCheckBoxPrice("1"))
        }else if(CheckBoxValues.length === 1 && CheckBoxValues[0] == "Combo"){
            dispatch(showCheckBoxPrice("2"))
        }else {
            dispatch(showCheckBoxPrice("3"))
        }
    },[CheckBoxValues])
    




    return (
        <div className="pack__info">
            <div className="pack__info-item">
                <div className="pack__info-item-date-start">
                    Ngày áp dụng<br />
                    <div>
                        {/* <input disabled type="text" value={(stateStartDate && startDayActive == "dd/mm/yyyy") ? stateStartDate : startDayActive} placeholder={startDayActive}/> */}
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
                        {/* <input disabled type="text" value={(stateEndDate && endDayActive == "dd/mm/yyyy") ? stateEndDate : endDayActive} placeholder={endDayActive}/> */}
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
                {/* <input className="pack__info-item-price-single-check" type="checkbox" name="checkbox-group" value="Vé lẻ" checked={CheckBoxValues.includes("Vé lẻ")} onChange={handleOnChange} />
                    Vé lẻ [VND/Vé] với giá <input id="price-single-input" className="pack__info-item-price-single-input" placeholder="Giá vé" type="text" value={stateTicketPrice.split(" ")[0]} /> / vé */}
                    <input className="pack__info-item-price-single-check" type="checkbox" name="checkbox-group" value="Vé lẻ" checked={CheckBoxValues.includes("Vé lẻ")} onChange={handleOnChange} />
                    Vé lẻ [VND/Vé] với giá <input id="price-single-input" className="pack__info-item-price-single-input" placeholder="Giá vé" type="text"/> / vé
                </div>
                <div className="pack__info-item-price-combo">
                    {/* <input className="pack__info-item-price-combo-check" type="checkbox" name="checkbox-group" value="Combo" checked={CheckBoxValues.includes("Combo")} onChange={handleOnChange} />
                    Combo vé với giá <input id="price-combo-input" className="pack__info-item-price-combo-input" placeholder="Giá vé" type="text" value={stateComboPrice.split(" ")[0]} /> 
                    / <input id="price-combo-count-input" className="pack__info-item-price-combo-count" placeholder="Số vé" type="text" value={stateComboPrice.split("/")[1].split(" ")[0]}/> vé */}
                    <input className="pack__info-item-price-combo-check" type="checkbox" name="checkbox-group" value="Combo" checked={CheckBoxValues.includes("Combo")} onChange={handleOnChange} />
                    Combo vé với giá <input id="price-combo-input" className="pack__info-item-price-combo-input" placeholder="Giá vé" type="text" /> 
                    / <input id="price-combo-count-input" className="pack__info-item-price-combo-count" placeholder="Số vé" type="text"/> vé
                </div>
            </div>
            <div className="pack__info-item">
                <div className="pack__info-item-state">
                    Tình trạng <br />
                    {/* <select id="pack-status-input" className="pack__info-item-state-select" name="" value={stateStatus}> */}
                    <select id="pack-status-input" className="pack__info-item-state-select" name="">
                        <option  className="pack__info-item-state-select-item" value="Đang áp dụng">Đang áp dụng</option>
                        <option className="pack__info-item-state-select-item" value="Tắt">Tắt</option>
                    </select>
                    <p className="pack__info-item-state-message"><span>*</span>là thông tin bắt buộc</p>
                </div>
            </div>
        <MyCalendar setSelectedDay = {setSelectedDay}/>
        </div>
    )
}