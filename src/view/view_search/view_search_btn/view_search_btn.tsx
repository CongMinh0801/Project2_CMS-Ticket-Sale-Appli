import React from 'react';
import "./view_search_btn.css"
import { Filter } from "react-feather"

export const ViewSearchBtn: React.FC = () => {
    return (
        <div className='view-search-btn'>
            <button className='view-search-btn__filter btn'>
                <Filter className='view-search-btn__filter-icon'/>Lọc vé
            </button>
            <button className='view-search-btn__export-file btn'>Xuất file (.csv)</button>
            {/* <button className='view-search-btn__check btn primary-btn'>Chốt đối soát</button>
            <button className='view-search-btn__add-ticket btn primary-btn'>Thêm gói vé</button> */}
        </div>
    )
}