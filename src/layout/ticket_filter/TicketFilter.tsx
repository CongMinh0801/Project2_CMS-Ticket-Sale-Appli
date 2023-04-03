import React, { useEffect, useState } from "react";
import "./TicketFilter.css"
import {Calendar} from "react-feather"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { showTicketFilter } from "./TicketFilterSlice";
import { showCalendar } from "../calendar/CalendarSlice";



export const TicketFilter:React.FC = () => {
    const TicketFilterState = useSelector((state: RootState) => state.TicketFilter.Active_state);
    const dispatch = useDispatch();
    const handleShowFilter = (active:string) => {
        dispatch(showTicketFilter(active));
    }
    const handleShowCalendar = (active:string) => {
        dispatch(showCalendar(active));
    }

    const [selectedRadioOption, setSelectedRadioOption] = useState('');
    const handleOptionRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadioOption(event.target.value);
    };
    useEffect(() => {
        console.log(selectedRadioOption)
    }, [selectedRadioOption]);


    const [CheckBoxValues, setCheckBoxValues] = useState<string[]>([]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (value === "Tất cả") {
            if (checked) {
                setCheckBoxValues(["Tất cả"]);
            } else {
            setCheckBoxValues([]);
            }
        } else {
            if (CheckBoxValues.includes(value)) {
                setCheckBoxValues(CheckBoxValues.filter((item) => item !== value));
            } else {
                setCheckBoxValues([...CheckBoxValues, value]);
            }
        }
    };


    return (
        <div className="ticket-filter-back" style={TicketFilterState == "hidden" ? {display:"none"} : {display:"block"}}>
            <div className="ticket-filter">
                <div className="ticket-filter__title">
                    <h2>Lọc vé</h2>
                </div>
                <div className="ticket-filter__date">
                    <div className="ticket-filter__date-start">
                        Từ ngày <br />
                        <input className="ticket-filter__date-start-input" type="date" />
                        <button onClick={()=>handleShowCalendar("show")}>
                            <Calendar className="ticket-filter__date-start-input-icon"/>
                        </button>
                    </div>
                    <div className="ticket-filter__date-end">
                        Đến ngày <br />
                        <input className="ticket-filter__date-end-input" type="date" />
                        <button onClick={()=>handleShowCalendar("show")}>
                            <Calendar className="ticket-filter__date-start-input-icon"/>
                        </button>
                    </div>
                </div>
                <div className="ticket-filter__state">
                    Tình trạng sử dụng <br />
                    <div>
                        <div className="ticket-filter__state-item">
                            <input type="radio" id="radio1" name="radio-group" value="Tất cả" checked={selectedRadioOption === "Tất cả"} onChange={handleOptionRadioChange} />
                            Tất cả
                        </div>
                        <div className="ticket-filter__state-item">
                            <input type="radio" id="radio2" name="radio-group" value="Chưa sử dụng" checked={selectedRadioOption === "Chưa sử dụng"} onChange={handleOptionRadioChange}/>
                            Chưa sử dụng
                        </div>
                        <div className="ticket-filter__state-item">
                            <input type="radio" id="radio3" name="radio-group" value="Đã sử dụng" checked={selectedRadioOption === "Đã sử dụng"} onChange={handleOptionRadioChange}/>
                            Đã sử dụng
                        </div>
                        <div className="ticket-filter__state-item">
                            <input type="radio" id="radio4" name="radio-group" value="Hết hạn" checked={selectedRadioOption === "Hết hạn"} onChange={handleOptionRadioChange}/>
                            Hết hạn
                        </div>
                        </div>
                    </div>
                <div className="ticket-filter__gate">
                    Cổng check-in <br />
                    <div>
                        <div className="ticket-filter__gate-item">
                            <input type="checkbox" id="checkbox1" name="checkbox-group" value="Tất cả" checked={CheckBoxValues.includes("Tất cả")} onChange={handleOnChange}/>
                            Tất cả
                        </div>
                        <div className="ticket-filter__gate-item">
                            <input type="checkbox" id="checkbox2" name="checkbox-group" value="Cổng 1" checked={CheckBoxValues.includes("Cổng 1")} onChange={handleOnChange} />
                            Cổng 1
                        </div>
                        <div className="ticket-filter__gate-item">
                            <input type="checkbox" id="checkbox3" name="checkbox-group" value="Cổng 2" checked={CheckBoxValues.includes("Cổng 2")} onChange={handleOnChange} />
                            Cổng 2
                        </div>
                        <div className="ticket-filter__gate-item">
                            <input type="checkbox" id="checkbox4" name="checkbox-group" value="Cổng 3" checked={CheckBoxValues.includes("Cổng 3")} onChange={handleOnChange} />
                            Cổng 3
                        </div>
                        <div className="ticket-filter__gate-item">
                            <input type="checkbox" id="checkbox5" name="checkbox-group" value="Cổng 4" checked={CheckBoxValues.includes("Cổng 4")} onChange={handleOnChange} />
                            Cổng 4
                        </div>
                        <div className="ticket-filter__gate-item">
                            <input type="checkbox" id="checkbox6" name="checkbox-group" value="Cổng 5" checked={CheckBoxValues.includes("Cổng 5")} onChange={handleOnChange} />
                            Cổng 5
                        </div>
                    </div>
                </div>
                <button onClick={() => handleShowFilter("hidden")} className="ticket-filter__btn btn">
                    Lọc
                </button>
            </div>
        </div>
    )
}