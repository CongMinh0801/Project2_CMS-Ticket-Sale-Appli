import React from 'react';
import "./view_search_btn.css"
import { Filter } from "react-feather"

interface ViewSearchBtnProps {
    typeOfList: string;
}

const TicketListBtn = () => {
    return (
        <div className='view-search-btn'>
            <button className='view-search-btn__filter btn'>
                <Filter className='view-search-btn__filter-icon'/>Lọc vé
            </button>
            <button className='view-search-btn__export-file btn'>Xuất file (.csv)</button>
        </div>
    )
}

const TicketCheckBtn = () => {
    return (
        <div className='view-search-btn'>
            <button className='view-search-btn__check btn primary-btn'>Chốt đối soát</button>
        </div>
    )
}

const TicketPackBtn = () => {
    return (
        <div className='view-search-btn'>
            <button className='view-search-btn__export-file btn'>Xuất file (.csv)</button>
            <button className='view-search-btn__add-ticket btn primary-btn'>Thêm gói vé</button>
        </div>
    )
}


export const ViewSearchBtn = (props:ViewSearchBtnProps) => {
    return (props.typeOfList == "ticket list" ? <TicketListBtn/> 
    : props.typeOfList == "ticket check" ? <TicketCheckBtn/> 
    : <TicketPackBtn/>)
}