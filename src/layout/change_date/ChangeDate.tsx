import React from 'react';
import "./ChangeDate.css"
import {Calendar} from "react-feather"

export const ChangeDate:React.FC = () => {
    return (
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
                <Calendar className='change-date__expiry-icon'/>
            </div>
            <div className='change-date__btn'>
                <button className='change-date__btn-cancel btn'>Hủy</button>
                <button className='change-date__btn-save btn primary-btn'>Lưu</button>
            </div>
        </div>
    )
}