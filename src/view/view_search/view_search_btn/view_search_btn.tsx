import React from 'react';
import "./view_search_btn.css"
import { Filter } from "react-feather"
import { useDispatch, useSelector } from 'react-redux';
import { showTicketFilter } from '../../../layout/ticket_filter/TicketFilterSlice';
import { RootState } from '../../../app/store';
import { showPackAdd } from '../../../layout/pack_add/PackAddSlice';
import { changeCheckBtn } from './CheckBtnSlice';




const TicketListBtn = () => {
    const dispatch = useDispatch();
    const handleShowFilter = (active:string) => {
        dispatch(showTicketFilter(active));
    }

    
    return (
        <div className='view-search-btn'>
            <button className='view-search-btn__filter btn' onClick={() => handleShowFilter("show")}>
                <Filter className='view-search-btn__filter-icon'/>Lọc vé
            </button>
            <button className='view-search-btn__export-file btn'>Xuất file (.csv)</button>
        </div>
    )
}


const TicketCheckBtn = () => {
    const dispatch = useDispatch();
    const handleCheckTicket = (active:string) => {
        dispatch(changeCheckBtn(active));
    }
    return (
        <div className='view-search-btn'>
            <button className='view-search-btn__check btn primary-btn' onClick={()=>handleCheckTicket("checked")}>Chốt đối soát</button>
        </div>
    )
}

const TicketPackBtn = () => {
    const dispatch = useDispatch();
    const handleShowPackAdd = (active:string) => {
        dispatch(showPackAdd(active));
    }
    return (
        <div className='view-search-btn'>
            <button className='view-search-btn__export-file btn'>Xuất file (.csv)</button>
            <button onClick={() => handleShowPackAdd("show")} className='view-search-btn__add-ticket btn primary-btn'>Thêm gói vé</button>
        </div>
    )
}


export const ViewSearchBtn = () => {
    const selected = useSelector((state: RootState) => state.menu.selected);
    return (selected == "List" ? <TicketListBtn/> 
    : selected == "Check" ? <TicketCheckBtn/> 
    : <TicketPackBtn/>)
}