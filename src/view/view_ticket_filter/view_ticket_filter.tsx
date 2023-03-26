import React from 'react';
import { Calendar, ChevronDown } from 'react-feather';
import "./view_ticket_filter.css";

interface ViewTicketFilterProps {
    thisDisplay:string
}

export const ViewTicketFilter = () => {
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
                    <div><input type="radio" name="" id="" />Tất cả</div>
                    <div><input type="radio" name="" id="" />Đã đối soát</div>
                    <div><input type="radio" name="" id="" />Chưa đối soát</div>
                </div>
            </div>
            <div className='view_ticket_filter__types'>
                Loại vé
                <span>Vé cổng</span>
            </div>
            <div className='view_ticket_filter__date_start'>
                Từ ngày
                <div>
                    <input type="date" />
                    <Calendar className='view_ticket_filter__date-icon'/>
                </div>
            </div>
            <div className='view_ticket_filter__date_end'>
                Đến ngày
                <div>
                    <input type="date" />
                    <Calendar className='view_ticket_filter__date-icon'/>
                </div>
            </div>
            <div className='view_ticket_filter__btn-block'>
                <button className='view_ticket_filter__btn btn'>Lọc</button>
            </div>
        </div>
    )
}