import React from 'react';
import "./ChangeDate.css"
import {Calendar} from "react-feather"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { showChangeDate } from './ChangeDateSlice';
import { showCalendar } from '../calendar/CalendarSlice';

export const ChangeDate:React.FC = () => {
    const ChangeDateState = useSelector((state: RootState) => state.ChangeDate.Active_state);

    const dispatch = useDispatch();
    const handleCancer = (active:string) => {
        dispatch(showChangeDate(active));
    }
    const handleSave = (active:string) => {
        dispatch(showChangeDate(active));
    }

    const handleShowCalendar = (active:string) => {
        dispatch(showCalendar(active));
    }

    return (
        <div className='change-date-back' style={ChangeDateState == "hidden" ? {display:"none"} : {display:"block"}}>
            <div className='change-date'>
                <h2 className='change-date__title'>Đổi ngày sử dụng vé</h2>
                <div className='change-date__ticket-id'>
                    <span>Số vé</span>
                    <label className='change-date__ticket-id-name' htmlFor="">ABCXYZ@3455</label>
                </div>
                <div className='change-date__ticket-type'>
                    <span>Số vé</span>
                    <label className='change-date__ticket-type-name' htmlFor="">Vé cổng - Vé sự kiện</label>
                </div>
                <div className='change-date__event'>
                    <span>Tên sự kiện</span>
                    <label className='change-date__event-name' htmlFor="">Lễ hội đua thuyền</label>
                </div>
                <div className='change-date__expiry'>
                    <span>Hạn sử dụng</span>
                    <input type="date"/>
                    <button onClick={() => handleShowCalendar("show")}><Calendar className='change-date__expiry-icon'/></button>
                </div>
                <div className='change-date__btn'>
                    <button onClick={() => handleCancer("hidden") } className='change-date__btn-cancel btn'>Hủy</button>
                    <button onClick={() => handleSave("hidden") } className='change-date__btn-save btn primary-btn'>Lưu</button>
                </div>
            </div>
        </div>
    )
}